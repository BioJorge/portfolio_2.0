"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useLanguageContext } from "@/context/LanguageProvider";
import { BookMarked, BriefcaseBusiness, Calendar } from "lucide-react";

/**
 * JourneySection – education & experience timeline
 * Converted from legacy HTML+CSS to React + Tailwind, following the
 * same component conventions as AboutSection.
 */
const JourneySection = () => {
  const { language } = useLanguageContext();

  type JourneyItem = {
    period: {
      en: string;
      pt: string;
    };
    title: {
      en: string;
      pt: string;
    };
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
      period: {
        en: "2023 – 2024",
        pt: "2023 – 2024",
      },
      title: {
        en: "Software Engineering Post‑Graduate Degree",
        pt: "Pós-Graduação em Engenharia de Software",
      },
      description: {
        pt: "Pós‑graduação online em Engenharia de Software pela Descomplica.com.br.",
        en: "Online post‑graduate course in Software Engineering provided by Descomplica.com.br.",
      },
    },
    {
      period: {
        en: "2022 – 2023",
        pt: "2022 – 2023",
      },
      title: {
        en: "Full‑Stack Web Developer Course",
        pt: "Curso de Desenvolvedor Web Full‑Stack",
      },
      description: {
        pt: (
          <div className="flex flex-col">
            Curso online da Codemaster.pt, organização reconhecida pelo Governo
            de Portugal (INCoDe.2030). Foco em tecnologias front‑end e back‑end:
            <span className="text-primary font-semibold">
              HTML | CSS | JavaScript | PHP | MySQL | Bootstrap
            </span>
            .
          </div>
        ),
        en: (
          <div className="flex flex-col">
            Online course by Codemaster.pt (Portuguese government initiative
            INCoDe.2030). Covered front‑end & back‑end tech:
            <span className="text-primary font-semibold">
              HTML | CSS | JavaScript | PHP | MySQL | Bootstrap
            </span>
          </div>
        ),
      },
    },
  ];

  const experience: JourneyItem[] = [
    {
      period: {
        en: "2023 – Ongoing",
        pt: "2023 – Presente",
      },
      title: {
        en: "Full‑Stack Developer at InoDev",
        pt: "Desenvolvedor Full‑Stack na InoDev",
      },
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
      period: {
        en: "Jul 2023 – Aug 2023",
        pt: "Jul 2023 – Ago 2023",
      },
      title: {
        en: "Freelance Full‑Stack Developer at University of Aveiro",
        pt: "Desenvolvedor Full‑Stack Freelance na Universidade de Aveiro",
      },
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
  ];

  // ---- Helpers ----------------------------------------------------------

  const ColumnComponent = ({
    array,
    title,
    type,
  }: {
    array: JourneyItem[];
    title: string;
    type: "education" | "experience";
  }) => {
    return (
      <div className="grid-cols-1">
        <div className="flex gap-2 items-center  mb-8">
          {type === "education" && <BookMarked size={30} strokeWidth={2} />}
          {type === "experience" && (
            <BriefcaseBusiness size={30} strokeWidth={2} />
          )}
          <span className="text-2xl font-semibold"> {title}</span>
        </div>

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

      <div className="relative border-2 border-primary rounded-sm mb-4 group">
        <span
          className={`
        absolute top-0 left-0 w-full h-full bg-primary/10 z-10 
        inset-0 transform transition-transform origin-left scale-x-0 group-hover:scale-x-100
        `}
        ></span>
        <div className="relative z-0 bg-background p-2">
          <div className="text-primary font-medium flex gap-2">
            <Calendar width={24} strokeWidth={2} />{" "}
            {item.period[language as keyof typeof item.period]}
          </div>
          <h4 className="font-semibold text-lg mt-1">
            {item.title[language as keyof typeof item.title]}
          </h4>
          <p className="text-sm leading-relaxed mt-2 text-justify">
            {typeof item.description === "string"
              ? item.description
              : item.description[language as keyof typeof item.description]}
          </p>
        </div>
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
          type="education"
        />

        {/* Experience column */}
        <ColumnComponent
          array={experience}
          title={
            copy.columns.experience[
              language as keyof typeof copy.columns.experience
            ]
          }
          type="experience"
        />
      </div>
    </section>
  );
};

export default JourneySection;
