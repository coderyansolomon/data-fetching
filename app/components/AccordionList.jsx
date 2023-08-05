import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionList({items}){
    return (
        <div>
            { 
            items.map((item) => {
            return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>
            {item.title}
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            {item.description}
            </Typography>
            </AccordionDetails>
        </Accordion>
        )})
        }
        </div>
    )
}