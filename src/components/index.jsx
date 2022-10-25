import * as React from 'react';
import { style } from './styles';
import { StyleRoot } from 'radium';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageCarousel from './carousel'
import Tabs from './tabs'
import Accordion from './accordion'

const MainComponent = () => {

    const [showMenu, setShowMenu] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = event => {
            //console.log('window.scrollY', window.scrollY)

            if (window.scrollY > 50) {
                setShowMenu(true)
            }

            if (window.scrollY < 50) {
                setShowMenu(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <StyleRoot>
        <div style={style.mainComponent}>
            {showMenu &&
                <div style={style.scrollHeader}>
                    <div style={style.logoContainer}>
                        <img src='./scroll_logo.png' />
                    </div>
                    <div style={style.linksContainer}>
                        <a style={style.scrollLink} href="#history">01. HISTORY</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a style={style.scrollLink} href="#team">02. TEAM</a>
                    </div>
                </div>
            }
            <div style={style.mainSection}>
                <div style={style.mainHeader}>
                    <div style={style.logoContainer}>
                        <img src='./logo.png' />
                    </div>
                    <div style={style.linksContainer}>
                        <a style={style.link} href="#history">01. HISTORY</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a style={style.link} href="#team">02. TEAM</a>
                    </div>
                </div>
            </div>

            <div id='history' style={style.historySection}>
                <div style={style.historyContentSection}>
                    <img src='./history.png' style={style.historyNumber} />
                    <p style={{ width: '60%', margin: '0px auto' }}>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    </p>
                </div>
                <div style={style.historyCarouselContainer}>
                    <div style={style.carouselStyle}>
                        <ImageCarousel />
                    </div>
                </div>
            </div>

            <div id='team' style={style.climbSection}>
                <div style={style.numberSection}>
                    <img src='./climb.png' style={style.climbNumber} />
                </div>
                <div style={style.climbContent}>
                    <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    </p>
                </div>
            </div>

            <div style={style.tabs}>
                <Tabs />
            </div>

            <div style={style.accordion}>
                <Accordion />
            </div>

            <div style={style.footer}>
                <div style={style.flogoContainer}>
                    <img src='./footer_logo.png' />
                </div>
                <div style={style.copyContainer}>
                    <p style={{color: '#63769d', fontWeight: 'bolder'}}>COPY RIGHT 2016. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    </StyleRoot>
}

export default MainComponent