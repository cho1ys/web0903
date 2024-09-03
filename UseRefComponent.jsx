import React, { useState } from 'react';
import { useRef } from 'react';
const UseRefComponent = () => {
    let VarT = 0;
    const [value, setValue] = useState(0)
    const ref = useRef(0)
    function changeValue(){
        setValue(p => p+1)
    }
    function changeVar(){
        VarT += 1
        console.log(VarT)
    }
    function changeRef(){
        ref.current +=1
        console.log('현재 ref값: ', ref.current)
    }
    return (
        <div>
            <h1>Ref 값 : {ref.current}</h1>         
            <h1>Var 값 : {VarT}</h1>         
            <button onClick={changeRef}>Ref</button>    
            <button onClick={changeVar}>Var</button>    
            <button onClick={changeValue}>Rendering</button>     
        </div>
    );
};

export default UseRefComponent;