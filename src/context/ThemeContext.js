import { createContext } from "react";

export const themes = {
  light: "",
  dark: "dark",
};

export const responses = {
  show: "",
  hidden: "hidden",
}

export const ThemeContext = createContext({
    theme: themes.dark,
    response: responses.hidden,
    changeTheme: () => {},
    changeResponse: () => {},
});

