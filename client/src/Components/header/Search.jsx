import { Box, InputBase, ListItem, List, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from 'react-router-dom'


const SearchContainer = styled(Box)(({theme})=>({
  background: '#fff',
  marginLeft: '20px',
  borderRadius: '3px',
  width: '35%',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]:{
    display: 'none'
  }
}))

const Icons = styled(Box)(({theme})=>({
  display: 'none',
  [theme.breakpoints.down('sm')]:{
    display: 'block',
    color: '#fff',
    marginRight:'20px', 
    marginLeft: 'auto'
  }
}))


const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 25px;
  font-size: 20px;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding-right: 20px;
`;


const ListWrapper = styled(List)`
  background: #ffffff;
  position: fixed;
  top: 69px;
  width: 35%;
  color: #000;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  }
 
  return (
    <>
    <SearchContainer>
      
      <InputSearchBase
        placeholder="Search for products, brands and more"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon style={{ fontSize: "35px" }} />
      </SearchIconWrapper>  
      {
          text && text != '  ' && (
          <ListWrapper style={{padding: 0}}>
            {products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
                <ListItem style={{fontSize:21}}>
                  <Link
                  to={`/product/${product.id}`}
                  onClick={()=> setText('')}
                  style={{ textDecoration: 'none' , color:'inherit', margin: '10px 10px'}}
                  >
                  {product.title.longTitle}
                  </Link>
                  </ListItem>
              ))
            }
          </ListWrapper>
        )}
    </SearchContainer>

    <Icons>
      <SearchIcon style={{ fontSize: "30px", marginRight: '20px' }} />
      <ShoppingCart style={{ fontSize: "30px" }}/>
    </Icons>
    </>
  );
};
export default Search