import { Link } from 'react-router-dom'
import './assets/styles/GetStarted.css'
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react'
import bloc from './assets/images/blockchain.png'

const GetStarted = () => {
    const [learn, setLearn] = useState(false)
    const [share, setShare] = useState(false)
    const [compete, setCompete] = useState(false)
    const [returnH, setReturnH] = useState(false)
    const [ecoding, setEcoding] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLearn(true)
        }, 1000)
        setTimeout(() => {
            setShare(true)
        }, 2000)
        setTimeout(() => {
            setCompete(true)
        }, 3000)
        setTimeout(() => {
            setReturnH(true)
        }, 4000)
        setTimeout(() => {
            setEcoding(true)
        }, 5000)
    }, [])
    const ReturnHome = ({ text }) => {
        return (
            <Button className='returnHome' style={{
                color: 'white',
                textTransform: 'none',
                fontFamily: 'Hind Madurai, sans-serif',
                backgroundColor: '#F53B2D',
                fontSize: '20px',
                padding: '20px',
                borderRadius: '50px',
                '&:hover': {
                    transform: 'scale(1.1)',
                }
            }}>
                {text}
            </Button>
        )
    }
    return (
        <>

            <div className="getStartedContainer">
                <div className="getStartedContent">
                    {learn &&
                        <div data-aos='slide-down' className="logo">
                            <p>
                                <i className="fa-solid fa-graduation-cap"></i>
                            </p>
                            <p>Learn</p>
                        </div>
                    }
                    {share &&
                        <div data-aos='slide-down' className="logo">
                            <p>
                                <i className="fa-solid fa-handshake"></i>
                            </p>
                            <p>Share</p>
                        </div>
                    }

                    {compete &&
                        <div data-aos='slide-down' className="logo">
                            <p>
                                <i className="fa-solid fa-laptop-code"></i>
                            </p>
                            <p>Compete</p>
                        </div>
                    }
                    {ecoding &&
                    <div data-aos='slide-down' style={{fontSize:'20px'}}>
                        <img src={bloc} alt="bloc" />
                    </div>
                    }
                </div>
                {returnH &&
                    <div data-aos = 'slide-right' className='returnContainer' style={{ textAlign: 'center' }}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <ReturnHome text='E-coding'></ReturnHome>
                        </Link>
                    </div>
                }
            </div>
        </>
    );
}
export default GetStarted;