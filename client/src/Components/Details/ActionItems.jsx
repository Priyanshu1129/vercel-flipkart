import { useState } from 'react'
import { Box, Button, styled} from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';


const LeftContainer = styled(Box)(({ theme }) => ({
  marginRight: '50px',
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
      padding: '20px 20px',
      margin: '10px auto',
  }
}))

const Image = styled("img")`
  width: 95%;
  padding: 15px 20px;
`;

const StyledButton = styled(Button)(({theme})=>({
  width: '48%',
  borderRadius: '2px',
  height: '65px',
  color: '#fff',
  fontSize: '22px',
  fontWeight: 600,
  padding: '10px',
  marginTop: '15px',
  fontFamily: 'inherit',
  [theme.breakpoints.down('sm')]:{
    fontSize: '13px',
  
    padding: '0px 5px',
    height: '50px'
  }

}))

const ActionItems = ({ product }) => {

  const [ quantity, setQuantity ] = useState(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const addItemToCart = () =>{
    dispatch(addToCart(product.id, quantity))
    navigate('/cart')
  }

  const buyNow = async () => {
    
    let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information)
}

  
  return (
    <LeftContainer>
      <Box style={{  padding: '15px 20px',  border: '1px solid #f0f0f0' , textAlign: 'center' }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton        
        style={{ marginRight: 10, background: "#ff9f00"}}
        variant="contained"
        onClick={()=> addItemToCart()}
      ><Cart style={{fontSize: '30', marginRight:'5'}}/>
        Add to Cart
      </StyledButton>
      <StyledButton
        style={{ background: "#fb641b"}}
        variant="contained"
      >
        {/* onClick={()=> buyNow()} */}
        <Flash style={{fontSize: '30', marginRight:'5'}}/>
        Buy Now
      </StyledButton>
    </LeftContainer>
  )
}

export default ActionItems;
