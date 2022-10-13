import './Button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
  return (
    <button className={props.class} onClick={props.click}>
        <span><FontAwesomeIcon icon={faMoon} /></span>
        <p>{props.name}</p>
    </button>
  )
}

export default Button
