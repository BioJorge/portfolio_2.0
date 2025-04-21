"use client";
import React from "react";
import Image from "next/image";
import { useLanguageContext } from "@/context/LanguageProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SkillsSection – hard & soft skills showcase
 * Converted from legacy HTML+CSS to React + Tailwind + shadcn‑ui.
 */
const SkillsSection = () => {
  const { language } = useLanguageContext();

  // --------------------------------------------------------------------
  // ─── Localised Copy ──────────────────────────────────────────────────
  // --------------------------------------------------------------------
  const copy = {
    heading: {
      pt: { title: "Minhas", highlight: "Skills" },
      en: { title: "My", highlight: "Skills" },
    },
    hard: { pt: "Hard Skills", en: "Hard Skills" },
    soft: { pt: "Soft Skills", en: "Soft Skills" },
  } as const;

  // --------------------------------------------------------------------
  // ─── Data Definitions ────────────────────────────────────────────────
  // --------------------------------------------------------------------
  type Localised = { pt: string; en: string };
  type HardSkill = {
    name: Localised;
    description: Localised;
    image: string;
  };
  const hardSkills: HardSkill[] = [
    {
      name: { en: "React", pt: "React" },
      description: {
        en: "Able to craft interactive UIs that boost usability & performance despite limited experience.",
        pt: "Apesar da experiência limitada, consigo criar UIs interativas que melhoram usabilidade e desempenho.",
      },
      image: "/images/react_logo.png",
    },
    {
      name: { en: "Node.js", pt: "Node.js" },
      description: {
        en: "Build scalable network applications & back‑end services.",
        pt: "Construção de aplicações de rede escaláveis e serviços back‑end.",
      },
      image: "/images/nodejs_logo.svg.png",
    },
    {
      name: { en: "MSSQL", pt: "MSSQL" },
      description: {
        en: "Manage, retrieve & store relational data efficiently.",
        pt: "Gestão, recuperação e armazenamento eficaz de dados relacionais.",
      },
      image: "/images/mssql_logo.png",
    },
    {
      name: { en: "Tailwind CSS", pt: "Tailwind CSS" },
      description: {
        en: "Design stunning, responsive front‑ends rapidly.",
        pt: "Criação rápida de front‑ends impressionantes e responsivos.",
      },
      image: "/images/tailwind.png",
    },
    {
      name: { en: "JavaScript", pt: "JavaScript" },
      description: {
        en: "Add interactivity & dynamic features to web pages.",
        pt: "Adicionar interatividade e recursos dinâmicos a páginas web.",
      },
      image: "/images/js_logo.png",
    },
    {
      name: { en: "PHP", pt: "PHP" },
      description: {
        en: "Develop robust server‑side apps & dynamic content.",
        pt: "Desenvolvimento de aplicações server‑side robustas e conteúdo dinâmico.",
      },
      image: "/images/logo-php-1024.png",
    },
    {
      name: { en: "MySQL", pt: "MySQL" },
      description: {
        en: "Design & administer relational DBs with confidence.",
        pt: "Design e administração eficaz de bases de dados relacionais.",
      },
      image: "/images/mysql_logo.png",
    },
  ];

  // type SoftSkill = { name: Localised; icon: string };
  // const softSkills: SoftSkill[] = [
  //   {
  //     name: { en: "Time management", pt: "Gestão de tempo" },
  //     icon: "/images/time_managment.png",
  //   },
  //   {
  //     name: { en: "Problem‑solving", pt: "Resolução de problemas" },
  //     icon: "/images/problem-solving.png",
  //   },
  //   {
  //     name: { en: "Creativity", pt: "Criatividade" },
  //     icon: "/images/creativity.png",
  //   },
  //   {
  //     name: { en: "Work ethic", pt: "Ética de trabalho" },
  //     icon: "/images/soft-2.png",
  //   },
  //   {
  //     name: { en: "Assertiveness", pt: "Assertividade" },
  //     icon: "/images/effective-communication.png",
  //   },
  //   {
  //     name: { en: "Teamwork", pt: "Trabalho em equipa" },
  //     icon: "/images/teamwork.png",
  //   },
  // ];

  // --------------------------------------------------------------------
  // ─── Helpers ─────────────────────────────────────────────────────────
  // --------------------------------------------------------------------
  const t = <T extends Record<string, any>>(obj: T): T[keyof T] =>
    obj[language as keyof T];

  // --------------------------------------------------------------------
  // ─── Render ──────────────────────────────────────────────────────────
  // --------------------------------------------------------------------
  return (
    <section
      id="skills"
      className="py-24 flex flex-col items-center bg-foreground"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
        {t(copy.heading).title}
        <span className="text-primary">{t(copy.heading).highlight}</span>
      </h2>

      {/* ────────────────── Hard Skills ────────────────── */}
      <h3 className="text-2xl font-semibold mb-8">{t(copy.hard)}</h3>
      <div className="w-full max-w-6xl">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {hardSkills.map((skill, idx) => (
              <CarouselItem
                key={idx}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="h-full flex flex-col items-center text-center shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <Image
                      src={skill.image}
                      alt={t(skill.name)}
                      width={160}
                      height={160}
                      className="w-32 h-32 object-contain"
                    />
                    <h4 className="text-xl font-semibold uppercase">
                      {t(skill.name)}
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {t(skill.description)}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* ────────────────── Soft Skills ──────────────────
      <h3 className="text-2xl font-semibold mt-20 mb-10">{t(copy.soft)}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {softSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 animate-fadeInUp"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <Image
              src={skill.icon}
              alt={t(skill.name)}
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />
            <p className="text-lg font-medium flex items-center gap-2">
              {t(skill.name)} <Check className="w-5 h-5 text-primary" />
            </p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default SkillsSection;
