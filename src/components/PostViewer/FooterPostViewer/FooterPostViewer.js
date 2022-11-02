import './FooterPostViewer.scss'
import Moment from 'moment'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function computeMetrics(val) {
    return Math.abs(val) > 999 ? Math.sign(val) * ((Math.abs(val) / 1000).toFixed(1)) + 'K' : Math.sign(val) * Math.abs(val)
}

const FooterPostViewer = (props) => {
    const { showResponse } = useContext(ThemeContext)
    return (
        <div className="footerContainer">
            <div className="created-post">
                <p>{props.tweetParam != null ? Moment(props.tweetParam.data.created_at).format('MM:HH - DD MMM, YYYY') : Moment().format('MM:HH - DD MMM, YYYY')}</p>
            </div>
            <div className={`interactivities-tweet ${showResponse ? 'visible' : 'hidden'}`}>
                <div className='item'>
                    <span>{props.tweetParam != null ? computeMetrics(props.tweetParam.data.public_metrics.reply_count) : "0"}</span>
                    <p>replies</p>
                </div>
                <div className='item'>
                    <span>{props.tweetParam != null ? computeMetrics(props.tweetParam.data.public_metrics.retweet_count) : "0"}</span>
                    <p>shares</p>
                </div>
                <div className='item'>
                    <span>{props.tweetParam != null ? computeMetrics(props.tweetParam.data.public_metrics.like_count) : "0"}</span>
                    <p>likes</p>
                </div>
            </div>
        </div>
    )
}

export default FooterPostViewer