import { Container, InputAdornment, TextField } from "@mui/material";

import React from "react";
import { centerItem } from "../commonCss/commonCss";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { mainCard, useStyles } from "./BuyCoinStyle";
import clsx from "clsx";
import CoinSelectModal from "./CoinSelectModal";

const BuyCoin = () => {
  const classes = useStyles();

  // let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
  // ws.onmessage = (event) => {
  //   console.log(event.data);
  // };

  return (
    <Container maxWidth="sm" sx={{ ...centerItem }}>
      <Card sx={{ ...mainCard }} className={classes.centerItemCol}>
        <section className={classes.centerItemCol}>
          <div className={classes.centerItemRow}>
            <Typography className={classes.typoHeaders}>
              Current Value
            </Typography>
            <Typography className={classes.typoPrice}> ₹ 24882 </Typography>
          </div>

          <CoinSelectModal />
        </section>

        <section>
          <Typography
            className={classes.typoHeaders}
            sx={{ marginBottom: "0.7rem" }}
          >
            Amount you want to invest
          </Typography>

          <div
            style={{
              background: "#181627",
              color: "white",
              width: "100%",
              border: "2px solid #627eea",
              borderRadius: "10px",
              height: "3.7rem",
              padding: "0.5rem 1.5rem",
            }}
          >
            <input
              className="amountInput"
              placeholder="0.00"
              style={{
                color: "white",
                all: "unset",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </section>

        <section>
          <Typography
            className={classes.typoHeaders}
            sx={{ marginBottom: "0.7rem" }}
          >
            Estimate Number of ETH You will Get
          </Typography>

          <div
            className={clsx(classes.centerItemRow, classes.textDiv)}
            style={{ background: "#332c54" }}
          >
            <Typography className={classes.typoTer}>0.00</Typography>
          </div>
        </section>

        <Button className={classes.btn}>Buy</Button>
      </Card>
    </Container>
  );
};

export default BuyCoin;
