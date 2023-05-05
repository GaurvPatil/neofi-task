import { makeStyles } from "@mui/styles";

export const mainCard = {
  minWidth: 275,
  width: "29.375rem",
  height: "35.4375rem",
  background: "#1C1731",
  padding: "4.9rem 2.5rem 3rem 2.5rem",
  borderRadius: "10px",
};

export const useStyles = makeStyles((theme) => ({
  centerItemRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerItemCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  textDiv: {
    height: "03.7rem",
    padding: "0 1.5rem",
    borderRadius: "10px",
  },

  typoHeaders: {
    color: "white",
    fontSize: "0.8rem",
  },

  typoInner: {
    color: "white",
    fontSize: "1rem",
  },

  typoPrice: {
    color: "#627eea",
    fontSize: "1.5rem",
  },

  typoTer: {
    color: "#6F6F7E",
    fontSize: "1.3rem",
    fontWeight: "600",
  },

  btn: {
    height: "3.1rem",
    borderRadius: "1.8rem",
    maxWidth: 389,
    background: "linear-gradient(45deg, #3387d5, #7a06c9)",
    marginTop: "2rem",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "white",
  },
}));
