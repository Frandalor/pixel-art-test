import Pixel from "./Pixel";
import './Pixel16.css'
import { useState } from "react";
import Palette from "./Palette";
import { BigBrush } from "./utils";

function Pixel16(){
    const [newColor, setNewColor] = useState(Array(16*16).fill('#fffdfdff'));
    const [selColor, setSelColor] = useState('#000000ff');
    const [bigBrushOn, setBigBrushOn] = useState(false);
    const pal = ['black', 'white', 'red', 'green', 'blue', 'yellow', 'orange', 'pink'];

    
    function setColor(index){
        setSelColor(pal[index])
    }

function changeColor(i) {
    if (!bigBrushOn) {
        setNewColor(oldColor => {
            return oldColor.map((c, j) => {
                return i === j ? selColor : c;
            });
        });
    } else {
        const indicesToColor = BigBrush(i);
        setNewColor(oldColor => {
            return oldColor.map((c, j) => {
                return indicesToColor.includes(j) ? selColor : c;
            });
        });
    }
}


    function clearAll(){
        setNewColor(Array(16*16).fill('#fffdfdff'))
    }

    

    function toggleBigBrush(){
        setBigBrushOn(!bigBrushOn);
    }

    function colorFill(){
        setNewColor(Array(16*16).fill(selColor))
        }

    return (
        <>
        <Palette colorPal={pal} setColor={setColor}/>
        <div className="Pixel16">
            {Array(16*16).fill(0).map((_, i) => 
            <Pixel 
            key={i}
            color={newColor[i]} 
            click={()=>changeColor(i)}
            />)}
        </div>
        <div className="functionBar">
            <div title="Clear" onClick={clearAll}>&#128465;</div>
            <div title="Frame" >※</div>
            <div title="Fill" onClick={colorFill}>✨</div>
            <div title="Brush" onClick={toggleBigBrush}>{bigBrushOn ? '⬆️' : '⬇️' }</div>
        </div>
        </>

        )
}

export default Pixel16