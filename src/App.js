import { useEffect, useState } from "react";
import ContainerResize from "./components/ContainerResize/ContainerResize";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import SearchBar from "./components/SearchBar/SearchBar";
import './index.scss'
import TwitterApiCallerService from './services/twitterApiCallerService'
import ToolsBar from "./components/ToolsBar/ToolsBar";
import Logo from "./components/Logo/Logo";
import StubTwitterApiService from './services/stubTwitterApiService'

var caller = new StubTwitterApiService('unused', 'unused')
if (process.env.REACT_APP_USE_MOCK == 'false') {
  caller = new TwitterApiCallerService(`${process.env.REACT_APP_BACK_BASE_URL}:${process.env.REACT_APP_BACK_PORT}/`, 'unused')
}



function App() {
  const [tweet, setTweet] = useState(null)
  const [tweetId, setTweetId] = useState("1234")

  const loadTweetEffect = useEffect(() => {
    async function load() {
      setTweet(await caller.getPost(tweetId))
    }

    load()
  }, [tweetId])
  return (
    <div>
      <Logo />
      <SearchBar click={(el) => {
        setTweetId(el)
      }} />
      <ThemeContextWrapper>
        <ContainerResize tweetParam={tweet} />
        <ToolsBar />
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
