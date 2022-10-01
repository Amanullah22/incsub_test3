import * as React from 'react';
import { style } from './styles';
import { StyleRoot } from 'radium';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const MainComponent = () => {

    return <StyleRoot>
        <div style={style.mainComponent}>
            <div style={style.mobTextContainer}>
                Imagine If<br />
                <font style={style.snapchat}>Snapchat</font><br />
                Had Events.<br />

                <p style={style.tagline}>Easily host and share events with your friends across any social media.</p>
                <button style={style.btn}>🎉 Create my event</button>
            </div>

            <div style={style.eventContainer}>
                <img src='./cardImage.png' style={style.img} />
            </div>
            <div style={style.headlineContainer}>
                <div style={style.textContainer}>
                    Imagine If<br />
                    <font style={style.snapchat}>Snapchat</font><br />
                    Had Events.<br />

                    <p style={style.tagline}>Easily host and share events with your friends across any social media.</p>
                    <button style={style.btn}>🎉 Create my event</button>
                </div>
            </div>

            <div style={style.mobBtnContainer}>
                <button style={style.mobBtn}>🎉 Create my event</button>
            </div>
        </div>
    </StyleRoot>
}

export default MainComponent