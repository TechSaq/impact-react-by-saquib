import React from 'react'

function Button({title, bgcolor, color, onClick}) {
    return (
        <span 
            style={{
                background: bgcolor,
                color: color,
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                fontSize: '1.1rem',
                userSelect: 'none',
                boxShadow: '0 5px 10px -2px #888'
            }}
            onClick={onClick}
        >
            {title}
        </span>
    )
}

export default Button
