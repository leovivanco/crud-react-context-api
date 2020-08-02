import { makeStyles } from "@material-ui/core/styles";

export const BaseStyle = makeStyles({
  root: {
    width: "100%",
    "& .MuiFormControl-root, .MuiInputBase-formControl": {
      width: "100%",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    "& > .MuiButtonBase-root:first-child": {
      marginRight: ".6rem",
    },
  },
});
