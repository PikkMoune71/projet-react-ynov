
import ContentPostViewer from "./ContentPostViewer/ContentPostViewer";
import FooterPostViewer from "./FooterPostViewer/FooterPostViewer";
import HeaderPostViewer from "./HeaderPostViewer/HeaderPostViewer";

import './PostViewer.scss'

const PostViewer = (props) => {
  return (
    <div className="container" id="container">
      <HeaderPostViewer tweetParam={props.tweetParam} />
      <ContentPostViewer tweetParam={props.tweetParam} />
      <FooterPostViewer tweetParam={props.tweetParam} />
    </div>
  )
}

export default PostViewer
