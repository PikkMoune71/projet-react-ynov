import { useRef, useState } from 'react';
import PostViewer from '../PostViewer/PostViewer';
import './ContainerResize.scss'
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import download from 'downloadjs'


function savePng() {
    htmlToImage.toPng(document.getElementById('Resizable'))
        .then(function (dataUrl) {
            download(dataUrl, 'tweet.png');
        });
}

const ContainerResize = (props) => {

    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const resizable = useRef(null);

    const initial = (e) => {
        setInitialPos(e.clientX);
        setInitialSize(resizable.current.offsetWidth);
        console.log(resizable.current.offsetWidth)
    }

    const resizeLeft = (e) => {
        resizable.current.style.width = `${parseInt(initialSize) - parseInt(e.clientX - initialPos)}px`;
    }

    const resizeRight = (e) => {
        resizable.current.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
    }

    return (
        <div className="containerResize">
            <button onClick={savePng}>Save</button>
            <div
                id="Draggable"
                draggable="true"
                onDragStart={initial}
                onDrag={resizeLeft}
            />
            <div id="Resizable" ref={resizable}>
                <PostViewer tweetParam={props.tweetParam} />
            </div>
            <div
                id="Draggable"
                draggable="true"
                onDragStart={initial}
                onDrag={resizeRight}
            />
        </div>
    );
}

export default ContainerResize;
