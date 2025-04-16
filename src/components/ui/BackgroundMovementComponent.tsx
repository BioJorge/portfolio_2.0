import { cn } from "@/lib/utils";

export type DirectionType = "left-to-right" | "right-to-left";

export const BackgroundMovementComponent = ({
  direction,
  isRound = false,
}: {
  direction: DirectionType;
  isRound?: boolean;
}) => {
  const directionClasses =
    direction === "left-to-right"
      ? "origin-left scale-x-0 group-hover:scale-x-100"
      : "origin-right scale-x-100 group-hover:scale-x-0";
  return (
    <span
      className={cn(
        "absolute inset-0 bg-background transform scale-x-0 group-hover:scale-x-100 transition-transform",
        directionClasses,
        isRound ? "rounded-full" : ""
      )}
    ></span>
  );
};
