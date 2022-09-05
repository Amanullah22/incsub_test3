export const style = {
    mainComponent: {
        width: '80%',
        margin: '20px auto',
        padding: '20px',
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

    fileInput: {
        display: 'none'
    },

    customFileUpload: {
        width: '49px',
        height: '49px',
        background: '#D6EAF8',
        textAlign: 'center',
        position: 'relative',
        borderRadius: '2px'
    },

    plusStyle: {
        top: '4px',
        left: '15px',
        position: 'absolute',
        fontWeight: 'bolder',
        fontSize: 25,
        cursor: 'pointer',
        color: '#2980B9'
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

    uploadedImage: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '30%',

        '@media (max-width: 1000px)': {
            width: '50%',
        },
    }
}