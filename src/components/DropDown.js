import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
  icon: {
    fill: "white",
  },
  root: {
    "& .MuiInputLabel-พนนะ": {
      color: "red",
    },
  },
});

function DropDown(props) {
  const [val, setVal] = useState("");

  //Change value in select
  const handleChange = (event) => {
    setVal(event.target.value);
    props.changeFilter(props.type, event.target.value);
  };

  //custom style select
  const classes = useStyles();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {props.type}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          value={val}
          className={classes.root}
          // style={{ color: "white" }}
          onChange={(event) => handleChange(event)}
          autoWidth
        >
          <MenuItem value={props.type}>
            <em>{props.type}</em>
          </MenuItem>
          {props.data.map((item, index) => {
            return (
              <MenuItem
                key={index}
                value={props.type === "Set" ? item.name : item}
              >
                {props.type === "Set" ? item.name : item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
export default DropDown;
