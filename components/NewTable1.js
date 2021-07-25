import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Checkbox, makeStyles, TableContainer } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress , Paper } from "@material-ui/core";
import Editbutton from "./Editbutton1";
import Deletebutton from "./Deletebutton1.js";
import './Globalvariable';
const style = makeStyles({
  root: {
    letterSpacing: "0px",
    color: "#97A1A9",
    paddingBottom: "1vh",
    backgroundColor: "#2D4250",
    borderBottom: "transparent",
  },
});

export default function DataTable() {

  let [isNext, isNextFunc] = useState(false);
  let [pageNumber, setPageNumber] = useState(0);
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/1806534/tableshow?pagecount=${pageNumber}&limit=50`)
      .then((response) => {
        console.log(response);
        setList([...list, ...response.data]);
      })
      .catch((error) => console.log(error));
  };

  function fetchMoreData() {
    setPageNumber(pageNumber + 50);
    if (pageNumber > 1000) {
      isNextFunc(false);
    }
    fetchData();
  }
  let [showedit,setShowedit] = useState(false);
  let [invoice,setInvoice] = useState(false);

  const handleClick = (event, name) => {
    setShowedit(true);
    setInvoice(list[name].invoice_id);
    console.log(list[name]);
    let propinv = list[name].invoice_id; 
    global.selected_id=propinv;
    console.log(global.selected_id);
    console.log(propinv);
    console.log("list");
    console.log(name);

    console.log("after edit");
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    checkboxcheck();
    //console.log(newSelected);
  };


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = list.map((row, index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const [checkboxenable,setCheckboxenable] = useState(false);

  const checkboxcheck=()=>{
     setCheckboxenable(true);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  useEffect(() => {
    isNextFunc(true);
    fetchMoreData();
  }, []);

  const classes = style();
  return (
     
    <TableContainer id="test-table" overflow="scroll">
       
      <InfiniteScroll
        dataLength={list.length}
        loader={
          <div
            style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
          >
            <div>
              {" "}
              <CircularProgress />{" "}
            </div>
            <br />
            <div>loading</div>
          </div>
        }
        hasMore={isNext}
        next={fetchMoreData}
      >
        {" "}

        <Table stickyHeader aria-label="sticky table">
          <TableHead position="sticky">
            <TableRow>
            
              <TableCell classes={{ root: classes.root }}>
                <Checkbox
                  defaultChecked={false}
                  onChange={handleSelectAllClick}
                  size="small"
                />
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "left" }}
              >
                Customer Name
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "left" }}
              >
                Customer #
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "left" }}
              >
                Bill Id
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "right" }}
              >
                Invoice Amount
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "left" }}
              >
                Due Date
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "right" }}
              >
                Predicted Payment Date
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "left" }}
              >
                Predicted Payment Bucket
              </TableCell>
              <TableCell
                classes={{ root: classes.root }}
                style={{ textAlign: "left" }}
              >
                Notes
              </TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {list.map((data, index) => {
              const isItemSelected = isSelected(index);
              console.log(data);
              return (
                <TableRow
                  key={index}
                  selected={isItemSelected}
                  style={{
                    backgroundColor: isItemSelected
                      ? "#2A5368"
                      : index % 2
                      ? "#283A46"
                      : "#2D4250",
                  }}
                >
                  <TableCell
                    style={{
                      textAlign: "left",
                    }}
                  >
                
                    <Checkbox
                      defaultChecked={false}
                      size="small"
                      checked={isItemSelected}
                      onChange={(event) => handleClick(event, index)}
                      inputProps={{
                        "aria-label": "secondary checkbox",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left" }}
                  >
                    {data.name_customer}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left" }}
                  >
                    {data.cust_number}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left" }}
                  >
                    {data.invoice_id}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {data.total_open_amount}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {data.due_in_date}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                    }}
                  >
                    --
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "left",
                    }}
                  >
                    --
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {data.notes}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          
        </Table>
      </InfiniteScroll>
    </TableContainer>
  );
}