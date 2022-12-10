import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";


const Text = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginTop: "10px",
  fontWeight: 550,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 550,
  },
}));


const AvaiOffers = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  fontWeight: "600",
  margin: "25px 0 15px 0",
  [theme.breakpoints.down("sm")]: {
    marginTop: "35px",
    paddingLeft: "5px",
  },
}));

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 25px;
`;
const ColumnText = styled(TableRow)`
    vertical-align: baseline;
`;

const Cell = styled(TableCell)(({theme})=>({
    border: 'none',
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '16px',
    [theme.breakpoints.down('sm')]:{
    fontSize: '18px',
    fontWeight: '600'
    }
}))
const Image = styled("img")(({ theme }) => ({
  maxWidth: "500px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const DetailView = ({ product }) => {
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <AvaiOffers>Available offers</AvaiOffers>
      <Box style={{ padding: "0px 5px" }}>
        <Text>
          <StyledBadge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Text>
        <Text>
          <StyledBadge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Text>
        <Text>
          <StyledBadge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Text>
        <Text>
          <StyledBadge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Text>
      </Box>
      <Table style={{marginTop: '25px'}}>
        <TableBody>
          <ColumnText>
            <Cell style={{ color: "#878787"}}>
              Delivery
            </Cell>
            <Cell>
              Delivery by {date.toDateString()} | ₹40
            </Cell>
          </ColumnText>
          <ColumnText>
            <Cell style={{ color: "#878787"}}>
              Warranty
            </Cell>
            <Cell>No Warranty</Cell>
          </ColumnText>
          <ColumnText>
            <Cell style={{ color: "#878787" }}>
              Seller
            </Cell>
            <Cell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography style={{ fontSize: 20 }}>
                GST invoice available
              </Typography>
              <Typography style={{ fontSize: 20 }}>
                View more sellers starting from ₹329
              </Typography>
            </Cell>
          </ColumnText>
          <TableRow>
            <Cell colSpan={2}>
              <Image src={adURL} />
            </Cell>
          </TableRow>
          <ColumnText>
            <Cell style={{ color: "#878787"}}>
              Description
            </Cell>
            <Cell>{product.description}</Cell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default DetailView;
