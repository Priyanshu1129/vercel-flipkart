import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import { Fragment } from 'react'
import {styled, Box } from '@mui/material'
import { getProducts } from '../../redux/actions/productActions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = ()=>{

    const dispatch = useDispatch()
    const {products}  = useSelector( state => state.productReducer)
    const Container = styled(Box)`
        padding: 20px 10px;
        background: #F2F2F2;
    `

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
    

    return (
        <Fragment>
            <NavBar/>
            <Container>
                <Banner />
                <MidSlide 
                    products={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true}
                />

                <MidSection />

                <Slide
                    products={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    products={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    products={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    products={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Container>
        </Fragment>
    )
}

export default Home;