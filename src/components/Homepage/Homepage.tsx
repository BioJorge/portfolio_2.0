"use client";
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { useLanguageContext } from "@/context/LanguageProvider";
import SocialMediasComponent from "./SocialMedias";

const HomePage = () => {
  const { language } = useLanguageContext();

  const homePageTextContent = {
    headingText: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Web Developer",
    },
    welcomeText: {
      pt: "Bem-vindo ao meu Portfólio! Neste site você obterá uma visão ampla sobre quem é Jorge Filho, suas conquistas educacionais, experiências profissionais, habilidades técnicas e interpessoais, além de links para seus fascinantes Projetos de TI.",
      en: "Welcome to my Portfolio!! In this site you will get an abroad picture of who Jorge Filho is, his educational accomplishments, career experiences, soft and hard skills, and links to his fascinating IT Projects.",
    },
    buttonText1: {
      pt: "Baixar CV",
      en: "Download CV",
    },
    buttonText2: {
      pt: "Contate-me",
      en: "Contact me",
    },
  };
  return (
    <section
      id="home"
      className="min-h-screen w-screen flex items-center justify-center bg-background bg-cover bg-center px-[10%] py-20 relative"
    >
      <div className=" z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
          {language === "en" ? `Hello, I'm ` : `Olá, eu sou o `}{" "}
          <span className="text-primary">Jorge Filho</span>
        </h1>
        <div className="relative mt-4 text-primary">
          <h3 className="text-2xl md:text-3xl font-semibold border-b-4 border-primary inline-block">
            {homePageTextContent.headingText[language]}
          </h3>
        </div>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          {homePageTextContent.welcomeText[language]}
        </p>

        <div className="flex gap-4 mt-6">
          <CustomButton
            href="public/CV_EN_Jorge_Filho.pdf"
            download="CV Jorge Filho"
            isDefaultColourPrimary={true}
            direction="left-to-right"
          >
            {homePageTextContent.buttonText1[language]}
          </CustomButton>
          <CustomButton href="#contact" direction="right-to-left">
            {homePageTextContent.buttonText2[language]}
          </CustomButton>
        </div>

        <SocialMediasComponent />
      </div>

      {/* Optional image hover section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black opacity-80"></div>
    </section>
  );
};

export default HomePage;
