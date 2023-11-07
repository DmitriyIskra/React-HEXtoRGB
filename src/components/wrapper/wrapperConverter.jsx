import React from 'react';
import './css/wr-converter-style.css';
import { useState } from 'react';
import ConverterInput from '../input/converterInput';
import Output from '../output/output';

export default function Converter() {
    const [ form, setForm ] = useState('');
    // можно написать функцию меняющую цвет в элементе
    const changeState = color => {
        setForm(color);
    }

    const changeColor = (e) => {
        const mainWrapper = document.querySelector('.main-wrapper');

        mainWrapper.style.backgroundColor = form;
    }

    return (
        <div className='main-wrapper' style={{backgroundColor:form}}>
            <div className="converter-container">
                <ConverterInput
                callback = {changeState} />
                <Output 
                item = {form}/>
            </div>
        </div>
    )
}
