export const style = {
    mainComponent: {
        width: '100%',
        borderRadius: '10px'
    },

    parallelMain: {
        width: '100%',
        display: 'flex',

        '@media (max-width: 1000px)': {
            display: 'block',
        },
    },

    parallelChild: {
        width: '50%',

        '@media (max-width: 1000px)': {
            width: '100%',
        },
    },

    inputField: {
        padding: '15px 10px',
        width: '80%',
        outline: 'none',
        border: '1px solid #EAEDED'
    },

    inputNumber: {
        padding: '15px 10px',
        width: '40%',
        outline: 'none',
        display: 'inline',
        border: '1px solid #EAEDED'
    },

    priceDiv: {
        display: 'flex',
        border: '1px solid #EAEDED',
        width: '84%',
        borderRadius: '2px',
        height: '47px',
    },

    usd: {
        paddingLeft: '20px',
        marginTop: '13px',
        fontWeight: 'bold',

        '@media (max-width: 1000px)': {
            paddingLeft: '0px'
        },
    },

    inputFieldNoBorder: {
        padding: '15px 10px',
        width: '80%',
        border: 'none',
        outline: 'none',
    },

    billingTabs: {
        display: 'flex',
        width: '50%',
        borderRadius: '5px',

        '@media (max-width: 1000px)': {
            width: '70%',
        },
    },

    billingChildTab: {
        width: '50%',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
    },

    addButton: {
        padding: '10px 20px',
        margin: '20px 0px',
        background: '#fff',
        border: '1px solid #EAEDED',
        color: '#000',
        fontWeight: 'bolder',
        cursor: 'pointer'
    },

    contextMenu: {
        background: '#fff',
        zIndex: 1,
        top: 25,
        right: 115,
        position: 'absolute',
        width: '150px',
        padding: 10,
        fontWeight: 'bold',
        border: '1px solid #EAEDED',

        '@media (max-width: 1000px)': {
            right: 50
        },
    }
}