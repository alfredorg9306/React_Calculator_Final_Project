import "./mystyle.css"


function Operation_Button(props){

        const  resetInput = () =>{
            props.resetInputValue('');
        }

        const resetResult = ()=>{
            props.upvcurrentValue(0);
        }

        const adding = () =>{
            if(props.inputValue !== ""){
               let result = (parseFloat(props.currentValue) +  parseFloat(props.inputValue));
               props.upvcurrentValue(result);
               resetInput();
                
            }else{
                alert('Input value is empty');
            }
        }

        const resta = () =>{
            if(props.inputValue !== "" ){
               let result = (parseFloat(props.currentValue) -  parseFloat(props.inputValue));
               props.upvcurrentValue(result);
               resetInput();
                
            }else{
                alert('Input value is empty');
            }
        }


        const multi = () =>{
            if(props.inputValue !== ""){
               let result = (parseFloat(props.currentValue) *  parseFloat(props.inputValue));
               props.upvcurrentValue(result);
               resetInput();
                
            }else{
                alert('Input value is empty');
            }
        }

        const division = () =>{
            if(props.inputValue !== "" !== 0  && props.inputValue !== 0){
               let result = (parseFloat(props.currentValue) /  parseFloat(props.inputValue));
               props.upvcurrentValue(result);
               resetInput();
                
            }else{
                alert('Su numerador o Denominador es 0');
            }
        }

    
    return(
        <div className="margin">
            <button onClick={adding}>Add</button>
            <button onClick={resta}>Subtract</button>
            <button onClick={multi}>Multiply</button>
            <button onClick={division}>Divide</button>
            <button onClick={resetInput}>Reset Input</button>
            <button onClick={resetResult}>Reset Results</button>
        </div>
    );

    
}

export default Operation_Button;