import { GoogleGenerativeAI } from '@google/generative-ai';
import { ResultData } from '../types';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

// Sitios oficiales del gobierno por país
const OFFICIAL_SOURCES = {
  'Perú': [
    'https://www.gob.pe',
    'https://www.migraciones.gob.pe',
    'https://www.sunat.gob.pe',
    'https://www.mtpe.gob.pe',
    'https://www.minjus.gob.pe',
    'https://www.congreso.gob.pe',
    'https://www.pcm.gob.pe',
    'https://www.produce.gob.pe',
    'https://www.minsa.gob.pe',
    'https://www.minedu.gob.pe'
  ],
  'Australia': [
    'https://www.gov.au',
    'https://www.homeaffairs.gov.au',
    'https://www.ato.gov.au',
    'https://www.employment.gov.au'
  ],
  'Canada': [
    'https://www.canada.ca',
    'https://www.cic.gc.ca',
    'https://www.cra-arc.gc.ca'
  ],
  'United States': [
    'https://www.usa.gov',
    'https://www.uscis.gov',
    'https://www.irs.gov',
    'https://www.dol.gov'
  ],
  'United Kingdom': [
    'https://www.gov.uk',
    'https://www.ukvi.homeoffice.gov.uk',
    'https://www.hmrc.gov.uk'
  ],
  'Germany': [
    'https://www.germany.travel',
    'https://www.bmi.bund.de',
    'https://www.bundesfinanzministerium.de'
  ],
  'France': [
    'https://www.service-public.fr',
    'https://www.diplomatie.gouv.fr',
    'https://www.immigration.interieur.gouv.fr'
  ],
  'Brazil': [
    'https://www.gov.br',
    'https://www.justica.gov.br',
    'https://www.receita.fazenda.gov.br'
  ],
  'Japan': [
    'https://www.japan.go.jp',
    'https://www.moj.go.jp',
    'https://www.nta.go.jp'
  ],
  'India': [
    'https://www.india.gov.in',
    'https://www.mha.gov.in',
    'https://www.incometax.gov.in'
  ],
  'South Africa': [
    'https://www.gov.za',
    'https://www.dha.gov.za',
    'https://www.sars.gov.za'
  ]
};

export async function fetchOfficialAnswer(question: string, country: string): Promise<ResultData> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Eres un asistente legal especializado en regulaciones gubernamentales. Tu tarea es responder preguntas legales y administrativas basándote en información oficial del gobierno.

PREGUNTA: ${question}
PAÍS: ${country}

INSTRUCCIONES:
1. Proporciona una respuesta precisa y oficial basada en las regulaciones gubernamentales actuales de ${country}
2. Enfócate en información legal y administrativa específica del país
3. Si es sobre Perú, incluye información detallada sobre procesos, requisitos y documentación necesaria
4. Menciona los organismos o entidades gubernamentales responsables
5. Incluye referencias a leyes, decretos o regulaciones específicas cuando sea relevante
6. Mantén un tono profesional y claro
7. Si no tienes información específica, indica que se debe consultar directamente con las autoridades competentes

RESPUESTA:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();

    // Generar fuentes oficiales relevantes basadas en el país
    const countrySources = OFFICIAL_SOURCES[country as keyof typeof OFFICIAL_SOURCES] || OFFICIAL_SOURCES['Perú'];
    
    // Seleccionar fuentes más relevantes basadas en la pregunta
    let relevantSources = countrySources.slice(0, 3);
    
    // Personalizar fuentes según el tipo de consulta
    if (question.toLowerCase().includes('visa') || question.toLowerCase().includes('inmigra')) {
      relevantSources = country === 'Perú' 
        ? ['https://www.migraciones.gob.pe', 'https://www.gob.pe', 'https://www.rree.gob.pe']
        : countrySources.slice(0, 3);
    } else if (question.toLowerCase().includes('impuesto') || question.toLowerCase().includes('tributo')) {
      relevantSources = country === 'Perú' 
        ? ['https://www.sunat.gob.pe', 'https://www.gob.pe', 'https://www.mef.gob.pe']
        : countrySources.slice(0, 3);
    } else if (question.toLowerCase().includes('laboral') || question.toLowerCase().includes('trabajo')) {
      relevantSources = country === 'Perú' 
        ? ['https://www.mtpe.gob.pe', 'https://www.gob.pe', 'https://www.sunafil.gob.pe']
        : countrySources.slice(0, 3);
    } else if (question.toLowerCase().includes('empresa') || question.toLowerCase().includes('negocio')) {
      relevantSources = country === 'Perú' 
        ? ['https://www.produce.gob.pe', 'https://www.gob.pe', 'https://www.indecopi.gob.pe']
        : countrySources.slice(0, 3);
    }

    const sources = relevantSources.map(uri => ({
      uri,
      title: `Sitio Oficial del Gobierno de ${country} - ${uri.split('//')[1]?.split('.')[1]?.toUpperCase() || 'Gobierno'}`
    }));

    return {
      answer,
      sources
    };

  } catch (error) {
    console.error('Error fetching answer from Gemini:', error);
    throw new Error('Error al obtener la respuesta del servicio de inteligencia artificial. Por favor, intenta nuevamente.');
  }
}