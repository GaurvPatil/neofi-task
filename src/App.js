import { Container } from "@mui/material";
import NavBar from "./components/navBar/NavBar";
import BuyCoin from "./components/buyCoin/BuyCoin";
import "../src/";
import { centerItem } from "./components/commonCss/commonCss";


function App() {
  return (
    <>
      <NavBar />
      <Container
        maxWidth="xl"
        className="mainContainer"
        sx={{
          ...centerItem,
          padding: { xs: "4rem 0", md: "7rem 0", lg: "12rem 0" },
        }}
      >
        <BuyCoin />
      </Container>
    </>
  );
}

export default App;
