import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../Redux/Actions';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Employee.css';
import {EmployeesList} from './EmployeeJson'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
       
        minWidth: 900,
    },
});


const EmployeeList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const {users} = useSelector((state) => state.usersData);
    useEffect(() => {
        dispatch(setUsers(EmployeesList))
    }, [])
    return (
        <div className="employee_container">
            <Link to={'/'}>Go Back To Login</Link>
            <h2>EMPLOYEE LIST</h2>
            <hr/>
             <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Age</StyledTableCell>
                            <StyledTableCell align="center">Gender</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Phone</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {<TableBody>
                        {users.length && users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component="th" scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.age}</StyledTableCell>
                                <StyledTableCell align="center">{user.gender}</StyledTableCell>
                                <StyledTableCell align="center">{user.email}</StyledTableCell>
                                <StyledTableCell align="center">{user.phoneNo}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>}
                </Table>
            </TableContainer>
        </div>
    )

}

export default EmployeeList;