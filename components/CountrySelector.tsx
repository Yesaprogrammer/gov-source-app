import React from 'react';

interface CountrySelectorProps {
  countries: string[];
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  disabled?: boolean;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  countries,
  selectedCountry,
  setSelectedCountry,
  disabled = false,
}) => {
  return (
    <select
      id="country"
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
      disabled={disabled}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition duration-200 bg-white text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
    >
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};