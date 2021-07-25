import React from 'react';
import {Grid,Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import EditDialog from './Edit1';
import NewTable from './NewTable1';
import './Globalvariable';
export default function Editbutton(props){
const [open, setOpen] = React.useState(false);
const [selectedid,setSelectedid]=React.useState(0);
//const pr = (props.inv);
console.log("In edit button",global.selected_id);

const handleClickOpen = (props) => {
  setOpen(true);
}
const handleClose = () =>{
  setOpen(false);
};
    
    return(
      <>
      <Button variant="outlined" onClick={handleClickOpen} startIcon={<EditIcon/>}>Edit</Button> 
       {open && <EditDialog />}
      </>
    );
}