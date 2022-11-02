import { useRef, useState } from 'react';
import PostViewer from '../PostViewer/PostViewer';
import './ContainerResize.scss'
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs'


function savePng() {
    htmlToImage.toPng(document.getElementById('Resizable'))
        .then(function (dataUrl) {
            download(dataUrl, 'tweet.png');
        });
}

const ContainerResize = (props) => {

    const [endSize, setEndSize] = useState(null);
    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const resizable = useRef(null);

    const initial = (e) => {
        setInitialPos(e.clientX);
        setInitialSize(resizable.current.offsetWidth);
    }

    const fixResize = (e) => {
        resizable.current.style.width = `${endSize}px`;
    }

    const resizeLeft = (e) => {
        console.log(e.clientX)
        if (e.clientX > 1570) {
            resizable.current.style.width = '550px'
        }
        else {
            resizable.current.style.width = `${parseInt(initialSize) + parseInt(initialPos - e.clientX)}px`;
            setEndSize(parseInt(initialSize) + parseInt(initialPos - e.clientX))
        }
    }

    const resizeRight = (e) => {
        console.log(e.clientX)
        resizable.current.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
        setEndSize(parseInt(initialSize) + parseInt(e.clientX - initialPos))
    }

    return (
        <div className="containerResize">
            <button onClick={savePng}>Save</button>
            <div
                id="Draggable"
                draggable="true"
                onDragStart={initial}
                onDrag={resizeLeft}
                onDragEnd={fixResize}
            />
            <div id="Resizable" ref={resizable}>
                <PostViewer tweetParam={props.tweetParam} />
            </div>
            <div
                id="Draggable"
                draggable="true"
                onDragStart={initial}
                onDrag={resizeRight}
                onDragEnd={fixResize}
            />
        </div>
    );
}

export default ContainerResize;
