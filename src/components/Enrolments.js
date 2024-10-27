import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setEnrolments } from "../redux/enrolmentsSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
} from "@mui/material";

const Enrolments = () => {
  const dispatch = useDispatch();
  const enrolments = useSelector((state) => state.enrolments.list);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/index.php")
      .then((response) => {
        dispatch(setEnrolments(response.data));
      })
      .catch((error) => {
        console.error("Error fetching enrolments:", error);
      });
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const sortedEnrolments = [...enrolments].sort((a, b) => {
    if (orderBy) {
      if (order === "asc") {
        return a[orderBy].localeCompare(b[orderBy]);
      } else {
        return b[orderBy].localeCompare(a[orderBy]);
      }
    }
    return 0;
  });

  const filteredEnrolments = sortedEnrolments.filter(
    (enrolment) =>
      enrolment.FirstName.toLowerCase().includes(search.toLowerCase()) ||
      enrolment.LastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        MindAtlas Education
      </h1>
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
        style={{
          margin: "20px 0",
          borderRadius: "4px",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f5f5f5" }}>
              <TableCell
                onClick={() => handleSort("FirstName")}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                First Name{" "}
                {orderBy === "FirstName" ? (order === "asc" ? "▲" : "▼") : ""}
              </TableCell>
              <TableCell
                onClick={() => handleSort("LastName")}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Last Name{" "}
                {orderBy === "LastName" ? (order === "asc" ? "▲" : "▼") : ""}
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Course</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEnrolments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((enrolment, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <TableCell>{enrolment.FirstName}</TableCell>
                  <TableCell>{enrolment.LastName}</TableCell>
                  <TableCell>{enrolment.Description}</TableCell>
                  <TableCell>{enrolment.CompletionStatus}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]} // Ensure that the option value is within an acceptable range
        component="div"
        count={enrolments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <footer style={{ textAlign: "center", padding: "10px 0", color: "#777" }}>
        &copy; 2024 MindAtlas. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Enrolments;
