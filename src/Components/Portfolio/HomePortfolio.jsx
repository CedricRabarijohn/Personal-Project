import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import './assets/styles/HomePortfolio.css'
import { styled } from '@mui/material/styles';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import bloc from './assets/images/blockchain.png'
import bloc2 from './assets/images/blockchain2.png'
import computer from './assets/images/computer.png'
import work from './assets/images/work.png'
import light from './assets/images/light.png'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react';

const HomePortfolio = () => {
    const [language, setLanguage] = useState('eng')
    const changeLanguage = (event) => {
        try {
            setLanguage(event.target.value)
        } catch (error) {
        }
    }
    const text = {
        fr: {
            community: 'Communauté',
            getStarted: 'Commencez maintenant',
            chooseALanguage: 'Choisissez une langue',
            headerQuestion: 'Qu\'est-ce que e-coding?',
            headerAnswer: 'Une plateforme en ligne pour apprendre à coder.',
            headerQuestion2: 'Est-il nécessaire de savoir programmer avant de pouvoir commencer?',
            headerAnswer2: 'Bien sûr que non ! Tu peux commencer dès maintenant !',
            learn: 'Apprenez',
            share: 'Partagez',
            compete: 'Rivalisez',
        },
        eng: {
            community: 'Community',
            getStarted: 'Get started now',
            chooseALanguage: 'Choose a language',
            headerQuestion: 'What is e-coding?',
            headerAnswer: 'An online plateform where you will learn to code.',
            headerQuestion2: 'Does it require programming skills to get started?',
            headerAnswer2: 'Of course not ! You can start right away !',
            learn: 'Learn',
            share: 'Share',
            compete: 'Compete',
        }
    }
    const frText = text.fr
    const engText = text.eng
    const [currentText, setCurrentText] = useState(null)
    useEffect(() => {
        if (language === 'eng') setCurrentText(engText)
        else if (language === 'fr') setCurrentText(frText)
    }, [language])
    const SimpleButton = ({ text }) => {
        return (
            <Button style={{
                fontSize: '16px',
                color: 'white',
                textTransform: 'none',
                fontFamily: 'Hind Madurai, sans-serif',
                margin: '0 10px 0 10px',
                fontWeight: 'bolder',
                '&:hover': {
                    transform: 'scale(1.2)',
                }
            }}>
                {text}
            </Button>
        )
    }
    const GetStartedButton = ({ text }) => {
        return (
            <Button className='startButton' style={{
                color: 'white',
                textTransform: 'none',
                fontFamily: 'Hind Madurai, sans-serif',
                backgroundColor: '#F53B2D',
                fontSize: '12px',
                padding: '13px',
                borderRadius: '10px',
                '&:hover': {
                    transform: 'scale(1.1)',
                }
            }}>
                {text}
            </Button>
        )
    }
    return (
        <div className="container">
            <div className="header">
                <div className="navbar">
                    <div className="navLeft">
                        <Link to='/' style={{textDecoration:'none',color:'white'}}>
                            {SimpleButton &&
                                <SimpleButton text='e-coding' className='logo'></SimpleButton>
                            }
                        </Link>
                        <div>|</div>
                        <SimpleButton text='Documentation' sx={{ height: '100%' }}>Documentation</SimpleButton>
                    </div>
                    <div className="navRight">

                        {currentText &&
                            <Link to='/getStarted' style={{ textDecoration: 'none', color: 'white' }}>
                                <GetStartedButton text={currentText.getStarted} sx={{ height: '100%' }}>
                                </GetStartedButton>
                            </Link>
                        }

                    </div>
                </div>
                <div className="mainHeader">
                    <div className='leftMain' data-aos='slide-right'>
                        <div className="question">
                            <i className="fa-solid fa-share-nodes"></i>
                            <b>{currentText && currentText.headerQuestion}</b>
                        </div>
                        <div className="answer">
                            {currentText && currentText.headerAnswer}
                        </div>
                        <div className="learn">
                            <i className="fa-solid fa-graduation-cap"></i>
                            {currentText && currentText.learn}
                        </div>
                        <div className="share">
                            <i className="fa-solid fa-handshake"></i>
                            {currentText && currentText.share}
                        </div>
                        <div className="compete">
                            <i className="fa-solid fa-laptop-code"></i>
                            {currentText && currentText.compete}
                        </div>

                    </div>
                    <div className='rightMain' data-aos='slide-down'>
                        <img src={work} alt="bots" />
                    </div>
                </div>
                <div className="footerHeader">
                    <div className="getStarted">
                        {currentText &&
                            <Link to='/getStarted' style={{ textDecoration: 'none', color: 'white' }}>
                                <GetStartedButton className='startButton' text={currentText.getStarted}>
                                    {currentText && currentText.getStarted + ' '}<i className="fa-solid fa-arrow-right-to-bracket"></i>
                                </GetStartedButton>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <div className="content">
            </div>
        </div >
    );
}
export default HomePortfolio;