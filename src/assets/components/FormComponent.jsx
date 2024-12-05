import React from "react";
import InputA from "./inputA";
import InputB from "./InputB";
import LogginButton from "./LoginButton";

/**
 * This is a functional component that will return a form component
 * 
 * @param {*} placeholderA String for placeholder inputA
 * @param {*} placeholderB String for placeholder inputB
 * @param {*} click recieves a arrow function to display an alert message through Logging Button component
 * @param {*} callBack recieves a arrow function useCallback to display a callback action message through Logging Button component
 * @returns a FormComponent with 4 inputs
 */

const FormComponent = ({placeholderA,placeholderB, click, callBack}) =>{
    return(
        <div>
            <form action="#">
                {/* <InputA placeholderName={placeholderA}/> */}
                {/* <InputB placeholderName={placeholderB}/> */}
                <LogginButton text='Presiona 1ro aqui' click={click}/>
                <LogginButton text='Presiona ahora aqui' click={callBack}/>
            </form>
        </div>
    );
};

export default FormComponent;