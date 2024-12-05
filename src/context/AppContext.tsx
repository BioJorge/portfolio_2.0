"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Interface para o contexto da aplicação
interface AppContextType {
  theme: "light" | "dark";
  language: "pt" | "en";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  setLanguage: React.Dispatch<React.SetStateAction<"pt" | "en">>;
}

// Crie o contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Propriedades para o AppWrapper
interface AppWrapperProps {
  children: ReactNode;
}

// Componente wrapper do provedor
export function AppWrapper({ children }: AppWrapperProps) {
  // Defina o estado inicial
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext deve ser usado dentro de um AppWrapper");
  }
  return context;
}
