"use client";
import React from "react";
import { useLanguageContext } from "@/context/LanguageProvider";
import { SpinningPhotograph } from "./SpinningPhotograph";
import SocialMediasComponent from "../Homepage/SocialMedias";
import { CustomButton } from "../ui/CustomButton";

const AboutSection = () => {
  const { language } = useLanguageContext();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutTextContent = {
    title: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Web Developer",
    },
    paragraph1: {
      pt: "Desenvolvedor Full Stack dinâmico com mais de 2 anos de experiência liderando projetos web e mobile de ponta a ponta, incluindo sistemas bancários complexos. Domínio em Node.js, SQL, React, React Native, além de implantação de servidores e configuração de aplicações.",
      en: "Dynamic Full-Stack Developer with over 2 years of experience leading end-to-end web and mobile projects, including complex banking systems. Skilled in Node.js, SQL, React, and React Native, as well as server deployment and application configuration.",
    },
    paragraph2: {
      pt: "Reconhecido por suas habilidades em resolução de problemas, comunicação e liderança, Jorge Filho alia conhecimento técnico a uma mentalidade centrada no usuário. Possui experiência em ambientes internacionais e se destaca na entrega de soluções escaláveis, de alta qualidade, alinhadas aos objetivos de negócio e experiência do usuário.",
      en: "Known for strong problem-solving, communication, and leadership capabilities, Jorge Filho blends technical expertise with a user-centered mindset. He has experience in international environments and excels at delivering scalable, high-quality solutions that meet business goals and enhance user experiences.",
    },
    buttonText: {
      pt: "Saiba mais",
      en: "Read more",
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-evenly h-full"
    >
      <h2 className="flex gap-5 items-center text-[4rem]">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-[1fr_2fr] gap-10">
        <div className="flex flex-col gap-5 items-center">
          <SpinningPhotograph />
          <div className="flex flex-col items-center font-semibold">
            <h3>Jorge Carlos Dias de Sousa Filho</h3>
            <h4 className="text-primary">PgD in Software Engineering</h4>
          </div>

          <SocialMediasComponent />
        </div>

        <div className="flex flex-col items-center gap-5">
          <h3 className="text-primary font-bold text-2xl text-center">
            {aboutTextContent.title[language]}
          </h3>
          <p className="text-justify">
            {aboutTextContent.paragraph1[language]}
          </p>
          <p className="text-justify">
            {aboutTextContent.paragraph2[language]}
          </p>
          <CustomButton
            href="public/CV_EN_Jorge_Filho.pdf"
            download="CV Jorge Filho"
            isDefaultColourPrimary={true}
            direction="left-to-right"
          >
            {aboutTextContent.buttonText[language]}
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
