import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react'

function createData(id, feeling, understanding, support, comments, flagged, date) {
  return {id, feeling, understanding, support, comments, flagged, date};
}

let rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function BasicTable() {
    useEffect(() => {
        fetchFeedback();
    }, [])

    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then(response => {
            // for (let row of response){
            //     rows.append(createData(row))
            // }
            console.log(response.data.rows)
            for (let row of response.data.rows){
            rows.push(createData(row))
            }
            console.log(rows)
            return rows
        }).catch( error => {
            console.log('ERROR IN GET', error)
        }) 
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Feedback</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Feeling</TableCell>
            <TableCell align="right">Undertsanding</TableCell>
            <TableCell align="right">Supported</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Flagged?</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
                <TableCell align="right">{row.feeling}</TableCell>
                <TableCell align="right">{row.undertsanding}</TableCell>
                <TableCell align="right">{row.supported}</TableCell>
                <TableCell align="right">{row.comments}</TableCell>
                <TableCell align="right">{row.flagged}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
// }id, feeling, understanding, support, comments, flagged, date
