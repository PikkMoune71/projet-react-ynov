import { useEffect } from "react";
import StubTwitterApiService from "./services/stubTwitterApiService";
import Button from "./components/Button/Button";
import ContainerResize from "./components/ContainerResize/ContainerResize";
import {ThemeContext, themes} from "./context/ThemeContext";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import './index.scss'

var caller = new StubTwitterApiService('https://api.twitter.com/2/', 'AAAAAAAAAAAAAAAAAAAAAEw%2BiAEAAAAACxfjt%2FR6mSJCWlMBcmD7oVAXbZo%3DzfN5AFu0kXrXznlDBuZpeq3LSNM2mlZFPCUheSplBmBWl86zoL')


function App() {
const loadTweetEffect = useEffect(() => {
    async function load(){
      console.log(await caller.getPost('1579561721223839744'))
    }


    load()
  } ,[])
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
