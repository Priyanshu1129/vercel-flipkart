import { navData } from "../../Constants/data";
import {Box, Typography} from '@mui/material'
import {styled} from "@mui/material";

const Component = styled(Box)(({theme})=>({

  display: 'flex',
  justifyContent: 'space-between' ,
  margin: '80px 130px 0 130px',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]:{
    margin: 0
  }
}))

const Image = styled('img')(({theme})=>({
  [theme.breakpoints.down('sm')]:{
    width: '55px'
  }
}))

const Container = styled(Box)(({theme})=>({
  padding: '16px 8px',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]:{
    padding: '16px 5px 0 5px'
  }
}))

const Text = styled(Typography)(({theme})=>({
  fontSize: '20px',
  fontWeight: '600',
  fontFamily: 'inherit',
  [theme.breakpoints.down('sm')]:{
    fontSize: '14px',
    fontWeight: '600'
  }
}))


const NavBar = () => {
 
  return (
   <Box style={{background: '#fff' }}>
       <Component>
      {navData.map((data) => (
        <Container>
          <Image src={data.url} alt="" />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
   </Box>
  );
};
export default NavBar;
