import PostViewer from '../PostViewer'
import './ContentPostViewer.scss'

const ContentPostViewer = (props) => {
  return (
    <div className="contentContainer">
      <p className="paragraph">{props.tweetParam != null ? props.tweetParam.data.text : "Contenu du Tweet"}</p>
      <div className='img-container'>
        {props.tweetParam != null && props.tweetParam.includes != null && props.tweetParam.includes.media != null ? props.tweetParam.includes.media.map((object, i) => object.type === "photo" ? <div className={props.tweetParam.includes.media.length === 1 ? 'w-100' : 'w-50'}><img key={i} src={object.url} alt="" /></div> : "") : ""}
      </div>
      <div className='quote-container'>
        {props.tweetParam != null && props.tweetParam.quoteTweets != null ? props.tweetParam.quoteTweets.map((object, i) => <PostViewer key={i} tweetParam={object} />) : ""}
      </div>
    </div>
  )
}

export default ContentPostViewer
