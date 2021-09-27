import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container : {
    paddingTop : theme.spacing(10),
  },
  }));
const Rightmenu = () => {
    const classes = useStyles();
    return (
      <Container className ={classes.container}>
           right bar 
      </Container>
    )
}

export default Rightmenu
