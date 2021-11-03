import React, {useEffect, useState} from "react";
import Rect from "../components/Rectangle";

export default function Part2() {
    const [routes] = useState({
        1 : {"ArrowRight" : 2, "ArrowDown" : 4},
        2 : {"ArrowRight" :3, "ArrowDown" :5},
        3 : {"ArrowDown" : 7},
        4 : {"ArrowUp" : 1, "ArrowDown" : 11},
        5 : {"ArrowUp" : 2, "ArrowRight" : 6, "ArrowDown" : 8},
        6 : {"ArrowDown" : 10},
        7 : {"ArrowLeft" : 6},
        8 : {"ArrowDown" : 12},
        9 : {"ArrowUp" : 5, "ArrowDown" : 13},
        10 : {"ArrowUp" : 6, "ArrowDown" : 13},
        11 : {"ArrowUp" : 4},
        12 : {"ArrowLeft" : 11},
        13 : {"ArrowLeft" : 9},
    })
    const [focusedObjectId, setFocusedId] = useState(1)

    const isHighlited = (id) => {
        return focusedObjectId === id
    }

    const handleKeyPress = (e) => {
        if (routes[focusedObjectId].hasOwnProperty(e.key)){
            setFocusedId(routes[focusedObjectId][e.key])
        }
    }
    useEffect(()=>{
    },[focusedObjectId]);

    return (
        <div id="mydiv" tabindex="0" onKeyDown={handleKeyPress}>
            <div>
                <div style={{display : 'flex'}}>
                    <Rect id = {1} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(1)}/>
                    <Rect id = {2} width={3} height = {1} isOutlined = {true} isHighlighted = {isHighlited(2)}/>
                    <Rect id = {3} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(3)}/>
                </div>
                <div style={{display : 'flex'}}>
                    <div>
                        <Rect id = {4} width={1} height = {2} isOutlined = {true} isHighlighted = {isHighlited(4)}/>
                    </div>
                    <div style={{display : 'flex', flexDirection: 'column'}}>
                        <div style={{display : 'flex'}}>
                            <Rect id = {5} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(5)}/>
                            <Rect width={1} height = {1}/>
                            <Rect id = {6} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(6)}/>
                            <Rect id = {7} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(7)}/>
                        </div>
                        <div style={{display : 'flex'}}>
                            <Rect id = {8} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(8)}/>
                            <Rect id = {9} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(9)}/>
                            <Rect id = {10} width={2} height = {1} isOutlined = {true} isHighlighted = {isHighlited(10)}/>
                        </div>
                    </div>
                </div>
                <div style={{display : 'flex'}}>
                    <Rect id = {11} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(11)}/>
                    <Rect id = {12} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(12)}/>
                    <Rect width={2} height = {1}/>
                    <Rect id = {13} width={1} height = {1} isOutlined = {true} isHighlighted = {isHighlited(13)}/>
                </div>
            </div>
        </div>
    )
}