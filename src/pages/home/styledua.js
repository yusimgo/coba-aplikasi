import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background6.png";

export default makeStyles(theme => ({
  body: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: "black"
  },
  bungkusUtama: {
    backgroundImage: `url(${background})`,
    padding: "20px",
    width: "100%",
    height: "100vh",
    maxHeight: "100"
  },
  selamatDatang: {
    textAlign: "center",
    paddingBottom: "100px"
  },
  bungkusGridUtama: {
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  bungkusMenu: {
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    width: "10px"
  },
  bungkusMenuPaper: {
    paddingTop: "35px",
    paddingBottom: "35px"
  },
  gambar: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    alignContent: "center",
    justifyContent: "center"
  },

  title: {
    textAlign: "center",
    color: "black",
    marginBottom: 0
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none"
  },
  decoration: {
    textDecoration: "none",
    width: "50%"
  }
}));
