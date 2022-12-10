import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Box, Button, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: '20px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: '0 auto'
    },
  }));

  const Container = styled(Link)(({ theme }) => ({
    display: "flex",
    color: "inherit",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  }));

  const ParaButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: "#FFFFFF",
    padding: "23px 0px",
    height: "40px",
    fontSize: "23px",
    boxShadow: "none",
    fontFamily: 'inherit',
    fontWeight: 500,
    textTransform: "none",
    marginRight: "60px",
    '&:hover': {
      backgroundColor: "transparent",
      boxShadow: "none",
  },
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
      boxShadow: "none",
      fontSize: "22px",
      fontWeight: 'bold',
      marginRight: "0px",
      paddingLeft: '0',
      color: "#2874f0",
    },
  }));

  const LoginButton = styled(Button)(({ theme }) => ({
    color: "#2874f0",
    background: "#FFFFFF",
    fontSize: "23px",
    fontFamily: 'inherit',
    fontWeight: "500",
    textTransform: "none",
    padding: "23px 50px",
    marginRight: "60px",
    borderRadius: "2px",
    boxShadow: "none",
    height: "40px",
    '&:hover': {
      backgroundColor: "#FFFFFF",
      boxShadow: "none",
  },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      boxShadow: "none",
      fontSize: "22px",
      width: '100%',
      marginRight: 0,
      fontWeight: 'bold',
    },
  }))

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <ParaButton variant="contained">Become a Seller</ParaButton>
      <ParaButton variant="contained">More</ParaButton>
      <Container to={"/cart"}>
        <Badge
          badgeContent={cartItems?.length}
          color="primary"
          style={{ fontSize: 30 }}
        >
          <ShoppingCart style={{ marginTop: 7, fontSize: "30px" }} />
        </Badge>
        <ParaButton
          variant="contained"
          style={{ width: "60px", textDecoration: "none" }}
        >
          Cart
        </ParaButton>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
