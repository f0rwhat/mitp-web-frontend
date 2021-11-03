import React, {useEffect, useState} from "react";
import Rect from "../components/Rectangle";

export default function Part1() {

    return (
        <div >
            <div>
                <div style={{display : 'flex'}}>
                    <Rect id = {1} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                    <Rect id = {2} width={3} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                    <Rect id = {3} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                </div>
                <div style={{display : 'flex'}}>
                    <div>
                        <Rect id = {4} width={1} height = {2} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                    </div>
                    <div style={{display : 'flex', flexDirection: 'column'}}>
                        <div style={{display : 'flex'}}>
                            <Rect id = {5} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                            <Rect width={1} height = {1}/>
                            <Rect id = {6} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                            <Rect id = {7} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                        </div>
                        <div style={{display : 'flex'}}>
                            <Rect id = {8} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                            <Rect id = {9} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                            <Rect id = {10} width={2} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                        </div>
                    </div>
                </div>
                <div style={{display : 'flex'}}>
                    <Rect id = {11} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                    <Rect id = {12} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                    <Rect width={2} height = {1}/>
                    <Rect id = {13} width={1} height = {1} isOutlined = {true} canBeFocusedWithMouse = {true}/>
                </div>
            </div>
        </div>
    )
}