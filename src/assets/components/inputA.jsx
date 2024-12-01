/* eslint-disable react/prop-types */
export default function InputA({placeholderName}){
   return (
    <>
        <input type="text"  placeholder={placeholderName} maxLength='10'/>
    </>
   ) 
}