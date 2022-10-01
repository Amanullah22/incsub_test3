import * as React from 'react';
import { style } from './styles';
import { StyleRoot } from 'radium';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EventForm = () => {

    return <StyleRoot>
        <div style={{ background: '#DDDDDD', width: '100%', padding: '50px 0px', paddingBottom: '100px', textAlign: 'center' }}>
            <div style={style.formContainer}>
                <h1>Create an Event</h1>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Event Name" variant="outlined" style={{ width: '100%' }} />
                    <br />
                    <TextField id="outlined-basic" label="Host Name" variant="outlined" style={{ width: '100%' }} />
                    <br />
                    <TextField
                        id="datetime-local"
                        style={{ width: '100%' }}
                        label="Start Date"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="datetime-local"
                        style={{ width: '100%' }}
                        label="End Date"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField id="outlined-basic" label="Location" variant="outlined" style={{ width: '100%' }} />
                    <br />
                    {/* <input type="file" name="file" /> */}
                    <Link style={style.btn} to='/event'>Next</Link>
                </Box>
            </div>
        </div>
    </StyleRoot>
}

export default EventForm