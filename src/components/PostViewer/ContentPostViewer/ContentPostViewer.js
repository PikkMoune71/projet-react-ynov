import './ContentPostViewer.scss'

const ContentPostViewer = (props) => {
  return (
    <div className="contentContainer">
      <p className="paragraph">{props.tweetParam != null ? props.tweetParam.data.text : "Contenu du Tweet"}</p>
    </div>
  )
}

export default ContentPostViewer
