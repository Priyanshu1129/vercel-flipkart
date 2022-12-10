import { Box, Grid, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Container = styled(Grid)(({theme}) => ({
    padding: '30px 140px',
  [theme.breakpoints.down('md')]:{
    padding: '30px 10px',
  },
  [theme.breakpoints.down('sm')]:{
    padding: '10px 10px',
  }
}))
  

const Header = styled(Box)(({theme})=>({
  padding: '25px 44px',
  background: '#fff',
  [theme.breakpoints.down('sm')]:{
    padding: '18px 22px'
  }
}))

const BottomWrapper = styled(Box)(({theme})=>({
  padding: '25px 26px',
  background: '#fff',
  boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
  borderTop: '1px solid #f0f0f0',
  [theme.breakpoints.down('sm')]:{
    padding: '10px 14px',
  }
}))


const StyledButton = styled(Button)(({theme})=>({
  display: 'flex',
  marginLeft: 'auto',
  background: '#fb641b',
  color: '#fff',
  borderRadius: '2px',
  width: '360px',
  height: '75px',
  fontSize: '20px',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]:{
    fontSize: '17px',
    width: '100%',
    height: '50px'
  }
}))

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 20,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15,
      paddingRight: 0
  }
}));

const Text = styled(Typography)(({theme})=>({
  fontWeight: 500,
  fontSize: 30,
  [theme.breakpoints.down('sm')]:{
    fontSize: 20,
    fontWeight: 600
  }
})) 


const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);


  const buyNow = async () => {
    
    let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information)
}

  return (
    <>
      {cartItems.length ? 
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Text>
                My Cart ({cartItems.length})
              </Text>
            </Header>
            {cartItems.map((item) => (
              <CartItems item={item} />
            ))}
            <BottomWrapper>
              <StyledButton variant="contained" >
              {/* onClick={()=> buyNow()} */}
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems}/>
          </Grid>
        </Container> :
        <EmptyCart />
      }
    </>
  )
}

export default Cart;
