import React, { useState } from 'react'

import logo from '../../Image/Logo.png'

import './style.css'

const headerItem = ["Главная", "Как пользоваться?", "Запись к врачу", "Контакты"]

export const Header: React.FC = () => {
    const [menu, setMenu] = useState<boolean>(false)

    return (
        <header className={menu ? '' : 'mobile'}>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        {headerItem.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="btn-box">
                        <button className='lang'><i className="ri-global-line"></i></button>
                        <button className='login'>Войти</button>
                        <button className='reg'>Регистрация</button>
                    </div>
                    {menu ?
                        <i onClick={() => setMenu(!menu)} className="ri-menu-unfold-line xmark"></i>
                        :
                        <i onClick={() => setMenu(!menu)} className="ri-menu-fold-line menu"></i>
                    }
                </div>
            </div>
        </header>
    )
}