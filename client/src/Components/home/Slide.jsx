import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider, Box, Typography, Button, styled } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Image = styled("img")(({theme})=>({
  height: 200,
  width: "auto",
  marginBottom: "5px",
  [theme.breakpoints.down('sm')]:{
    height: 100,
    marginBottom: '20px'
  }
}))

const Text = styled(Typography)(({theme})=>({
  fontSize: '22px',
  marginTop: '5px',
  [theme.breakpoints.down('sm')]:{
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '3px'
  }
}))

const Deal = styled(Box)`
  display: flex;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
`;
const DealText = styled(Typography)(({theme})=>({
  fontSize: '30px',
  lineHeight: '32px',
  marginRight: '25px',
  [theme.breakpoints.down('sm')]:{
    fontWeight: '600',
    fontSize: '17px'
  }
}))

const ViewAllButton = styled(Button)(({theme})=>({
  marginLeft: 'auto',
  padding: '10px 25px',
  fontFamily: 'inherit',
  backgroundColor: '#2874f0',
  borderRadius: '3px',
  fontSize: '18px',
  fontWeight: '600',
  [theme.breakpoints.down('sm')]:{
    fontWeight: '500',
    fontSize: '14px',
    padding: '10px 15px'
  }
}))


const Timer = styled(Box)(({theme})=>({
  color: '#7f7f7f',
  marginLeft: '10px',
  display: 'flex',
  fontSize: '22px',
  fontWeight: '600',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]:{
    display: 'none'
  }
}))



const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              style={{ width: 30, marginRight: 5 }}
              alt="time clock"
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".9" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
