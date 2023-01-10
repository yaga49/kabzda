import React from "react";

type RatingPropsType = {
    value: number
    onClick: (value: number)=>void
}

type StarPropsType = {
    selected: boolean
    value: number
    onClick: (value: number)=>void
}


export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 1} onClick={props.onClick} value ={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value ={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value ={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value ={5}/>
            <Star selected={props.value > 5} onClick={props.onClick} value ={6}/>
        </div>
    )

}

function Star(props: StarPropsType) {
    return  <span onClick={()=>{props.onClick(props.value)}}> {props.selected ? <b>star</b>: "star"} </span>
}