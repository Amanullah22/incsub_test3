import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FTab from "../../images/FTab.png";
import STab from "../../images/STab.png";

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>MOUNTAIN 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ backgroundImage: `url(${FTab})`, height: '545px' }}>
                        <img src='./schedule1.png' style={{ margin: '30px' }} />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>MOUNTAIN 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ backgroundImage: `url(${STab})`, height: '545px' }}>
                        <img src='./schedule2.png' style={{ margin: '30px' }} />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}