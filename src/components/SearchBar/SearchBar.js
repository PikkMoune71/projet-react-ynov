import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'


function extractId(val) {
    var splittedUrl = val.split("/")
    if (splittedUrl.length == 6) {
        return splittedUrl[5]
    }
    else {
        return ""
    }
}

const SearchBar = (props) => {
    const inputRef = useRef(null);

    return (
        <div className="global-container">
            <div className="search-container" id="search-container">
                <input ref={inputRef} placeholder="Saisir l'URL du tweet ici" />
                <a className="button-search" onClick={() => { console.log(extractId(inputRef.current.value)); props.click(extractId(inputRef.current.value)) }}><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></a>
            </div>
        </div>
    )
}

export default SearchBar
