import React from 'react';
import { useState, useEffect} from 'react';
import { useRef } from 'react';
const RenderingComponent = () => {
    const [count,setCount] = useState(0)
    const renderCount = useRef(0)
    useEffect(()=>{
        renderCount.current += 1
        console.log('랜더링 완료')
    })
    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>랜더링 횟수 : {renderCount.current}</h1>
            <button onClick={()=> setCount(count+1)}>클릭</button>
        </div>
    );
};

export default RenderingComponent;