"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const ThemeProviderWrapper = ({ children }: PropsWithChildren) => {
  const themeOptions = {
    defaultTheme: "light",
    disableTransitionOnChange: false,
    themes: ["light", "dark"],
  };
  return <ThemeProvider attribute="class" {...themeOptions}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
