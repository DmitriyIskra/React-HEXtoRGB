import React from 'react'
import './css/input-style.css'


export default function ConverterInput(props) {
    const { callback } = props;

    
    const handleInput = e => {
        const inputValue = e.target.value;

        const checkStr = /^#([a-z0-9]){6}$/i.test(inputValue);

        if( inputValue.length === 7 && checkStr) {
            callback(inputValue);
        } else if(inputValue.length === 7 && !checkStr) {
            callback('Ошибка!!!');
        } else {
            callback('');
        }
    }

    return (
        <div className='wrapper-input'>
            <label htmlFor="conv-input">Введите цвет</label>
            <input 
                className='converter-input' 
                id='conv-input' 
                type='text'
                maxLength={7} 
                onInput={handleInput} 
            />
        </div>
        
    )
}
