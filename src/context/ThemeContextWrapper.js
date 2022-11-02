import React, { useState, useEffect } from 'react';
import { ThemeContext, themes, responses} from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);
  const [response, setResponse] = useState(responses.show)

  function changeTheme(theme) {
    setTheme(theme);
  }

  function changeResponse(response){
    setResponse(response);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.getElementById('container').classList.add('dark');
        break;
      case themes.light:
      default:
        document.getElementById('container').classList.remove('dark');
        break;
    }
  }, [theme]);

  useEffect(() => {
    switch (response) {
      case responses.hidden:
        document.getElementById('interactivities').style.display = "none";
        break;
      case responses.show:
      default:
        document.getElementById('interactivities').style.display = "flex";
        break;
    }
  }, [response]);

  return (
    <ThemeContext.Provider value={{ theme: theme, response: response, changeTheme: changeTheme, changeResponse: changeResponse }}>
      {props.children}
    </ThemeContext.Provider>
  );
}