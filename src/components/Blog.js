import { Container, makeStyles } from "@material-ui/core";
import BlogItem from "./BlogItem";

const useStyles = makeStyles((theme) => ({
    container : {
        paddingTop : theme.spacing(10),
      },
  }));
const Blog = () => {
    const classes = useStyles();
    return (
        <Container className ={classes.container}>
            <BlogItem/>
            <BlogItem/>

            <BlogItem/>
            <BlogItem/>
        </Container>
    )
}

export default Blog;
