import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./styles";

const CustomisedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  //   e=event r=reson
  const handleClose = (e, r) => {
    if (r === "clickaway") return;

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity={"success"} elevation={6} variant="filled">
          Transaction successfully created
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomisedSnackbar;
