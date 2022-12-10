import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)`
  width: 90%;
  height: 60vh;
  background: #fff;
  margin: 120px auto;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")(({ theme }) => ({
  width: "20%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: 35,
  fontWeight: 500,
  margin: "30px 0",
  [theme.breakpoints.down('sm')]:{
    fontSize: 26
  }
}));

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <Image src={imgurl} />
        <Text>Your cart is empty!</Text>
        <Typography component="span" style={{ fontSize: 17 }}>
          Explore our wide selection and find something you like
        </Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
