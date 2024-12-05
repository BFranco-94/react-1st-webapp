import React from "react";


/**
 * 
 * @param {*} text receives a String to show as a the button name
 * @param {*} click receive a state from a function to update the title as String
 * @returns a button performing a callback action
 */
const LogginButton = ({text, click})=> {
    const textTitle = "Title from callback changed";
     return(
        <button id="buttonLogin" onClick={ ()=>{ click(textTitle)} }> {text} </button>
    )
}

export default LogginButton;