import React, { useState } from 'react'

import img from '../../Image/Frame.png'
import imgCl from '../../Image/Frame 511.png'

import './style.css'
export const Modal: React.FC<any> = ({ modal, setModal, detailCard, date }) => {
    const [close, setClose] = useState(false)

    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [numberPas, setNumberPas] = useState('')
    const [textarea, setTextarea] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [check, setCheck] = useState<boolean>()


    const submitHandler = (e: React.FormEventHandler<HTMLFormElement> | any) => {
        const data = { name, lastName, phone, numberPas, textarea, captcha, check, date }
        e.preventDefault()
        setClose(!close)
        console.log(data);
    }

    return (
        <div className="modalBg">
            {close ?
                <div className="close">
                    <h3>Запись к врачу</h3>
                    <div className="cl_box">
                        <img src={imgCl} alt="" />
                        <p>Врач: <span>{detailCard?.имя}</span></p>
                        <p>Дата: <span>{date}</span></p>
                        <button onClick={() => setModal(!modal)}>Закрыть</button>
                    </div>
                </div>
                :
                <div className="modal">
                    <i className="ri-close-line" onClick={() => setModal(!modal)} ></i>
                    <h3>Запись к врачу</h3>
                    <p>Врач: <span>{detailCard?.имя}</span></p>
                    <p>Дата: <span>{date}</span></p>
                    <form onSubmit={submitHandler}>
                        <label>Ваше фамилия</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        <label>Ваше имя</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        <div className='pass'>
                            <span>
                                <label>Номер телефона</label>
                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </span>
                            <span>
                                <label>Серия и номер паспорта</label>
                                <input type='text' value={numberPas} onChange={(e) => setNumberPas(e.target.value)} required />
                            </span>
                        </div>
                        <label>Что вас беспокоит?</label>
                        <textarea name="" id="" cols={4} rows={6} value={textarea} onChange={(e) => setTextarea(e.target.value)} ></textarea>
                        <img src={img} alt="" />
                        <label>Код проверки</label>
                        <input type="number" value={captcha} onChange={(e) => setCaptcha(e.target.value)} required />
                        <div className="check">
                            <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} required />
                            <p>Я согласен(а) с правилами пользования</p>
                        </div>
                        <button type='submit'>Записаться</button>
                    </form>
                </div>
            }
        </div>
    )
}