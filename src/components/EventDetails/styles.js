export const style = {
    mainContainer: {
        width: '100%',
        display: 'flex',

        '@media (max-width: 1000px)': {
            display: 'block',
            width: '90%',
            margin: 'auto'
        },
    },

    img: {
        width: '500px',
        height: '500px',
        objectFit: 'contain',

        '@media (max-width: 1000px)': {
            width: '400px',
            height: '400px',
            objectFit: 'contain',
        },
    },

    imgContainer: {
        width: '50%',
        padding: '100px',
        textAlign: 'center',

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '0px',
            margin: '100px 0px',
            display: 'none'
        },
    },

    mobImgContainer: {
        width: '50%',
        padding: '100px',
        textAlign: 'center',
        display: 'none',

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '0px',
            margin: '100px 0px',
            display: 'block'
        },
    },

    detailsContainer: {
        width: '50%',
        padding: '100px',

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '0px',
        },
    },

    eventHeading: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '48px',
        color: '#240D57',

        '@media (max-width: 1000px)': {
           textAlign: 'center'
        },
    },

    hosted: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        color: '#828282',

        '@media (max-width: 1000px)': {
            textAlign: 'center'
         },
    },

    infoContainer: {
        width: '100%',
        display: 'flex'
    },

    iconContainer: {
        width: '20%',
        paddingTop: '15px'
    },

    contentContainer: {
        width: '70%',
    },

    arrowContainer: {
        width: '10%',
        paddingTop: '35px'
    },

    startDate: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '18px',
        color: '#240D57'
    },

    toDate: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        color: '#4F4F4F'
    }
}