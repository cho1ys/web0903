import React, { useRef, useState } from 'react';

const InputTest = () => {
    const [name,setName] = useState('yunsung')
    const [age,setAge] = useState(26)
    const nameref = useRef()
    const ageref = useRef()

    return (
        <div>
            <h1>input태그 테스트</h1>
           이름 : <input type='text' ref = {nameref} value = {name}
            onChange={(e)=>setName(e.target.ref)}/>
           나이 : <input type='number' ref = {ageref} value={age}
            onChange={(e)=>setAge(e.target.ref)}/>
        </div>
    );
};

export default InputTest;