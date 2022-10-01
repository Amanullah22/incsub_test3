import * as React from 'react';
import { style } from './styles';
import { StyleRoot } from 'radium';

const EventDetails = () => {
    return <StyleRoot>
        <div style={style.mainContainer}>
            <div style={style.mobImgContainer}>
                <img src='./eventImage.png' style={style.img} />
            </div>

            <div style={style.detailsContainer}>
                <p style={style.eventHeading}>Birthday Bash</p>
                <p style={style.hosted}>Hosted by <b>Amanullah</b></p>

                <div style={style.infoContainer}>
                    <div style={style.iconContainer}>
                        <img src='./calendar.png' />
                    </div>
                    <div style={style.contentContainer}>
                        <p style={style.startDate}>18 August 6:00pm</p>
                        <p style={style.toDate}>to <b>19 August 1:00pm</b> UTC + 10</p>
                    </div>
                    <div style={style.arrowContainer}>
                        <img src='./arrow.png' />
                    </div>
                </div>

                <div style={style.infoContainer}>
                    <div style={style.iconContainer}>
                        <img src='./location.png'  />
                    </div>
                    <div style={style.contentContainer}>
                        <p style={style.startDate}>Street name</p>
                        <p style={style.toDate}>Suburb, state, postcode</p>
                    </div>
                    <div style={style.arrowContainer}>
                        <img src='./arrow.png' />
                    </div>
                </div>
            </div>

            <div style={style.imgContainer}>
                <img src='./eventImage.png' style={style.img} />
            </div>
        </div>
    </StyleRoot>
}

export default EventDetails