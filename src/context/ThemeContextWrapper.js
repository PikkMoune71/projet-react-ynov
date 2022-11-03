import React, { useState} from 'react';
import { ThemeContext, themes} from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);
  const [showResponse, setShowResponse] = useState(true)
  
  function changeTheme(theme) {
    setTheme(theme);
  }

  function changeResponse(showResponse){
    setShowResponse(showResponse);
  }
  
  return (
    <ThemeContext.Provider value={{ theme, showResponse, changeTheme, changeResponse }}>
      {props.children}
    </ThemeContext.Provider>
  );
}