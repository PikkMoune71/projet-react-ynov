import icon from '../../../assets/img/logo192.png'
import './HeaderPostViewer.scss'

const HeaderPostViewer = (props) => {
  return (
    <div className="headerContainer">
      <div className="icon-profil">
        <img src={props.tweetParam != null ? props.tweetParam.includes.users[0].profile_image_url : icon} alt="icon profil" />
      </div>
      <div className="info-profil">
        <p className="name">{props.tweetParam != null ? props.tweetParam.includes.users[0].name : "Nom"}</p>
        <p className="pseudo">@{props.tweetParam != null ? props.tweetParam.includes.users[0].username : "Pseudo"}</p>
      </div>
    </div>
  )
}

export default HeaderPostViewer