import { cn } from "@/lib/utils";
import React from "react";
import {
  BackgroundMovementComponent,
  DirectionType,
} from "./BackgroundMovementComponent";

export const CustomButton = ({
  children,
  onClick,
  href,
  download,
  isDefaultColourPrimary = false,
  direction,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: string;
  isDefaultColourPrimary?: boolean;
  direction: DirectionType;
}) => {
  const customButtonClasses = isDefaultColourPrimary
    ? `bg-primary text-black  hover:text-primary`
    : `bg-transparent text-primary hover:bg-primary hover:text-black`;

  const commonButtonClasses =
    "relative inline-flex justify-center items-center w-40 h-12 font-bold rounded overflow-hidden group border-2 border-primary transition";

  return href ? (
    <a
      href={href}
      download={download}
      className={cn(customButtonClasses, commonButtonClasses)}
    >
      <BackgroundMovementComponent direction={direction} />
      <span className="relative z-10">{children}</span>
    </a>
  ) : (
    <button
      onClick={onClick}
      className={cn(customButtonClasses, commonButtonClasses)}
    >
      <BackgroundMovementComponent direction={direction} />
      <span className="relative z-10">{children}</span>
    </button>
  );
};
