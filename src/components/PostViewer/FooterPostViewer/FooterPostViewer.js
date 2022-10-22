import './FooterPostViewer.scss'

const FooterPostViewer = () => {
  return (
    <div className="footerContainer">
        <div className="created-post">
            <p>5:53 PM - 13 Oct, 2022</p>
        </div>
        <div className="interactivities-tweet">
            <div className='item'>
                <span>4.1K</span>
                <p>replies</p>
            </div>
            <div className='item'>
                <span>284</span>
                <p>shares</p>
            </div>
            <div className='item'>
                <span>7.2K</span>
                <p>likes</p>
            </div>
        </div>
    </div>
  )
}

export default FooterPostViewer