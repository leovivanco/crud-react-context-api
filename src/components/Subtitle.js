import React from "react";
import { Typography, Box } from "@material-ui/core";

const Subtitle = ({ value }) => {
  return (
    <Typography variant="subtitle1">
      <Box fontWeight="fontWeightBold">{value}</Box>
    </Typography>
  );
};

export default Subtitle;
