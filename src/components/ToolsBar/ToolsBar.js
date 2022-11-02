import React, { useState } from 'react'
import { ThemeContext, themes, responses } from '../../context/ThemeContext';
import Button from '../Button/Button';
import './ToolBar.scss';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs'
import { faMoon, faSave, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'

const ToolsBar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [responseMode, setResponseMode] = useState(true);

    function savePng() {
        htmlToImage.toPng(document.getElementById('Resizable'))
            .then(function (dataUrl) {
                download(dataUrl, 'tweet.png');
        });
    }

    return (
        <div className='containerToolsbar'>
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <Button
                    class="btn-toolsbar"
                    name="Card"
                    icon={darkMode ? faMoonRegular : faMoon}
                    click={() => {
                        setDarkMode(!darkMode);
                        changeTheme(darkMode ? themes.dark : themes.light);
                    }}
                    >
                    </Button>
                )}
            </ThemeContext.Consumer>
            <ThemeContext.Consumer>
                {({ changeResponse }) => (
                    <Button
                    class="btn-toolsbar"
                    name="Response"
                    icon={responseMode ? faHeart : faHeartRegular}
                    click={() => {
                        setResponseMode(!responseMode);
                        changeResponse(responseMode ? responses.hidden : responses.show);
                    }}
                    >
                    </Button>
                )}
            </ThemeContext.Consumer>
            <div className='content-save'>
                <Button class="btn-toolsbar save" click={savePng} name="Download" icon={faSave}></Button>
            </div>
        </div>
    )
}

export default ToolsBar
