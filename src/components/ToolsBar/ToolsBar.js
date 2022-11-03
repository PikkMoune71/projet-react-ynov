import React, { useContext } from 'react'
import { ThemeContext, themes} from '../../context/ThemeContext';
import Button from '../Button/Button';
import './ToolBar.scss';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs'
import { faMoon, faSave, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'

const ToolsBar = () => {
    const { theme, changeTheme} = useContext(ThemeContext);
    const { showResponse, changeResponse} = useContext(ThemeContext);

    function savePng() {
        htmlToImage.toPng(document.getElementById('Resizable'))
            .then(function (dataUrl) {
                download(dataUrl, 'tweet.png');
        });
    }

    return (
        <div className='containerToolsbar'>
            <Button
                class="btn-toolsbar"
                name="Card"
                icon={theme ? faMoon : faMoonRegular}
                click={() => changeTheme(theme ? themes.light : themes.dark)}
            >
            </Button>
            <Button
                class="btn-toolsbar"
                name="Response"
                icon={showResponse ? faHeart : faHeartRegular}
                click={() => changeResponse(show => !show)}
            >
            </Button>
            <div className='content-save'>
                <Button class="btn-toolsbar save" click={savePng} name="Download" icon={faSave}></Button>
            </div>
        </div>
    )
}

export default ToolsBar
