import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Leftmenu from "./components/Leftmenu";
import Rightmenu from "./components/Rightmenu";
import AddBlogItem from "./components/AddBlogItem";


const useStyles = makeStyles((theme) => ({
   right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar/>
       <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftmenu />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Blog />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightmenu />
        </Grid>
      </Grid>
      <AddBlogItem/>
    </div>
  );
};

export default App;
