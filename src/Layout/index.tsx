import React from 'react'
import { Footer, Header } from '../Components'
import Routers from '../Router'

import './style.css'
const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout