
import React, { useState, useCallback } from 'react';
import { ApiStatus, ResultData } from './types';
import { COUNTRIES } from './constants';
import { fetchOfficialAnswer } from './services/geminiService';
import { CountrySelector } from './components/CountrySelector';
import { GovernmentBuildingIcon, LoaderIcon, SearchIcon, AlertTriangleIcon, LinkIcon, CheckCircleIcon } from './components/icons';

const App: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [country, setCountry] = useState<string>(COUNTRIES[0]);
  const [status, setStatus] = useState<ApiStatus>(ApiStatus.IDLE);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) {
      setError("Please enter a question.");
      setStatus(ApiStatus.ERROR);
      return;
    }

    setStatus(ApiStatus.LOADING);
    setError(null);
    setResult(null);

    try {
      const apiResult = await fetchOfficialAnswer(question, country);
      setResult(apiResult);
      setStatus(ApiStatus.SUCCESS);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to get answer. ${errorMessage}`);
      setStatus(ApiStatus.ERROR);
    }
  }, [question, country]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GovernmentBuildingIcon className="w-10 h-10 text-brand-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">
              GovSource AI
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Get answers to your legal & administrative questions, sourced directly from official government websites.
          </p>
        </header>

        <main>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="question" className="block text-lg font-semibold text-gray-700 mb-2">
                  Your Question
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g., What are the requirements for a skilled worker visa?"
                  className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition duration-200 resize-none"
                  disabled={status === ApiStatus.LOADING}
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-lg font-semibold text-gray-700 mb-2">
                  Select Country
                </label>
                <CountrySelector
                  countries={COUNTRIES}
                  selectedCountry={country}
                  setSelectedCountry={setCountry}
                  disabled={status === ApiStatus.LOADING}
                />
              </div>

              <button
                type="submit"
                disabled={status === ApiStatus.LOADING}
                className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === ApiStatus.LOADING ? (
                  <>
                    <LoaderIcon className="animate-spin w-5 h-5" />
                    Searching...
                  </>
                ) : (
                  <>
                    <SearchIcon className="w-5 h-5" />
                    Find Answer
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-8">
            {status === ApiStatus.LOADING && (
              <div className="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200">
                <LoaderIcon className="w-12 h-12 text-brand-primary mx-auto animate-spin" />
                <p className="mt-4 text-lg font-semibold text-gray-700">Analyzing official sources...</p>
                <p className="text-gray-500">This may take a moment.</p>
              </div>
            )}
            
            {status === ApiStatus.ERROR && error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg flex items-start gap-3" role="alert">
                <AlertTriangleIcon className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {status === ApiStatus.SUCCESS && result && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-green-500" />
                    <h2 className="text-2xl font-bold text-gray-800">Answer</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                   <p>{result.answer}</p>
                </div>
                {result.sources.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                      <LinkIcon className="w-5 h-5" />
                      Official Sources
                    </h3>
                    <ul className="space-y-2">
                      {result.sources.map((source, index) => (
                        <li key={index}>
                          <a
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-secondary hover:text-brand-primary hover:underline transition duration-200 break-all"
                          >
                            {source.title || source.uri}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
