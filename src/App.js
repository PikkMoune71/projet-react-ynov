import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import ContainerResize from "./components/ContainerResize/ContainerResize";
import { ThemeContext, themes } from "./context/ThemeContext";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import SearchBar from "./components/SearchBar/SearchBar";
import './index.scss'
import TwitterApiCallerService from './services/twitterApiCallerService'
import StubTwitterApiService from "./services/stubTwitterApiService";

var caller = new StubTwitterApiService('https://api.twitter.com/2/', 'AAAAAAAAAAAAAAAAAAAAAEw%2BiAEAAAAACxfjt%2FR6mSJCWlMBcmD7oVAXbZo%3DzfN5AFu0kXrXznlDBuZpeq3LSNM2mlZFPCUheSplBmBWl86zoL')


function App() {
  const [tweet, setTweet] = useState(null)
  const [tweetId, setTweetId] = useState("1234")

  const loadTweetEffect = useEffect(() => {
    async function load() {
      setTweet(await caller.getPost(tweetId))
      console.log(await caller.getPost(tweetId))
    }


    load()
  }, [tweetId])
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <SearchBar click={(el) => {
        setTweetId(el)
      }} />
      <ThemeContextWrapper>
        <ContainerResize tweetParam={tweet} />
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
