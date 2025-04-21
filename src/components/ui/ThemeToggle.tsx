//src/components/ui/ThemeToggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = ({
  accessibilityText,
}: {
  accessibilityText: string;
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until mounted
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="hover:cursor-pointer bg-transparent w-fit p-0 text-xl"
    >
      {isDark ? (
        <Sun className="hover:text-primary bg-transparent text-accent" />
      ) : (
        <Moon className="hover:text-sky-400 bg-transparent text-blue-600" />
      )}
      <span className="sr-only">{accessibilityText}</span>
    </button>
  );
};
