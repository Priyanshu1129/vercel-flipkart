import { AppBar, Toolbar, Box, Typography, IconButton , Drawer,List, ListItem,  styled} from "@mui/material";
import { Menu} from "@mui/icons-material";
import CustomButton from "./CustomButton";
import Search from "./Search";
import { Link } from 'react-router-dom'
import { useState } from "react";

const StyledHeader = styled(AppBar)(({theme})=>({
  background: '#2874f0',
  height: '80px',
  [theme.breakpoints.down('sm')]:{
    height: '70px'
  }  
}))


const Component = styled(Link)(({theme})=>({
  marginLeft: '14%',
  lineHeight: 0,
  [theme.breakpoints.down('sm')]:{
    marginLeft: '4%',
  }
}))

const PlusImg = styled("img")({
  width: 15,
  height: 15,
  marginLeft: 6
});
const Image = styled("img")(({theme})=>({
  width: '110px', 
  [theme.breakpoints.down('sm')]:{
    width: '83px'
  }
}))
const SubHeading = styled(Typography)(({theme})=>({
  fontStyle: 'italic',
  [theme.breakpoints.down('sm')]:{
    fontSize: '14px'
  }
}))

const CustomButtonWrapper = styled(Box)(({theme})=>({
  [theme.breakpoints.down('sm')]:{
    display: 'none'
  }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const ExplorePlus = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      
    }
}))


const Header = () => {

  const [ open , setOpen ] = useState(false)
  
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const handleClose = () => {
      setOpen(false);
    }
  
    const handleOpen = () => {
        setOpen(true);
    }
   
    const list = ()=>(
      <Box>
        <Typography style={{fontSize: 20, margin: '17px 30px', fontWeight: '500', fontFamily: 'inherit', color: '#2874f0'}}>Login</Typography>
        <Typography style={{fontSize: 20, margin: '17px 30px', fontWeight: '500', fontFamily: 'inherit', color: '#2874f0'}}>Become a Seller</Typography>
        <Typography style={{fontSize: 20, margin: '17px 30px', fontWeight: '500', fontFamily: 'inherit', color: '#2874f0'}}>More</Typography>
      </Box>
    )

    

  return (
    <StyledHeader style={{display: 'flex', justifyContent: 'center'}}>
        <Toolbar style={{minHeight: '80px' , padding: 0 }}>
      <MenuButton  color='inherit' onClick={handleOpen}>
        <Menu style={{fontSize: '30px'}} />
      </MenuButton>

      <Drawer open={open} onClose={handleClose} >
      <Box style={{ width: 220 , padding: '50px 0px' }} onClick={handleClose}>
        <List>
          <ListItem style={{padding: 0}}>
            {list()}
          </ListItem>
        </List>
      </Box>
      </Drawer>

      <Component to={`/`} style={{textDecoration: 'none' , color:'inherit'}}>
          <Image src={logoURL} alt=""  />
          <ExplorePlus>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImg src={subURL} alt="" />
          </ExplorePlus>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
