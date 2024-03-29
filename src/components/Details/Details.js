import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTrasactions from "../../useTransactions";

const Details = ({ title }) => {
  const classes = useStyles();

  const { total, chartData } = useTrasactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <div>
          <Doughnut data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Details;
