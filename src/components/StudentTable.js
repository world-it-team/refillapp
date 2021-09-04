import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listStudents } from "../graphql/queries";
import { deleteStudent } from "../graphql/mutations";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Avatar from "@material-ui/core/Avatar";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  content: {
    margin: "50px auto",
    maxWidth: "80%",
  },
  addBtn: {
    fontSize: "large",
    margin: "20px 0 0 90%",
    padding: "5px",
    width: "120px",
    height: "40px",
  },
  table: {
    minWidth: 600,
  },
  deleteBtn: { " &:hover": { cursor: "pointer" } },
  avatar: {
    marginLeft: "auto",
  },
});

export default function StudentTable() {
  const classes = useStyles();
  const [students, setStudents] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    API.graphql(graphqlOperation(listStudents)).then((data) => {
      setStudents(data.data.listStudents.items);
    });
  }, [change]);

  const handleClickDelete = (id) => {
    API.graphql(graphqlOperation(deleteStudent, { input: { id } })).then(() => {
      setChange(!change);
    });
  };

  return (
    <div className={classes.content}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>.No</StyledTableCell>
              <StyledTableCell align="right">Avata</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Age&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Address&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Avatar
                    alt={row.name}
                    src={row.avatar}
                    className={classes.avatar}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.age}</StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell
                  align="right"
                  className={classes.deleteBtn}
                  onClick={() => handleClickDelete(row.id)}
                >
                  <DeleteForeverIcon />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/add-student">
        <Button variant="contained" color="primary" className={classes.addBtn}>
          追加
        </Button>
      </Link>
    </div>
  );
}
