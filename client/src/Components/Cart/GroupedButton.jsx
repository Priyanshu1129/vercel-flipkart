import { Button , ButtonGroup , styled } from '@mui/material'


const Component = styled(ButtonGroup)(({theme})=>({
  marginTop: '35px',
  [theme.breakpoints.down('sm')]:{
    marginTop: '25px',
    marginBottom: '25px'
  }
}))
    
const StyledButton = styled(Button)(({theme})=>({
  borderRadius: '50%',
  fonSize: '30px',
  [theme.breakpoints.down('sm')]:{
    fontSize: '10px'
  }
}))


const GroupedButton = () => {
 
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton disabled >1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>
  )
}

export default GroupedButton
