import React from 'react'
import Header from '../../components/Header/Header'
import Recommendations from '../../components/Recommendations'
import Plan from '../../components/Plan'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Recommendations/>
            <Plan/>
            <Footer/>
        </div>
    )
}

export default Home
