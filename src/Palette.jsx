import Pixel from "./Pixel"
import './Palette.css'

function Palette({colorPal, setColor}){
    return (
    <>
        <h1>Pick a color:</h1>
        <div className="Palette">
           {colorPal.map((c,i) => <Pixel key={i+356} color={colorPal[i]} click={()=> setColor(i)}/>)}
        </div>   
        </>
    )
}

export default Palette