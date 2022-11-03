import { useContext } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";
import ContentPostViewer from "./ContentPostViewer/ContentPostViewer";
import FooterPostViewer from "./FooterPostViewer/FooterPostViewer";
import HeaderPostViewer from "./HeaderPostViewer/HeaderPostViewer";

import './PostViewer.scss'

const PostViewer = (props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`container ${theme === themes.dark ? 'dark' : ''}`}>
      <HeaderPostViewer tweetParam={props.tweetParam} />
      <ContentPostViewer tweetParam={props.tweetParam} />
      <FooterPostViewer tweetParam={props.tweetParam} />
    </div>
  )
}

export default PostViewer
