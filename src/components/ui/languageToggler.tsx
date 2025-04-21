//src/components/ui/languageToggler.tsx
"use client";

import { useLanguageContext } from "@/context/LanguageProvider";

export default function LanguageToggler({
  acessibilityText,
}: {
  acessibilityText: string;
}) {
  const { language, setLanguage } = useLanguageContext();
  return (
    <button
      className="text-secondary w-fit p-0 text-xl hover:text-primary font-semibold"
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
    >
      {language === "en" ? "PT" : "EN"}
      <span className="sr-only">{acessibilityText}</span>
    </button>
  );
}
