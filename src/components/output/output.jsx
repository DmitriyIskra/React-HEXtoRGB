import React from 'react'
import './css/otput-style.css'

export default function Output(props) {

    const { item } = props;

    let rgb;
    let styles;

    if( item && item !== 'Ошибка!!!' ) {
        const hex = item.split('');
        hex.splice(0, 1);
        // const hexStr = hex.join('');
        const r = parseInt(hex.slice(0, 2).join(''), 16);
        const g = parseInt(hex.slice(2, 4).join(''), 16);
        const b = parseInt(hex.slice(4, 6).join(''), 16)

        const check = /^rgb\(\d{1}\d{0,1}\d{0,1},\s\d{1}\d{0,1}\d{0,1},\s\d{1}\d{0,1}\d{0,1}\)$/.test(`rgb(${r}, ${g}, ${b})`)
        console.log(`rgb(${r}, ${g}, ${b})`)
        if(check) {
            rgb = `rgb(${r}, ${g}, ${b})`;
            console.log(rgb)
        } else {
            rgb = 'Ошибка!!!';
            console.log(rgb)
        }
        
        
    
        styles = {
            backgroundColor: `rgb(${r}, ${g}, ${b}, 0.7)`,
            border: '2px solid #000000',
        }
    } else if( item && item === 'Ошибка!!!' ) {
        rgb = item;
    } else {
        rgb = '';
    }
    

    return (
        <div className='rgb-output' style={styles}>{ rgb }</div>
    )
}
