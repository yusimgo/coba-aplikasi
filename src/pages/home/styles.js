import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background9.png";

export default makeStyles(theme => ({
  body: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#412B8E",
    padding: "20px"
  },
  bungkusUtama: {
    flexDirection: "column",
    width: "100%"
  },
  textHallo: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "white",
    paddingLeft: "10px"
  },
  textSelamatDatang: {
    color: "white",
    lineHeight: "100%",
    paddingLeft: "10px"
  },
  bungkusMenuSatu: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingTop: "12%"
  },
  menuSatu: {
    padding: "8px",
    alignItems: "center",
    width: "100%"
  },
  bungkusMenuDua: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  menuDua: {
    padding: "8px",
    alignItems: "center",
    width: "100%"
  },
  paper: {
    backgroundColor: "#7380F3",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    paddingBottom: "16px",
    borderRadius: "16px",
    width: "100%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
  },
  gambar: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    paddingBottom: "2px"
  },
  decoration: {
    textDecoration: "none",
    width: "50%"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: "14px"
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "20%",
    width: "70%"
  }
}));
