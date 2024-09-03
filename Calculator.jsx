import React, { useMemo } from 'react';
import { useState } from 'react';
const Calculator = () => {
    const[hnum,sethNum] = useState(1)
    
    const hsum = useMemo(()=>{hardsum(hnum)},[hnum])
    function hardsum(num){
       return num + 10000
    }
    return (
        <div>
            <h1>계산기</h1>
            <input type='number' value={hnum}onChange={(e)=>{
                sethNum(parseInt(e.target.value))
            }}/>
            <span> + 10000 = {hsum}</span>
        </div>
    );
};
export default Calculator;