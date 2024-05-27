import React, { useState } from 'react'
import { clock } from '../../helpers'

import './style.css'

export const Date: React.FC<any> = ({ setDate, datee, date }) => {

    return (
        <div className="date">
            <h3>{datee}</h3>
            <div className="date-box">
                {clock.map((item: string) => (
                    <button
                        key={item}
                        className={`${datee}, ${item}` === date ? 'active' : ''}
                        onClick={() => setDate(`${datee}, ${item}`)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}