import React, { createContext, useContext, useState } from 'react';

interface FilterState {
  departement: string;
  ville: string;
  arrondissement: string;
  setDepartement: (departement: string) => void;
  setVille: (ville: string) => void;
  setArrondissement: (arrondissement: string) => void;
}

// Créer le contexte avec une valeur par défaut
const FilterContext = createContext<FilterState | undefined>(undefined);

// Hook pour utiliser le contexte
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

// Composant Provider pour envelopper l'application ou les composants qui utilisent ce contexte
export const FilterProvider: React.FC = ({ children }) => {
  const [departement, setDepartement] = useState('');
  const [ville, setVille] = useState('');
  const [arrondissement, setArrondissement] = useState('');

  return (
    <FilterContext.Provider value={{ departement, ville, arrondissement, setDepartement, setVille, setArrondissement }}>
      {children}
    </FilterContext.Provider>
  );
};
