import { useState } from 'react';
import PostViewer from '../PostViewer/PostViewer';
import './ContainerResize.scss'


const ContainerResize = () => { 

    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
  
    const initial = (e) => {
        
        let resizable = document.getElementById('Resizable');
        
        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
    }
    
    const resize = (e) => {
        
        let resizable = document.getElementById('Resizable');
      
        resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
      
    }

    return(
        <div className="containerResize">
            <div id="Resizable"> 
                <PostViewer />
            </div>
            <div 
                id="Draggable"
                draggable = "true"
                onDragStart = {initial} 
                onDrag = {resize}
            />
        </div>
    ); 
}

export default ContainerResize;
