import React from "react"
import ReactDom from "react-dom"
import "./style.css"
import Button from "./Button.js"

const Apple=()=>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Hello world</h1>
            <h2>Hello youtubers</h2>
            <Button buttonText="Apple"/>
            <Button buttonText="Orange"/>
            <Button buttonText="Grapes"/>

        </div>
    )
}
ReactDom.render(<Apple/>,document.getElementById("root"))
export default Apple


