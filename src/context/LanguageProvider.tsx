"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Interface para o contexto da aplicação
interface LanguageContextType {
  language: "pt" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"pt" | "en">>;
}

// Crie o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Propriedades para o AppWrapper
interface LanguageContextProviderProps {
  children: ReactNode;
}

// Componente wrapper do provedor
export function LanguageWrapper({ children }: LanguageContextProviderProps) {
  // Defina o estado inicial
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useAppContext deve ser usado dentro de um AppWrapper");
  }
  return context;
}
