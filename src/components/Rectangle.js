import React, {useEffect, useState} from "react";

const squareSize = 70;
const margin = 15;
export default function Rect(props) {
     const [size] = useState({
         width : props.width,
         height : props.height
     })
     const [canBeFocusedWithMouse] = useState(props.hasOwnProperty('canBeFocusedWithMouse') ? props.canBeFocusedWithMouse : false)
     const [isHighlighted, setHighlited] = useState(props.hasOwnProperty('isHighlighted') ? props.isHighlighted : false)
     const [isOutlined] = useState(props.hasOwnProperty('isOutlined') ? props.isOutlined : false)
     const [id] = useState(props.hasOwnProperty('isOutlined') ? props.id : NaN)
     useEffect(()=>{},[isHighlighted, isOutlined])

    if (props.hasOwnProperty('isHighlighted')) {
        if (props.isHighlighted !== isHighlighted) {
            setHighlited(!isHighlighted)
        }
    }
    const clickHandler = () => {
        if (id !== 0 && isHighlighted) {
            console.log(`${id} is clicked!`)
        }
    }

    const mouseOverHandler = () => {
        if (canBeFocusedWithMouse) {
            setHighlited(true);
        }
    }

    const mouseOutHandler = () => {
        if (canBeFocusedWithMouse && isHighlighted) {
            setHighlited(false);
        }
    }

    return (
        <div id="rect" tabindex={id} onClick={clickHandler} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}
                      style={{ width: `${squareSize * size.width + 2 * margin * (size.width - 1)}px`,
                      height: `${squareSize * size.height + 2 * margin * (size.height - 1)}px`,
                      margin: `${margin}px`,
                      'box-sizing': 'border-box',
                      border:`red ${isOutlined? 2 : 0}px solid`,
                      background:`${isHighlighted ? 'green' : 'white'}`
        }}/>
    )
}