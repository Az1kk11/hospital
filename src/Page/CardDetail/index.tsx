import React, { useEffect, useState } from 'react'

import './style.css'
import { useParams } from 'react-router-dom'
import { cardsType } from '../type'
import { cards } from '../../helpers'
import imgdetail from '../../Image/image.png'
import { Card, Date, Modal } from '../../Components'
import { motion } from 'framer-motion'

export const CardDetail: React.FC = () => {
    const { id }: any = useParams()
    const [detailCard, setDetailCard] = useState<cardsType>()
    const [date, setDate] = useState<string>('')
    const [count, setcount] = useState<number>(1)
    const [modal, setModal] = useState(false)

    if (count === 4) { setcount(1) }

    useEffect(() => {
        cards.map((item) => {
            if (item.id == id) {
                setDetailCard(item)
            }
        })
    }, [])

    const indexOfLastPost: number = count * 3;
    const indexOfFirstPost: number = indexOfLastPost - 3 * count;
    const currentPosts: any = cards.slice(indexOfFirstPost, indexOfLastPost)

    const modalState = { modal, setModal, detailCard, date }

    return (
        <div className="container">
            <div className="detail-card">
                <h3>
                    Главная <i className="ri-arrow-right-s-line"></i>
                    Запись к врачу <i className="ri-arrow-right-s-line"></i>
                    <span>{detailCard?.имя}</span>
                </h3>
                <div className="deatil-box">
                    <div className="detail-img">
                        <img src={imgdetail} alt="" />
                    </div>
                    <div className="detail-text">
                        <h4>{detailCard?.имя}</h4>
                        <p><span>Должность: <br /></span> {detailCard?.должность}</p>
                        <p><span>Мед. учреждение: <br /> </span> {detailCard?.мед_учреждение}</p>
                        <p><span>Адрес: <br /> </span> {detailCard?.адрес}</p>
                        <p><span>Специальность: <br /> </span> {detailCard?.специальность}</p>
                    </div>
                </div>
                <Date setDate={setDate} date={date} datee={'19 марта, вторник'} />
                <Date setDate={setDate} date={date} datee={'20 марта, среда'} />
                <Date setDate={setDate} date={date} datee={'21 марта, четверг'} />
                <motion.button
                    whileTap={{ scale: .9 }}
                    className='dateBtn'
                    disabled={date === ""}
                    onClick={() => setModal(!modal)}
                >
                    {date === "" ? 'Выберите время приема' : date}
                </motion.button>
                <h2>Другие врачи</h2>
                <div className="center-box">
                    <div className="cards">
                        {currentPosts.map((item: cardsType) => (
                            <Card {...item} />
                        ))}
                    </div>
                    {currentPosts.length >= 3 ?
                        <motion.button whileTap={{ scale: .9 }} onClick={() => setcount(count + 1)}>Показать еще</motion.button>
                        :
                        ''
                    }
                </div>
                {modal ?
                    <Modal {...modalState} />
                    :
                    ''
                }
            </div>
        </div>
    )
}