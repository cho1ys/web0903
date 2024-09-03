import React, { useEffect, useRef, useState } from 'react';

const UseRefDom = () => {
    const inputref = useRef()
    const [text, setText] = useState('')
    
    function changeInput(){
        setText(inputref.current.value)
        console.log('랜더링 완료')
    }
    
    return (
        <div>
            <input type='text' ref = {inputref}></input>
            <button onClick={changeInput}>전송</button>
            <h1>전송된 단어 : {text}</h1>
        </div>
    );
};

export default UseRefDom;