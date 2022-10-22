
import ContentPostViewer from "./ContentPostViewer/ContentPostViewer";
import FooterPostViewer from "./FooterPostViewer/FooterPostViewer";
import HeaderPostViewer from "./HeaderPostViewer/HeaderPostViewer";

import './PostViewer.scss'

const PostViewer = () => {
  return (
    <div className="container" id="container">
      <HeaderPostViewer />
      <ContentPostViewer />
      <FooterPostViewer />
    </div>
  )
}

export default PostViewer
