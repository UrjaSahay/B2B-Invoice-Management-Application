import React from 'react';
import {Grid,Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import './Globalvariable';
export default function EditDialog(props) {
   
   const [open, setOpen] = React.useState(true);
   //setOpen(props.openstate);
    //console.log("in Edit invoice",props.inv_id);
   // let inv = ({props.invoice_id});
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () =>{
      setOpen(false);
    };
    let [total_open_amount,setTotal_open_amount] = React.useState('');
    let [notes,setNotes] = React.useState('');
   
    const Editinvoice = () =>{
      axios.get(`http://localhost:8080/1806534/record?docid=${global.selected_id}&tamt=${total_open_amount}&letters=${notes}`)
      .then((res)=>{
        console.log("successful");
        console.log([...res.data]);
  })
  .catch(err=>{
        console.log("unsuccesful");
  })
    }
  
    return (
      <div>
    
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit invoice<IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton></DialogTitle>
          <DialogContent>
          <Grid container spacing={2}>
          <Grid item xs={12}><TextField
                  required
                  id="name"
                  label="Invoice Amount"
                  type="number"
                  variant="outlined"
                  onChange={e => setTotal_open_amount(e.target.value)}
            /></Grid>
          <Grid item xs={12}> <TextField
                 id="filled-multiline-static"
                 label="Note"
                 multiline
                 rows={4}
                 variant="outlined"
                 onChange={e => setNotes(e.target.value)}
           /></Grid>
          </Grid>
          </DialogContent>
          <DialogActions>
               <Button onClick={handleClose} color="primary">Cancel</Button>
               <Button onClick={handleClickOpen} color="primary">Reset</Button>
               <Button onClick={()=>{Editinvoice();handleClose()}} color="primary">Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }