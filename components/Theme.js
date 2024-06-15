"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Theme = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  if (!hydration) {
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Theme;
