import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useStyles } from "./BuyCoinStyle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import clsx from "clsx";
import ClearIcon from "@mui/icons-material/Clear";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CheckIcon from "@mui/icons-material/Check";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 461,
  width: { xs: 280, md: 360, lg: 410 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "1.1rem",
  background: "#181627",
  color: "white",
  border: "3px solid #627eea",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export default function CoinSelectModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        className={clsx(classes.centerItemRow, classes.textDiv)}
        style={{ background: "#332c54", cursor: "pointer" }}
        onClick={handleOpen}
      >
        <Typography className={classes.typoInner}>
          <img src="#" alt="coinIMG" /> &nbsp; Ethereum
        </Typography>
        <PlayArrowIcon
          sx={{
            transform: "rotate(90deg)",
            color: "#627eea",
          }}
        />
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style }}>
          <div
            onClick={handleClose}
            style={{
              borderRadius: "5px",
              height: "1.5rem",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <ClearIcon
              sx={{
                float: "right",
                background: "rgba(110, 86, 248, 0.15)",
                borderRadius: "5px",
                padding: "0.2rem",
              }}
            />
          </div>

          <div
            style={{
              background: "#181627",
              width: "100%",
              border: "1px solid #627eea",
              borderRadius: "30px",
              height: "2.5rem",
              padding: "0.3rem 0 0.3rem 0.3rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              paddingLeft: "1rem",
            }}
          >
            <SearchSharpIcon />
            <input
              placeholder="SearchChains"
              style={{
                color: "white",
                all: "unset",
              }}
            />
          </div>

          <div>
            <div
              className={classes.centerItemRow}
              style={{
                height: "2.7rem",
                background: "#1B192D",
                borderRadius: "2px",
                marginTop: "1rem",
                padding: "0 1rem",
              }}
            >
              <Typography className={classes.centerItemRow}>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <CheckIcon
                sx={{
                  color: "green",
                  fontWeight: "600",
                }}
              />
            </div>

            <div
              id="scollableDiv"
              style={{
                height: "2.7rem",
                borderRadius: "2px",
                marginTop: "1rem",
                padding: "0 1rem",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: 200,
                "overflow-y": "scroll",
              }}
            >
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
              <Typography>
                <img src="#" alt="coinImg" /> &nbsp; Ethereum{" "}
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
