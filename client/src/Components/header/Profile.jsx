import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";

const Profile = ({ account , setAccount }) => {
const [open, setOpen] = useState(false);

    const Component = styled(Menu)`
        margin-top: 16px;
    `
    const Logout = styled(Typography)`
        margin-left: 15px;
        font-size: 22px;
    `
  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const logoutUser = ()=>{
    setAccount('')
  }

  

  return (
    <div>
      
      <Box onClick={handleClick}><Typography style={{marginTop: 4, fontSize: '22px', cursor:'pointer' }}>{account}</Typography></Box>
        <Component
            anchorEl={open}
            open={Boolean(open)}
            onClick={handleClose}
        >
        <MenuItem onClick={()=> {handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon color="primary" fontSize="large" />
            <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </div>
  );
};

export default Profile;
