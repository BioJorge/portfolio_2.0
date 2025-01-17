"use client";
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { useLanguageContext } from "@/context/LanguageProvider";

const HomePage = () => {
  const { language } = useLanguageContext();
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
            {language === "en"
              ? "Full Stack Web Developer"
              : "Desenvolvedor Web Full Stack"}
          </h3>
        </div>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          {language === "en"
            ? `Welcome to my Portfolio!! In this site you will get an overview of who
          Jorge Filho is, his educational accomplishments, career experiences,
          soft and hard skills, and links to his fascinating IT Projects.`
            : `Bem-vindo ao meu Portfolio!! Neste site você terá uma visão geral de quem
          é Jorge Filho, suas conquistas educacionais, experiências profissionais,
          habilidades técnicas e comportamentais, e links para seus fascinantes Projetos de TI.`}
        </p>

        <div className="flex gap-4 mt-6">
          <CustomButton
            href="public/CV_EN_Jorge_Filho.pdf"
            download="CV Jorge Filho"
            isPrimary={true}
          >
            {language === "en" ? "Download CV" : "Baixar CV"}
          </CustomButton>
          <CustomButton isPrimary={false} href="#contact">
            {language === "en" ? "Contact me" : "Contate-me"}
          </CustomButton>
        </div>

        <div className="flex gap-6 mt-10">
          <a
            href="https://github.com/BioJorge"
            className="w-12 h-12 flex items-center justify-center border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
          >
            <i className="bx bxl-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-carlos-sousa-filho-5310861a3/"
            className="w-12 h-12 flex items-center justify-center border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/biojorge96/"
            className="w-12 h-12 flex items-center justify-center border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
          >
            <i className="bx bxl-instagram text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Optional image hover section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black opacity-80"></div>
    </section>
  );
};

export default HomePage;
