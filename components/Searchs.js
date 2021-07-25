import React, { useEffect, useState } from 'react';
//import './Search.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { PinDropSharp } from '@material-ui/icons';
import { InputGroup } from 'reactstrap';
import { Button } from '@material-ui/core';
import {Form,FormGroup, Label,Input} from 'reactstrap';
function Searchs(){
    const[details,setDetails]=useState({invoice_id:''}); 
    //const data={invoice_id:details.invoice_id};
    /*useEffect(()=>{
    const Getdata = async () =>{
    const result = await axios(`http://localhost:8080/1806256/search`)
    }; 
    Getdata();
},[]);*/
//const[invoice_id,setInvoice_id]=useState('');
//const[response,setResponse]=useState([]);
/*const Searchinvoice = (e) =>{
    console.log("hello searchinvoice");
    const data ={invoice_id:details.invoice_id};
    //const[invoice_id,setInvoice_id]=useState('');
    const response=axios.get(`http://localhost:8080/1806256/search?_inv=1928516992`,data)
    /*.then((result)=>{
        //setResponse(result.data),
        console.log("successful");
    })
    .catch(err=>{
        console.log("error");
    })*/
    //console.log(response.data);
const onChange = e =>{
    console.log("hello onchange");
    console.log("hello searchinvoice");
    const data ={inv:details.invoice_id};
    //const[invoice_id,setInvoice_id]=useState('');
    console.log(data);
    setDetails({invoice_id:e.target.value});
    let response=axios.get(`http://localhost:8080/1806534/search?inv=${data.inv}`)
    .then((result)=>{
        //setResponse(result.data),
        console.log("successful123");
        //setDetails({invoice_id:e.target.value});
        console.log([...result.data]);
    })
    .catch(err=>{
        console.log("error");
    })
    //console.log("successful");
    //setInvoice_id({invoice_id:event.target.value});
}
  return(
      <div>
          <Form >
              <InputGroup>
              <Input type="number" name="inv" placeholder="Search Invoice" 
              onChange={onChange}></Input>
              </InputGroup>
              
          </Form>
      </div>
  )
}

export default Searchs;
