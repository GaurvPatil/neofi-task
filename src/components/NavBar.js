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
import logoImg from "../assets/logo.png";

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
          <Typography
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
            }}
          >
            <img src={logoImg} alt="LOGO" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              id="menu-appbar"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page === "Trade" ? (
                      <Typography
                        textAlign="center"
                        sx={{
                          borderBottom: "2px solid #627EEA",
                          color: "#627EEA",
                        }}
                      >
                        {page}
                      </Typography>
                    ) : (
                      <Typography textAlign="center" sx={{ color: "#5A5A5A" }}>
                        {page}
                      </Typography>
                    )}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Typography
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img src={logoImg} alt="LOGO" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              return (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === "Trade" ? (
                    <Typography
                      textAlign="center"
                      sx={{
                        my: 2,
                        display: "block",
                        borderBottom: "2px solid #627EEA",
                        color: "#627EEA",
                      }}
                    >
                      {page}
                    </Typography>
                  ) : (
                    <Typography
                      textAlign="center"
                      sx={{ my: 2, display: "block", color: "#5A5A5A" }}
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
              p: 0,
              padding: {
                xs: "0.1rem 0.4rem",
                md: "0.4rem 0.8rem",
                lg: "0.5rem 0.9rem",
              },
              borderRadius: "1.8rem",
              textTransform: "none",
              background: "linear-gradient(45deg, #3387D5, #7A06C9)",
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
