export const style = {
    mainComponent: {
        width: '100%',
        background: '#DDDDDD',
        display: 'flex',

        '@media (max-width: 1000px)': {
            display: 'block',
        },
    },

    eventContainer: {
        width: '50%',
        padding: '0px 100px',
        textAlign: 'center',

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '0px',
        },
    },

    img: {
        width: '440px',
        height: '775.69px',
        objectFit: 'contain',

        '@media (max-width: 1000px)': {
            width: '440px',
            height: '775.69px',
        },
    },

    headlineContainer: {
        width: '50%',
        padding: '200px 50px',
        textAlign: 'center',

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '0px',
            paddingBottom: '250px',
        },
    },

    mobTextContainer: {
        // width: '573.91px',
        height: '192px',
        fontFamily: 'Helvetica',
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '64px',
        textAlign: 'center',
        color: '#240D57',
        position: 'relative',
        marginRight: '100px',
        display: 'none',

        '@media (max-width: 1000px)': {
            marginRight: '0px',
            padding: '100px 0px',
            display: 'block'
        },
    },

    textContainer: {
        // width: '573.91px',
        height: '192px',
        fontFamily: 'Helvetica',
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '64px',
        textAlign: 'right',
        color: '#240D57',
        position: 'relative',
        marginRight: '100px',

        '@media (max-width: 1000px)': {
            marginRight: '50px',
            display: 'none'
        },
    },

    snapchat: {
        background: "-webkit-linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },

    tagline: {
        fontfamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'right',

        '@media (max-width: 1000px)': {
            textAlign: 'center',
        },
    },

    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        gap: '10px',
        position: 'absolute',
        width: '320px',
        height: '55px',
        right: '0px',
        top: '300px',
        background: '-webkit-linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)',
        borderRadius: '10px',
        color: '#fff',
        border: 'none',
        outline: 'none',
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        cursor: 'pointer',

        '@media (max-width: 1000px)': {
           display: 'none'
        },
    },

    mobBtn: {
        padding: '16px',
        gap: '10px',
        width: '320px',
        height: '55px',
        background: '-webkit-linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)',
        borderRadius: '10px',
        color: '#fff',
        border: 'none',
        outline: 'none',
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        cursor: 'pointer',
        marginBottom: '200px',
        marginLeft: '10px'
    },

    mobBtnContainer: {
        display: 'none',

        '@media (max-width: 1000px)': {
            textAlign: 'center',
            width: '100%',
            display: 'block',
            marginTop: '-250px',
        },
    }
}