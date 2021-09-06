import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "95%",
    margin: "25px auto 0px auto",
    borderCollapse: "collapse",
    "& th, td": {
      border: "1px solid black",
    },
    "& th": {
      backgroundColor: "#e6f2f5",
    },
    "& tr": {
      height: "30px",
    },
    textAlign: "center",
  },
});

function TopTable(props) {
  const classes = useStyles();
  const data = props.data;

  return (
    <table className={classes.table}>
      <tr>
        <th>管理番号</th>
        <th>契約者名</th>
        <th>ロケーション</th>
        <th>車種</th>
        <th>ナンバー</th>
        <th>倉庫業者</th>
        <th>契約期間</th>
        <th>契約形態・状況</th>
      </tr>
      <tr>
        <td>{data.controlNumber}</td>
        <td>{data.contractorName}</td>
        <td>{data.location}</td>
        <td>{data.vehicleType}</td>
        <td>{data.number}</td>
        <td>{data.wareHouse}</td>
        <td>{data.contractPeriod}</td>
        <td>{data.contractType}</td>


      </tr>
    </table>
  );
}

export default TopTable;
