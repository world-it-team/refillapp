import React from "react";
import ProductInfo from "./ProductInfo";
import CheckProduct from "./CheckProduct";
import Judgement from "./Judgement";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "95%",
    display: "flex",
    margin: "10px auto",
    justifyContent: "space-between",
  },
  left: {
    width: "85%"
  },
  right: {
    width: "13%",

  },
});

function MiddleTable({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <ProductInfo data={data} />
        <CheckProduct data={data} />
      </div>
      <div className={classes.right}>
        <Judgement data={data} />
      </div>
    </div>
  );
}

export default MiddleTable;
