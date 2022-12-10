import { Box, Typography, styled, Button } from '@mui/material'
import { removeFromCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { addEllipsis } from '../../utils/common-utils';
import GroupedButton from "./GroupedButton";

const Component = styled(Box)`
    display: flex;
    border-top: 1px solid #f0f0f0;
    background: #fff
`
const LeftComponent = styled(Box)(({theme})=>({
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]:{
        margin: '12px'
    }
}))

const SmallText = styled(Typography)(({theme})=>({
    color: '#878787',
    fontSize: '20px',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]:{
        fontSize: '16px'
    }
}))

const MRP = styled(Typography)(({theme})=>({    
    color: '#878787',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]:{
        fontSize: '18px'
    }
}))

const Cost = styled(Typography)(({theme})=>({
    fontSize: '30px',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]:{
        fontSize: '23px',
        fontWeight: 600,
    }
}))

const Discount = styled(Typography)(({theme})=>({
    color: '#388E3C',
    fontSize: '22px',
    [theme.breakpoints.down('sm')]:{
        fontSize: '20px'
    }
}))


const Remove = styled(Button)(({theme})=>({
    marginTop: '20px',
    fontSize: '22px',
    fontWeight: 550,
    [theme.breakpoints.down('sm')]:{
        marginTop: '5px',
        fontSize: '18px',
        fontWeight: 500
    }
}))


const Image = styled('img')(({theme})=>({
    height: 125,
    width: 140,
    [theme.breakpoints.down('sm')]:{
        height: 70,
        width: 80, 
    }
}))
const Title = styled(Typography)(({theme})=>({
    fontSize: 25, 
    fontWeight: 600,
    [theme.breakpoints.down('sm')]:{
        fontSize: 18
    }
}))
const Fassured = styled('img')(({theme})=>({
    width: 85, 
    marginLeft: 10,
    [theme.breakpoints.down('sm')]:{
        width: 65
    } 
}))

const CartItems = ({item}) => {
    const dispatch = useDispatch()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const removeItemfromCart = (id)=>{
        dispatch(removeFromCart(id))
    }
  return (
    <Component style={{display: 'flex', alignItems: 'center'}}>
        <LeftComponent style={{display: 'flex', alignItems:'center'}}>
            <Image src={item.url} alt="item" />
            <GroupedButton />
        </LeftComponent>

        <Box style={{marginTop: 30}}>
            <Title>
                {addEllipsis(item.title.longTitle)}
            </Title>
            <SmallText style={{display: 'flex', alignItems: 'center'}}>Seller:RetailNet
                <Box component='span'><Fassured src={fassured} alt="fassured"/></Box>
            </SmallText>
            <Typography style={{margin: '20px 0'}}>
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
            </Typography>
            <Remove onClick={()=> removeItemfromCart(item.id)}>Remove</Remove>
        </Box>
    </Component>
  )
}
export default CartItems
