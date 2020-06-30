import { makeStyles } from "@material-ui/core/styles";
import bg from "../../images/background9.png";

export default makeStyles(theme => ({
  daftarBlock: {
    backgroundImage: `url(${bg})`,
    width: "100%",
    height: 320,
    borderRadius: "0 0 100% 100%",
    position: "relative",
    "&;before": {
      content: '""',
      opacity: "-9",
      width: "100%",
      height: 320,
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: "0 0 100% 100%",
      zIndex: 1
    }
  },
  daftarBox: {
    position: "relative",
    height: "100%",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    flexFlow: "column nowrap"
  },
  logoBox: {
    width: 282,
    height: 69,
    margin: "30px auto 20px"
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none"
  }
}));
