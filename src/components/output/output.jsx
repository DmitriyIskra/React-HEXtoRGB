import React from 'react'
import './css/otput-style.css'

export default function Output(props) {

    const { item } = props;

    const hex = item.split('');
    hex.splice(0, 1);
    // const hexStr = hex.join('');
    const r = parseInt(hex.slice(0, 2).join(''), 16);
    const g = parseInt(hex.slice(2, 4).join(''), 16);
    const b = parseInt(hex.slice(4, 6).join(''), 16)
    
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const check = /^rgb\(\d{1,3},\s\d{1,3},\s\d{1,3}\)$/gi.test(rgb);
    return (
        <div className='rgb-output'>{ check ? rgb : '' }</div>
    )
}
