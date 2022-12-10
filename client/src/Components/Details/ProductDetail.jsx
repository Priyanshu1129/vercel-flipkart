import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import {
  Box,
  Typography,
  Grid,
  styled,
  autocompleteClasses,
} from "@mui/material";
import ActionItems from "./ActionItems";
import DetailView from "./DetailView";

const Component = styled(Box)`
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

const RightContainer = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  [theme.breakpoints.down("md")]: {
    margin: "50px auto",
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    fontWeight: "600",
  },
}));
const RandR = styled(Typography)(({ theme }) => ({
  margin: '10px 0px',
  color: "#878787",
  fontSize: 20,
  fontWeight: "550",
  verticalAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));
const FassuredImg = styled("img")(({ theme }) => ({
  width: 120,
  marginLeft: 20,
  [theme.breakpoints.down("sm")]: {
    width: 90,
  },
}));
const Cost = styled("span")(({ theme }) => ({
  fontSize: 45,
  [theme.breakpoints.down('sm')]:{
    fontSize: 25
  }
}));
const Mrp = styled("span")(({ theme }) => ({
  color: "#878787",
  fontSize: 25,
  fontWeight: "550",
  [theme.breakpoints.down('sm')]:{
    fontSize: 18
  }

}));
const Discount = styled("span")(({ theme }) => ({
  color: "#388E3C",
  fontSize: 25,
  fontWeight: "550",
  [theme.breakpoints.down('sm')]:{
    fontSize: 18
  }
}));

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { product, loading } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch]);

  return (
    <Component>
      {loading ? (
        <Box>Loading</Box>
      ) : (
        product &&
        Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={6} sm={6} xs={11}>
              <ActionItems product={product} />
            </Grid>

            <RightContainer item lg={8} md={6} sm={6} xs={11}>
              <MainHeading>{product.title.longTitle}</MainHeading>
              <RandR style={{ display: "flex" }}>
                8 Ratings & 1 Reviews
                <span>
                  <FassuredImg src={fassured} />
                </span>
              </RandR>
              <Typography>
                <Cost>₹{product.price.cost}</Cost>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Mrp>
                  <strike>₹{product.price.mrp}</strike>
                </Mrp>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Discount>{product.price.discount} off</Discount>
              </Typography>
              <DetailView product={product} />
            </RightContainer>
          </Container>
        )
      )}
    </Component>
  );
};

export default ProductDetail;
