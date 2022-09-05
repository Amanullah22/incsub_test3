import * as React from 'react';
import { style } from './styles';
import PricingPlans from './PricingPlans'
import { StyleRoot } from 'radium';

const MainComponent = () => {
    const [image, setImage] = React.useState('')
    const [errorState, setErrorState] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [checkingImage, setCheckingImage] = React.useState(false)

    const openUpload = () => {
        var upload = document.getElementById("fileUpload")
        upload.click()
    }

    const checkImage = (event) => {
        setCheckingImage(true)
        const fileSize = event.target.files[0].size / 1024 / 1024;
        const fileType = event.target.files[0].type.toLowerCase()

        if ((fileType.includes('png')) || (fileType.includes('jpg')) || (fileType.includes('jpeg'))) {
            if (fileSize < 2) {
                const file = URL.createObjectURL(event.target.files[0])
                setTimeout(() => {
                    setImage(file)
                    setCheckingImage(false)
                }, 3000)
            } else {
                setErrorMessage('File is larger than 2MB')
                setErrorState(true)
                setCheckingImage(false)

                setTimeout(() => {
                    setErrorState(false)
                    setErrorMessage('')
                }, 3000)
            }
        } else {
            setErrorMessage('Invalid file type.')
            setErrorState(true)
            setCheckingImage(false)

            setTimeout(() => {
                setErrorState(false)
                setErrorMessage('')
            }, 3000)
        }
    }

    return <StyleRoot>
        <div style={style.mainComponent}>
            <h2 style={{ textAlign: 'center' }}>Create Product or Service</h2>
            <h3 style={{ marginTop: 50 }}>General Info</h3>

            <div style={style.parallelMain}>
                <div style={style.parallelChild}>
                    <h4 style={{ color: 'grey' }}>Product Name</h4>
                    <input type='text' style={style.inputField} placeholder='E.g. Website Maintenance, SEO etc'></input>
                </div>

                <div style={style.parallelChild}>
                    <h4 style={{ color: 'grey', display: 'inline-block' }}>Product Image</h4>&nbsp;<p style={{ display: 'inline', fontSize: '14px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>(Optional)</p>
                    <input type='file' style={style.fileInput} id='fileUpload' onChange={checkImage} />
                    {image !== '' && checkingImage === false ?
                        <div style={style.uploadedImage}>
                            <div style={style.customFileUpload}>
                                {image !== '' && checkingImage === false && <img style={{ objectFit: 'contain', width: '100%' }} src={image} alt='product' />}
                            </div>

                            <p onClick={openUpload} style={{color: 'blue', cursor: 'pointer'}}>Edit</p>
                            <p onClick={() => setImage('')} style={{color: 'red', cursor: 'pointer'}}>Remove</p>
                        </div>
                        :
                        <div style={style.customFileUpload}>
                            {checkingImage ? <span style={style.plusStyle}>⋯</span> : <span style={style.plusStyle} onClick={openUpload}>+</span>}
                        </div>}
                    {errorState && <p style={{ color: 'red', fontSize: '14px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>{errorMessage}</p>}
                    <p style={{ fontSize: '14px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Upload a square image that does not exceed 2 MB.</p>
                </div>
            </div>

            <hr />

            <h3 style={{ marginTop: 30 }}>Pricing Plans</h3>
            <p style={{ fontSize: '14px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Create pricing plans for the product/service. Note that every product/service can have multiple pricing plans.</p>

            <PricingPlans />

            <hr />

            <div style={{ textAlign: 'right' }}>
                <button style={style.addButton}>Cancel</button>&nbsp;
                <button style={style.addButton}>Create</button>
            </div>
        </div>
    </StyleRoot>
}

export default MainComponent