import { Container, makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container : {
        paddingTop : theme.spacing(10),
      },
      card: {
        maxWidth: 600,
        marginBottom : theme.spacing(5),
      },
      media: {
        height: 250,
        [theme.breakpoints.down("sm")] : {
            height: 150, // mobile device
          },
      },
  }));
const BlogItem = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            title="My Blog Post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My Post
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}

export default BlogItem;
