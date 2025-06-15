import { createContext } from "react";
import { useColorScheme } from "react-native";
import { lightColors, darkColors, ThemeColors } from "@/constants/Colors";

export const ThemeContext = createContext<ThemeColors>(lightColors);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
