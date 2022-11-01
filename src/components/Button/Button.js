import './Button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
  return (
    <button className={`btn-toolsbar ${props.class}`} onClick={props.click}>
        <span><FontAwesomeIcon icon={props.icon} /></span>
        <p>{props.name}</p>
    </button>
  )
}

export default Button
