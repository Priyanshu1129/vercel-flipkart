import { useState, useContext } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { DataContext } from "../../Context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  font-size: 20px;
  font-weight: 600;
  &:hover{
    background-color: #a9a9a9;
}

`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  font-size: 20px;
  font-weight: 600;
  &:hover{
    background-color: #a9a9a9;
}
`;

const Text = styled(Typography)`
  margin-top: 50px;
  color: #878787;
`;
const InputText = styled(TextField)`
`;

const Error = styled(Typography)`
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-size: 20px;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 35%;
  height: 83%%;
  padding: 45px 35px;
  & > p,
  & > h3 {
    color: #ffffff;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

const accountInitialsValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialsValues.login);
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialsValues.login);
    setAccount(signup.firstname);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialsValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
  };

  const loginUser = async () => {
    const response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h3">{account.heading}</Typography>
            <Typography style={{ marginTop: 20, fontSize: "27px" }}>
              {account.subHeading}
            </Typography>
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <InputText
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                margin="normal"
                label="Enter Email/Mobile Number"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              {error && <Error>please enter valid credentials!</Error>}
              <InputText
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                margin="normal"
                label="Enter Password"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center", fontSize: "20px" }}>
                {" "}
                OR
              </Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>
                New to Flipkart ? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <InputText
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                size="40px"
                label="Enter Firstname"
                margin="normal"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <InputText
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
                margin="normal"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <InputText
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
                margin="normal"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <InputText
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
                margin="normal"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <InputText
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                margin="normal"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <InputText
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
                margin="normal"
                inputProps={{style: {fontSize: 25}}} 
                InputLabelProps={{style: {fontSize: 20 , fontWeight: '600'}}}
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

{/* <TextField
  hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
/>; */}

export default LoginDialog;
