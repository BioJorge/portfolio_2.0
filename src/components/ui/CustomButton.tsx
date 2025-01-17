import React from "react";

export const CustomButton = ({
  children,
  onClick,
  href,
  download,
  isPrimary,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: string;
  isPrimary?: boolean;
}) => {
  const buttonClasses = isPrimary
    ? `relative inline-flex justify-center items-center w-40 h-12
      bg-primary text-black font-bold rounded overflow-hidden 
      group hover:text-primary transition`
    : `relative inline-flex justify-center items-center w-40 h-12
    bg-transparent border-2 border-primary text-primary font-bold rounded
    overflow-hidden group hover:bg-primary hover:text-black transition`;

  return href ? (
    <a href={href} download={download} className={buttonClasses}>
      <span className="absolute inset-0 bg-background transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      <span className="relative z-10">{children}</span>
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      <span className="absolute inset-0 bg-background transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};
