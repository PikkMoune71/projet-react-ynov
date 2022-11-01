import React, { useState } from 'react'
import { ThemeContext, themes } from '../../context/ThemeContext';
import Button from '../Button/Button';
import './ToolBar.scss';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs'
import { faMoon, faSave, faSun } from '@fortawesome/free-solid-svg-icons'

const ToolsBar = () => {
    const [darkMode, setDarkMode] = useState(true);

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
                icon={darkMode ? faMoon : faSun}
                click={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.dark : themes.light);
                }}
                >
                </Button>
            )}
            </ThemeContext.Consumer>
            <Button class="btn-toolsbar" click={savePng} name="Save" icon={faSave}></Button>
        </div>
    )
}

export default ToolsBar
