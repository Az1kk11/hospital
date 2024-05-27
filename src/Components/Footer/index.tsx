import React from 'react'

import logo from '../../Image/Logo (1).png'

import './style.css'

const footerNav = ["Главная", "Как пользоваться", "Политика конфиденциальности", "Условия использования", "Контакты", "Еще", "Войти Регистрация"]

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <ul>
                        {footerNav.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="bootom-box">
                        <img src={logo} alt="" />
                        <p>© 2010-2023 Все права защищены</p>
                    </div>
                </div>
            </div>
        </div>
    )
}