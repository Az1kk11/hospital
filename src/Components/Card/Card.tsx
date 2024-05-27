import React from 'react'
import { cardsType } from '../../Page/type'
import cardImg from '../../Image/image.png'

import './card.css'

export const Card: React.FC<cardsType> = ({ id, имя, должность, мед_учреждение, адрес, специальность }) => {

    return (
        <div className="card">
            <div className="img-box">
                <img src={cardImg} alt="" />
            </div>
            <div className="text-card">
                <h3>{имя}</h3>
                <p><span>Должность:</span> {должность}</p>
                <p><span>Мед. учреждение:</span> {мед_учреждение}</p>
                <p><span>Адрес:</span> {адрес}</p>
                <p><span>Специальность:</span> {специальность}</p>
                <a href={`/doctor/${id}`}>Записаться на прием <i className="ri-arrow-right-line"></i></a>
            </div>
        </div>
    )
}