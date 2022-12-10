import { useState, useEffect } from 'react';

import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 20px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)(({theme})=>({
    color: '#878787',
    fontSize: '22px',
    fontWeight:550,
    [theme.breakpoints.down('sm')]:{
        fontSize: '16px',
    }
}))


const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        
    }
`;

const Price = styled(Typography)(({theme})=> ({
    fontSize: 22,
    fontFamily: 'inherit',
    float: 'right',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]:{
        fontSize: 20,
        
    }
}))


const TotalAmount = styled(Typography)(({theme})=>({
    fontSize: 27,
    fontWeight: 600,
    borderTop: '1px dashed #e0e0e0',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px dashed #e0e0e0',
    fontFamily: 'inherit',
    [theme.breakpoints.down('sm')]:{
        fontSize: 22,
        fontWeight: 600
    }
}))



const Discount = styled(Typography)(({theme})=>({
    color: 'green',
    fontWeight: 600,
    fontSize: 25,
    fontFamily: 'inherit',
    [theme.breakpoints.down('sm')]:{
        fontSize: 18
    }
}))

const Text = styled(Typography)(({theme})=>({
     fontWeight: 500,
     fontSize: 22,
     fontFamily: 'inherit',
     [theme.breakpoints.down('sm')]:{
        fontSize: 20,
     }
}))


const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <Box>  
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Text>Price ({cartItems?.length} item)
                    <Price component="span">₹{price}</Price>
                </Text>
                <Text>Discount
                    <Price component="span" style={{color:'green'}}>- ₹{discount}</Price>
                </Text>
                <Text>Delivery Charges
                    <Price component="span">₹40</Price>
                </Text>
                <TotalAmount>Total Amount
                    <span>₹{price - discount + 40}</span>
                </TotalAmount>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalView;