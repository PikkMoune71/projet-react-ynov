import icon from '../../../assets/img/logo192.png'
import './HeaderPostViewer.scss'

const HeaderPostViewer = () => {
  return (
    <div className="headerContainer">
        <div className="icon-profil">
            <img src={icon} alt="icon profil" />
        </div>
        <div className="info-profil">
            <p className="name">Antoine Picard</p>
            <p className="pseudo">@antoinepicard</p>
        </div>
    </div>
  )
}

export default HeaderPostViewer