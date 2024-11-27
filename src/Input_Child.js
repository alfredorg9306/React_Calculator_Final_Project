
import Operation_Button from "./Buttons";
import './mystyle.css';
import React, {useState} from "react";



function Data_Input (){
    const [inputValue,setInputValue] = useState(''); //USESTATE
    const handleChange = (event) =>{ // GUARDAR EL DATO DEL INPUT
        const newValue = event.target.value;
        if(/^\d*$/.test(newValue)){
        setInputValue(newValue); //ASIGNARLO CON LA FUNCION DE USESTATE HOOK
    }
    };

    const resetInputValue = () =>{ // ESTA FUNCION PERMITE LIMPIAR EL INPUT,  ESTA FUNCION ES ENVIADA A OPERATION BOTTONS        setInputValue('');
        setInputValue('');
    }

    const [currentValue, setCurrentValue] = useState(0); // INICIALIZA EN CERO EL VALOR DEL LABEL QUE PROVIENE DE UNA INCREMENTADOR
    const upvcurrentValue = (newValue) =>{
        setCurrentValue(newValue)
    }
    
    

    return(
        
        <div className="container-content">
            <label className="margin">{currentValue}</label>
            <input className="margin" type="text" value={inputValue} onChange={handleChange} />
            <Operation_Button 
            currentValue = {currentValue} 
            inputValue = {inputValue}
            resetInputValue = {resetInputValue}
            upvcurrentValue = {upvcurrentValue}
             />
        </div>
    );
}

export default Data_Input; 