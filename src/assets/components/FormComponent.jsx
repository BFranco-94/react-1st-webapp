import React from "react";
import InputA from "./inputA";
import InputB from "./InputB";
import LogginButton from "./LoginButton";

/**
 * This is a functional component that will return a form component
 * 
 * @param {*} placeholderA String for placeholder inputA
 * @param {*} placeholderB String for placeholder inputB
 * @returns a FormComponent with 2 inputs
 */

const FormComponent = ({placeholderA,placeholderB}) =>{
    return(
        <div>
            <form action="#" method="post">
                <InputA placeholderName={placeholderA}/>
                <InputB placeholderName={placeholderB}/>
                <LogginButton texto='login'/>
            </form>
        </div>
    );
};

export default FormComponent;