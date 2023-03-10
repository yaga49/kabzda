import React, {useState} from "react";
import s from "./OnOff.module.css"


type PropsType = {
    switchOnOff: boolean
    onChange: (switchOnOff: boolean)=> void
}


export function OnOff(props: PropsType ){



    const onStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.switchOnOff === true ? "green" : "white"
    }
    const offStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginLeft: "2px",
        backgroundColor: props.switchOnOff === false ? "red" : "white"
    }
    const indicatorStyle={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.switchOnOff === false ? "red" : "green"
    }

    return(
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>on</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
