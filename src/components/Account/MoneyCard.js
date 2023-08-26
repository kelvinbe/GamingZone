import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const MoneyCard = ({amount, name}) => {
  return (
    <div>
      <Paper
        elevation={6}
        style={{
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column'
        }}
      >
        <div>
           <Typography variant="h5"> {name}</Typography>
        </div>
        <div>
        <Typography variant="h5">{amount} $</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default MoneyCard;
