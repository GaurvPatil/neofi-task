// MDLG = medium and DonutLarge
// XS = x-tra small

// tablet , laptop , desktop style
export const imgMDLG = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  flexGrow: 1,
};
export const menueBoxMDLG = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
};

export const typoMDLG = {
  my: 2,
  display: "block",
};

// mobile devices style
export const imgXS = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
};
export const menueBoxXS = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};
export const menueXS = {
  display: { xs: "block", md: "none" },
};

// common style
export const borderBottom = {
  borderBottom: "2px solid #627EEA",
};

export const navButton = {
  p: 0,
  padding: {
    xs: "0.1rem 0.4rem",
    md: "0.4rem 0.8rem",
    lg: "0.5rem 0.9rem",
  },
  background: "linear-gradient(45deg, #3387d5, #7a06c9)",
  borderRadius: "1.8rem",
  textTransform: "none",
};
