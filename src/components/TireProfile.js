import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TireTable from "./TireTable";
import TireImage from "./TireImage";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "auto",
  },
  top: {
    width: "100%",
    display: "flex",
  },
  topR1: {
    width: "41%",
  },
  topR2: {
    width: "41%",
  },
  topImage: {
    margin: "auto",
    width: "18%",
  },
});
function TireProfile({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.topR1}>
          <TireTable data={data.tire1} />
        </div>
        <div className={classes.topImage}>
          <TireImage data={data.tire1} />
          <TireImage data={data.tire2} />
        </div>
        <div className={classes.topR2}>
          <TireTable data={data.tire2} />
        </div>
      </div>
      <div className={classes.top}>
        <div className={classes.topR1}>
          <TireTable data={data.tire3} />
        </div>
        <div className={classes.topImage}>
          <TireImage data={data.tire3} />
          <TireImage data={data.tire4} />
        </div>
        <div className={classes.topR2}>
          <TireTable data={data.tire4} />
        </div>
      </div>
    </div>
  );
}

export default TireProfile;
