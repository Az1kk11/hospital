import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { cards, categoryArr } from '../../helpers'
import { Card } from '../../Components'
import { cardsType } from '../type'

import './style.css'

export const Home: React.FC = () => {
    const [category, setCategory] = useState<string>('Все')
    const [open, setOpen] = useState<boolean>(true)
    const [card, setCard] = useState<cardsType[]>([])
    const [count, setcount] = useState<number>(1)

    if (count === 4) { setcount(1) }

    useEffect(() => {
        setCard(cards)
    }, []);

    const filteredHandle = () => {
        if (category === 'Все') {
            return card
        }
        return card.filter((item: cardsType) => item.должность === category)
    }

    const filteredCard = useMemo(filteredHandle, [category, card])

    const indexOfLastPost: number = count * 3;
    const indexOfFirstPost: number = indexOfLastPost - 3 * count;
    const currentPosts: any = filteredCard.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="container">
            <div className="home-content">
                <h3>Главная <i className="ri-arrow-drop-right-line"></i> <span>Запись к врачу</span></h3>
                <div className="filter-box">
                    <h2>Врачи</h2>
                    <div className="filter" onClick={() => setOpen(!open)}>
                        <p>{category}</p>
                        {open ?
                            <i className="ri-arrow-down-s-line"></i>
                            :
                            <i className="ri-arrow-up-s-line"></i>
                        }
                        {open ?
                            ""
                            :
                            <ul onClick={() => setOpen(!open)}>
                                {categoryArr.map((item: string) => (
                                    <li className='category' onClick={() => setCategory(item)} key={item}>{item}</li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
                
                <div className="center-box">
                    <div className="cards">
                        {currentPosts.map((item: cardsType) => (
                            <Card {...item} />
                        ))}
                    </div>
                    {filteredCard.length > 3 ?
                        <motion.button whileTap={{ scale: .9 }} onClick={() => setcount(count + 1)}>Показать еще</motion.button>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    )
}