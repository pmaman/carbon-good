import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
//import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
import { styled, alpha } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// const StyledAccordion = styled(Accordion)(({ theme }) => ({
//     position:'fixed',
//     top:'100px',
//     left:'20px',
//     backgroundColor: alpha('#fff', 0.85)
// }));

const StyledList = styled(List)(({ theme }) => ({
    backgroundColor: alpha('#fff',0.9),
    position:'fixed',
    top:'100px',
    left:'20px', 
    width: '275px',
    padding: theme.spacing(2),
    borderRadius:'5px'
}));

export default function FloatingSidebar(layers){
    const [open, setOpen] = useState(false);
    const [layerlist, setLayerlist] = useState(layers);

    const handleClick = () => {
      setOpen(!open);
    };
    return(
        <>
            <StyledList>
                <Typography variant="h5">Atlas</Typography>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Layers" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {layerlist.map((layer) => (
                        <ListItemText key={layer}>
                            <Typography textAlign="center">{layer}</Typography>
                        </ListItemText>
                    ))}
            </StyledList>
        </>
    )
}


