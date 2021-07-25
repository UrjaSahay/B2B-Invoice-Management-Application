import React from 'react';
import {Grid,Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import DeleteAlert from './Delete1';
import DeleteIcon from '@material-ui/icons/Delete';
import './Globalvariable';
export default function Deletebutton(props) {
const [open, setOpen] = React.useState(false);

const pr = (props.inv);
console.log("In delete button",pr);

const handleClickOpen = (props) => {
  setOpen(true);
}
const handleClose = () =>{
  setOpen(false);
};

return(
    <>
    <Button variant="outlined" onClick={handleClickOpen} startIcon={<DeleteIcon/>}>Delete</Button>
     {open && <DeleteAlert />}
    </>
  );
}

