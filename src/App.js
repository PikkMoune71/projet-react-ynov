import { useState } from "react";
import Button from "./components/Button/Button";
import ContainerResize from "./components/ContainerResize/ContainerResize";
import {ThemeContext, themes} from "./context/ThemeContext";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import './index.scss'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <ThemeContextWrapper>
        <ContainerResize />
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                class="btn-navbar-card" 
                name="card"
                click={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.dark : themes.light);
                }}
              >
              </Button>
            )}
          </ThemeContext.Consumer>
        </ThemeContextWrapper>
    </div>
  );
}

export default App;
