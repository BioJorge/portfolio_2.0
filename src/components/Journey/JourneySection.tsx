"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useLanguageContext } from "@/context/LanguageProvider";
import { Calendar } from "lucide-react";

/**
 * JourneySection – education & experience timeline
 * Converted from legacy HTML+CSS to React + Tailwind, following the
 * same component conventions as AboutSection.
 */
const JourneySection = () => {
  const { language } = useLanguageContext();

  type JourneyItem = {
    period: string;
    title: string;
    description: {
      en: ReactNode | string;
      pt: ReactNode | string;
    };
  };

  // ---- Text content (multi‑language) ------------------------------------
  const copy = {
    heading: {
      pt: { title: "Minha", highlight: "Jornada" },
      en: { title: "My", highlight: "Journey" },
    },
    columns: {
      education: { pt: "Educação", en: "Education" },
      experience: { pt: "Experiência", en: "Experience" },
    },
  };

  // ---- Data -------------------------------------------------------------
  const education: JourneyItem[] = [
    {
      period: "2023 – 2024",
      title: "Software Engineering Post‑Graduate Degree",
      description: {
        pt: "Pós‑graduação online em Engenharia de Software pela Descomplica.com.br.",
        en: "Online post‑graduate course in Software Engineering provided by Descomplica.com.br.",
      },
    },
    {
      period: "2022 – 2023",
      title: "Full‑Stack Web Developer Course",
      description: {
        pt: (
          <>
            Curso online da Codemaster.pt, organização reconhecida pelo Governo
            de Portugal (INCoDe.2030). Foco em tecnologias front‑end e back‑end:
            <span className="text-primary font-semibold">
              HTML | CSS | JavaScript | PHP | MySQL | Bootstrap
            </span>
            .
          </>
        ),
        en: (
          <>
            Online course by Codemaster.pt (Portuguese government initiative
            INCoDe.2030). Covered front‑end & back‑end tech:
            <span className="text-primary font-semibold">
              HTML | CSS | JavaScript | PHP | MySQL | Bootstrap
            </span>
            .
          </>
        ),
      },
    },
  ];

  const experience: JourneyItem[] = [
    {
      period: "2023 – Ongoing",
      title: "Full‑Stack Developer at InoDev",
      description: {
        pt: (
          <>
            Desenvolvedor full‑time na consultoria de inovação InoDev,
            construindo aplicações web com React, Node.js e SQL.&nbsp;
            <Link
              href="https://www.inodev.pt/"
              className="text-primary underline"
              target="_blank"
            >
              inodev.pt
            </Link>
            .
          </>
        ),
        en: (
          <>
            Full‑time full‑stack developer at innovation consultancy InoDev.
            Building web apps with React, Node.js and SQL.&nbsp;
            <Link
              href="https://www.inodev.pt/"
              className="text-primary underline"
              target="_blank"
            >
              inodev.pt
            </Link>
            .
          </>
        ),
      },
    },
    {
      period: "Jul 2023 – Aug 2023",
      title: "Freelance Full‑Stack Developer at University of Aveiro",
      description: {
        pt: (
          <>
            Desenvolvimento full‑stack de projetos do Centro de Línguas,
            Literaturas e Culturas (CLLC) da Universidade de Aveiro.&nbsp;
            <Link
              href="https://www.ua.pt/pt/cllc/"
              className="text-primary underline"
              target="_blank"
            >
              ua.pt/cllc
            </Link>
            .
          </>
        ),
        en: (
          <>
            Freelance full‑stack development for Center for Languages,
            Literatures and Cultures (CLLC), University of Aveiro.&nbsp;
            <Link
              href="https://www.ua.pt/pt/cllc/"
              className="text-primary underline"
              target="_blank"
            >
              ua.pt/cllc
            </Link>
            .
          </>
        ),
      },
    },
    // {
    //   period: "2021 – 2022",
    //   title: "Scientific Investigator at University of Minho",
    //   description: {
    //     pt: "Investigador científico no ICVS enquanto concluía o mestrado, aprimorando habilidades de comunicação, trabalho em equipe e pensamento crítico.",
    //     en: "Scientific investigator at ICVS during master's program, honing communication, teamwork and critical‑thinking skills.",
    //   },
    // },
    // {
    //   period: "2016 – 2019",
    //   title: "Academic Leagues & Tutoring (Bachelor's)",
    //   description: {
    //     pt: "Participação em ligas acadêmicas e tutoria de colegas durante a graduação em Veterinária, reforçando competências interpessoais.",
    //     en: "Active in academic leagues and peer tutoring during Veterinary bachelor's degree, strengthening interpersonal skills.",
    //   },
    // },
  ];

  // ---- Helpers ----------------------------------------------------------

  const ColumnComponent = ({
    array,
    title,
  }: {
    array: JourneyItem[];
    title: string;
  }) => {
    return (
      <div className="grid-cols-1">
        <h3 className="text-2xl font-semibold mb-8">{title}</h3>
        <ol className=" flex flex-col">
          {array.map((el, idx) => (
            <RenderItem item={el} idx={idx} key={idx} />
          ))}
        </ol>
      </div>
    );
  };

  const RenderItem = ({ item, idx }: { item: JourneyItem; idx: number }) => (
    <li key={idx} className="grid grid-cols-[30px_1fr] gap-2 justify-center">
      <div className=" flex flex-col items-center justify-center">
        {/* Dot */}
        <span className="inline-block w-4 h-4 rounded-full bg-primary"></span>
        <span className="inline-block h-full w-0.5 bg-primary"></span>
      </div>

      <div className="p-2 border-2 border-primary rounded-sm mb-4">
        <div className="text-primary font-medium flex gap-2">
          <Calendar width={24} strokeWidth={2} /> {item.period}
        </div>
        <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
        <p className="text-sm leading-relaxed mt-2 text-justify">
          {typeof item.description === "string"
            ? item.description
            : item.description[language as keyof typeof item.description]}
        </p>
      </div>
    </li>
  );

  return (
    <section id="education" className="py-24 flex flex-col items-center">
      {/* Title */}
      <h2 className="flex items-center gap-4 text-4xl md:text-5xl font-bold">
        {copy.heading[language as keyof typeof copy.heading].title}
        <span className="text-primary">
          {copy.heading[language as keyof typeof copy.heading].highlight}
        </span>
      </h2>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 w-full max-w-6xl">
        {/* Education column */}
        <ColumnComponent
          array={education}
          title={
            copy.columns.education[
              language as keyof typeof copy.columns.education
            ]
          }
        />

        {/* Experience column */}
        <ColumnComponent
          array={experience}
          title={
            copy.columns.experience[
              language as keyof typeof copy.columns.experience
            ]
          }
        />
      </div>
    </section>
  );
};

export default JourneySection;
