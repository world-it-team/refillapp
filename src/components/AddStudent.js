import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createStudent } from "../graphql/mutations";
import { useHistory } from "react-router-dom";
import { Storage } from "aws-amplify";
import Avatar from "@material-ui/core/Avatar";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  field: {
    margin: "20px 40px",
    display: "grid",
  },
  saveBtn: {
    marginLeft: "180px",
  },
  avatar: {
    margin: "20px 100px",
  },
  avatarLarge: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  inputFile: {
    display: "none",
  },
  inputBtn: {
    cursor: "pointer",
  },
  inputWrapper: {
    backgroundColor: "#e0e0e0",
  },
}));

export default function AddStudent() {
  let history = useHistory();
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [img, updateImg] = useState({ url: null, file: null });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleAddrChange = (e) => {
    setAddress(e.target.value);
  };

  const uploadImg = async (file) => {
    const imgInfo = await Storage.put(file.name, file);
    const url = await Storage.get(imgInfo.key);
    return url;
  };
  const handleClickSave = async () => {
    let avatar = null;
    if (img.file) {
      avatar = await uploadImg(img.file);
    }
    const student = {
      age: parseInt(age),
      name,
      address,
      avatar,
    };
    API.graphql(graphqlOperation(createStudent, { input: student }))
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    updateImg({ file, url });
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Badge
        className={classes.avatar}
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <div className={classes.inputWrapper}>
            <input
              type="file"
              accept=".png, .jpeg, .jpg"
              className={classes.inputFile}
              id="contained-button-file"
              onChange={(e) => handleOnChange(e)}
            />
            <label htmlFor="contained-button-file">
              <PhotoCameraIcon className={classes.inputBtn} />
            </label>
          </div>
        }
      >
        <Avatar alt={name} src={img.url} className={classes.avatarLarge} />
      </Badge>

      <div className={classes.field}>
        <TextField
          id="outlined-search"
          label="Name"
          value={name}
          type="search"
          variant="outlined"
          onChange={(e) => handleNameChange(e)}
        />
        <TextField
          id="outlined-search"
          label="Age"
          value={age}
          type="number"
          onChange={(e) => handleAgeChange(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Address"
          value={address}
          type="search"
          onChange={(e) => handleAddrChange(e)}
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.saveBtn}
        onClick={handleClickSave}
      >
        保存
      </Button>
    </form>
  );
}
