import companylogo from '../assets/companyLogo.svg';
import highradius from '../assets/highradius.svg'
//import './MainPage.css';
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, Grid,TextField } from '@material-ui/core';
import AddDialog from '../components/Add';
import EditDialog from '../components/Editbutton1';
import DeleteAlert from '../components/Deletebutton1';
import SearchIcon from '@material-ui/icons/Search';
import EnhancedTable from '../components/NewTable1';
import Search from '../components/Searchs';
function Frontpage(){
  return (
   <>
   <div className="division1">
     <Grid container>
       <Grid item xs={3}><h1 className="header" style={{color:"white"}}><img src={companylogo} className="companylogo"/>ABC products</h1></Grid>
       <Grid item xs={2}></Grid>
       <Grid item xs={2}><img src={highradius} className="logo"/></Grid>
       <Grid item xs={5}></Grid>
       <Grid item xs={12}><h3 className="invoice" style={{color:"white"}}>Invoice List</h3></Grid>
     </Grid>
     <Grid container>
       <Grid item xs={1}>
         <Button variant="outlined">predict</Button>
       </Grid>
       <Grid item xs={2}>
         <Button variant="outlined">View Correspondence</Button>
       </Grid>
       <Grid item xs={4}></Grid>
       <Grid item xs={1}>
        <AddDialog/>
       </Grid>
       <Grid item xs={1}>
        <EditDialog/>
       </Grid>
       <Grid item xs={1}>
        <DeleteAlert/>
       </Grid>
       <Grid item xs={2}>
        <Search/>
       </Grid>
     </Grid>
   </div>
   <div className="division2" style={{padding:40,width:"100%",height:"500px"}}><EnhancedTable/></div>
    </>
  );
}

export default Frontpage;
