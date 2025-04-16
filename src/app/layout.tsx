//src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import { LanguageWrapper } from "@/context/LanguageProvider";
import Header from "@/components/ui/Header";
import { themeScript } from "@/lib/theme-script";
import Script from "next/script";
// import { MobileMenu } from "@/components/menu/MobileMenu";
// import { Menu } from "@/components/menu/Menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jorge Filho | Portfolio",
  description: "Jorge Filho Portfolio",
};

const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="antialiased font-sans flex flex-col min-h-screen h-screen">
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light" // Set a consistent default theme
//           enableSystem={false} // Disable system preference during SSR
//           disableTransitionOnChange
//         >
//           <LanguageWrapper>
//             <Header />
//             <main className="flex h-full w-full flex-row items-stretch">
//               {children}
//             </main>
//           </LanguageWrapper>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body
        className={cn(
          "antialiased font-sans flex flex-col min-h-screen h-screen opacity-0",
          geistSans.variable,
          geistMono.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          <LanguageWrapper>
            <Header />
            <main className="flex h-full w-full flex-row items-stretch">
              {children}
            </main>
          </LanguageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
