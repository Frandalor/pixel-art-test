import './Pixel.css'

function Pixel({color,click}){
    return <div onClick={click} style={{backgroundColor: color}} className="Pixel"></div>
}

export default Pixel