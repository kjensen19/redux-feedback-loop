import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';





export default function BasicTable() {
    //Fetch DB info on page load
  useEffect(() => {
      fetchFeedback();
    }, [])
    //state for db info (to trigger reRender)
    const [adminData, setAdminData] = useState([])
    //GET
    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then(response => {
            console.log(response.data.rows)
            setAdminData(response.data.rows)
            console.log(adminData)
        }).catch( error => {
            console.log('ERROR IN GET', error)
        }) 
    }
    //PUT
    const flagFeedback = (id) => {
      console.log('ID in flag', id)
      axios({
        method: 'PUT',
        url: `/feedback/${id}`
      }).then((response) => {
        fetchFeedback()
      }).catch((error) => {
        console.log('PUT failed', error)
      })
    }
    //DEL
    const delFeedback = (id) => {
      console.log('ID in DEL', id)
      axios({
        method: 'DELETE',
        url: `/feedback/${id}`
      }).then((response) => {
        fetchFeedback()
      }).catch((error) => {
        console.log('DEL error', error)
      })
    }
    //Table for feedback data with buttons for flagging and deleting
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 1, height: .9}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Feeling</TableCell>
            <TableCell align="center">Undertsanding</TableCell>
            <TableCell align="center">Supported</TableCell>
            <TableCell align="center">Comments</TableCell>
            <TableCell align="center">Flagged?</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Remove Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
                <TableCell align="center">{row.understanding}</TableCell>
                <TableCell align="center">{row.feeling}</TableCell>
                <TableCell align="center">{row.support}</TableCell>
                <TableCell align="center">{row.comments}</TableCell>
                <TableCell align="center"><Button id={row.id} onClick={() => flagFeedback(row.id)}>{row.flagged ? 'yes' : 'no'}</Button></TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align='center'><Button onClick={() => delFeedback(row.id)}>Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
