import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import './Globalvariable';
export default function DeleteAlert(props) {
  const [open, setOpen] = React.useState(true);
  console.log("in Delete invoice",props.inv_id);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Deleteinvoice = () =>{
    axios.get(`http://localhost:8080/1806534/delete?doc=${global.selected_id}`)
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
     
      <Dialog
        open={open}
        keepMounted
        style={{backgroundColor:"transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box" }}
        onClose={handleClose}> 
        <DialogTitle >Delete Record(s)?<IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton></DialogTitle>
        <DialogContent style={{backgroundColor:"transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box"}}>
          <DialogContentText >
          You'll lose your record(s) after this action. We can't recover 
          them once you decide.
          Are you sure you want to permanently delete them?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{handleClose();Deleteinvoice()}} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}