import background from "../images/main.png";
import historyBackground from "../images/history_background.png";
import historyCarouselBackground from "../images/history_carousel_background.png";

export const style = {
    mainComponent: {
        width: '100%'
    },

    mainSection: {
        width: '100%',
        height: '820px',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
    },

    mainHeader: {
        width: '100%',
        display: 'flex',
    },

    scrollHeader: {
        width: '100%',
        display: 'flex',
        position: 'fixed',
        top: 0,
        background: '#fff',
        zIndex: 99
    },

    logoContainer: {
        width: '30%',
        textAlign: 'center',
        padding: 20
    },

    linksContainer: {
        width: '70%',
        textAlign: 'right',
        padding: 20,
        paddingRight: 50,
        paddingTop: 30
    },

    link: {
        textDecoration: 'underline',
        fontWeight: 'bolder',
        color: '#fff'
    },

    scrollLink: {
        textDecoration: 'underline',
        fontWeight: 'bolder',
        color: '#414f6b'
    },

    historySection: {
        width: '100%'
    },

    historyContentSection: {
        width: '100%',
        height: '710px',
        backgroundImage: `url(${historyBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
    },

    historyNumber: {
        margin: '50px 200px', marginBottom: 0,

        '@media (max-width: 1000px)': {
            margin: '50px',
            marginBottom: 0
        },
    },

    climbNumber: {
        margin: '10px 200px', marginBottom: 0,

        '@media (max-width: 1000px)': {
            margin: '30px',
            marginBottom: 0
        },
    },

    historyCarouselContainer: {
        width: '100%',
        height: '200px',
        backgroundImage: `url(${ historyCarouselBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        padding: '10px 0px',
        position: 'relative'
    },

    carouselStyle: {
        width: '15%',
        position: 'absolute',
        left: '40%',
        right: '40%',

        '@media (max-width: 1000px)': {
            width: '40%',
            left: '30%',
            right: '30%',
        },
    },

    climbSection: {
        width: '100%',
        display: 'flex',

        '@media (max-width: 1000px)': {
            display: 'inline',
        },
    },

    numberSection: {
        width: '40%',

        '@media (max-width: 1000px)': {
            width: '100%',
            textAlign: 'center'
        },
    },

    climbContent: {
        width: '60%',
        padding: '50px 10px',

        '@media (max-width: 1000px)': {
            width: '100%',
            textAlign: 'center',
            padding: '50px 0px'
        },
    },

    tabs: {
        display: 'block',

        '@media (max-width: 1000px)': {
           display: 'none'
        },
    },

    accordion: {
        display: 'none',
        
        '@media (max-width: 1000px)': {
           display: 'block'
        },
    },

    footer: {
        width: '100%',
        display: 'flex',
        background: '#414f6b',

        '@media (max-width: 1000px)': {
            display: 'inline',
            border: '1px solid black'
         },
    },

    flogoContainer: {
        width: '50%',
        textAlign: 'center',
        padding: 20,

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '20px 0px',
            background: '#414f6b',
         },
    },

    copyContainer: {
        width: '50%',
        textAlign: 'center',
        padding: 20,

        '@media (max-width: 1000px)': {
            width: '100%',
            padding: '20px 0px',
            background: '#414f6b',
         },
    }
}