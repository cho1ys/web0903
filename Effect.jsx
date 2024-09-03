import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [count, setCount] = useState(0)
  
    const [text, setText] = useState('')
    useEffect(()=>{
        console.log('렌더링 완료')
    },[])
    useEffect(()=>{
        console.log('count가 변경되었습니다.')
    },[count])
    useEffect(()=>{
        console.log('text가 변경되었습니다.')
    },[text])
    function changeCount(){
        console.log('before',count)
        setCount(count+1)
        console.log('after',count)
    }
    function changeText(e){
        setText(e.target.value)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={changeCount}>+1</button>
            <hr/>
            <input type='text' onChange={changeText}/>
            {text}
        </div>
    );
};

export default Effect;