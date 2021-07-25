import React, { useState } from 'react';
import {Grid,Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

export default function AddDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

   const handleClose = () => {
    setOpen(false);
  };
  const[name_customer,setCustomer_name]=useState('');
  const[due_in_date,setDue_in_date]=useState('');
  const[cust_number,setCust_number]=useState('');
  const[invoice_id,setInvoice_id]=useState('');
  const[total_open_amount,setTotal_open_amount]=useState('');
  const[notes,setNotes]=useState('');
  //const [adddetails,setAdddetails]=useState({name_customer:'',due_in_date:'',cust_number:'',invoice_id:'',
                                   // total_open_amount:'',notes:''})
  const Addinvoice=(e)=>{
        console.log("function entered");
        //const data1 = {userName:adddetails.name_customer,due:adddetails.due_in_date,userNo:adddetails.cust_number,inv:adddetails.invoice_id,amt:adddetails.total_open_amount,letters:adddetails.notes};
       /* const data2 = {due:adddetails.due_in_date};
        const data3 = {userNo:adddetails.cust_number};
        const data4 = {inv:adddetails.invoice_id};
        const data5 = {amt:adddetails.total_open_amount};
        const data6 = {letters:adddetails.notes};*/
        
        let response= axios.get(`http://localhost:8080/1806534/inserttodb?userName=${name_customer}&userNo=${cust_number}&inv=${invoice_id}&amt=${total_open_amount}&due=${due_in_date}&letters=${notes}`)
 // tatti code //let response= axios.get(`http://localhost:8080/1806256/inserttodb`,{userName:data1.name_customer,due:data2.due_in_date,userNo:data3.cust_number,inv:data4.invoice_id,amt:data5.total_open_amount,letters:data6.notes}) 
      // let response=axios.get(`http://localhost:8080/1806256/inserttodb?userName=deepika&userNo=1234&inv=4321&amt=7894&due=02012001&letters=ranveer`)
        .then((res)=>{
              console.log("successful");
              console.log([...res.data]);
        })
        .catch(err=>{
              console.log("unsuccesful");
        })
        //setAdddetails({invoice_id:e.target.value,cust_number:e.target.value,name_customer:e.target.value,due_in_date:e.target.value,
            //total_open_amount:e.target.value,notes:e.target.value})
      }
 
  /*const handleChange = (e) =>{
        setAdddetails({invoice_id:e.target.value});
        setAdddetails({cust_number:e.target.value});
        setAdddetails({name_customer:e.target.value});
        setAdddetails({due_in_date:e.target.value});
        setAdddetails({total_open_amount:e.target.value});
        setAdddetails({notes:e.target.value});
       /* setInvoice_id({invoice_id:e.target.value});
        setCust_number({cust_number:e.target.value});
        setDue_in_date({due_in_date:e.target.value});
        setCustomer_name({due_in_date:e.target.value});
        setTotal_open_amount({total_open_amount:e.target.value});
        setNotes({notes:e.target.value});*/
  //}
  return (
    <div>
    <Button variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon/>}>Add</Button>
    <Dialog open={open} onClose={handleClose} className="Add-dialog-box">
        <DialogTitle id="form-dialog-title">Add invoice<IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </DialogTitle>
            <DialogContent>
            <Grid container spacing={1}>
            <Grid item xs={6}><TextField
                  required
                  id="name"
                  label="Customer Name"
                  type="text"
                  variant="outlined"
                  onChange={e => setCustomer_name(e.target.value)}
                  name="userName"
            /></Grid>
             <Grid item xs={6}><TextField
                  required
                  id="date"
                  label="DueDate"
                  type="date"
                  variant="outlined"
                  onChange={e => setDue_in_date(e.target.value)}
                  name="due"
            /></Grid>
            <Grid item xs={6}><TextField
                  required
                  id="name"
                  label="Customer Number"
                  type="number"
                  variant="outlined"
                  onChange={e => setCust_number(e.target.value)}
                  name="userNo"
            /></Grid>
            <Grid item xs={6}><TextField
                  required
                  id="name"
                  label="Invoice No"
                  type="text"
                  variant="outlined"
                  onChange={e => setInvoice_id(e.target.value)}
                  name="inv"
            /></Grid>
            <Grid item xs={6}><TextField
                  required
                  id="name"
                  label="Invoice Amount"
                  type="number"
                  variant="outlined"
                  onChange={e => setTotal_open_amount(e.target.value)}
                  name="amt"
            /></Grid>
           <Grid item xs={12}> <TextField
                 id="filled-multiline"
                 label="Note"
                 multiline
                 rows={4}
                 variant="outlined"
                onChange={e => setNotes(e.target.value)}
                 name="letters"
           /></Grid>
           </Grid>
           </DialogContent>
           <DialogActions>
           <Button onClick={handleClose} color="primary">Cancel</Button>
           <Button onClick={handleClickOpen} color="primary">Clear</Button>
           <Button onClick={Addinvoice} color="primary">Add</Button>
           
           </DialogActions>
    </Dialog>
    </div>
  );
}