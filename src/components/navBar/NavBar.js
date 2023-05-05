import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logoImg from "../../assets/logo.png";
import {
  imgXS,
  menueBoxXS,
  menueXS,
  imgMDLG,
  menueBoxMDLG,
  typoMDLG,
  navButton,
  borderBottom,
} from "./navStyle";

const pages = ["Trade", "Earn", "Support", "About"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#0B0819" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography component="a" sx={{ ...imgMDLG }}>
            <img src={logoImg} alt="LOGO" />
          </Typography>

          <Box sx={{ ...menueBoxXS }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ ...menueXS }}
            >
              {pages.map((page) => {
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page === "Trade" ? (
                      <Typography
                        textAlign="center"
                        className="PrimaryText"
                        sx={{ ...borderBottom }}
                      >
                        {page}
                      </Typography>
                    ) : (
                      <Typography textAlign="center" className="secondaryText">
                        {page}
                      </Typography>
                    )}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Typography component="a" sx={{ ...imgXS }}>
            <img src={logoImg} alt="LOGO" />
          </Typography>

          <Box sx={{ ...menueBoxMDLG }}>
            {pages.map((page) => {
              return (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === "Trade" ? (
                    <Typography
                      textAlign="center"
                      className="PrimaryText"
                      sx={{ ...typoMDLG, ...borderBottom }}
                    >
                      {page}
                    </Typography>
                  ) : (
                    <Typography
                      textAlign="center"
                      className="secondaryText"
                      sx={{ ...typoMDLG }}
                    >
                      {page}
                    </Typography>
                  )}
                </MenuItem>
              );
            })}
          </Box>

          <Button
            variant="contained"
            sx={{
              ...navButton,
            }}
          >
            Connect wallet
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
