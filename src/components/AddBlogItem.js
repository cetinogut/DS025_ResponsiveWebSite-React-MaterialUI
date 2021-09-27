import { useState } from 'react' ;
import { Container, makeStyles, TextField } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    fab :{
      position : "fixed",
      bottom : "20px", // tırnak içinde yazıyorsan px kullan
      right : "20px",
    },
    container : {
      width : 500,
      height: 520,
      backgroundColor : "wheat",
      position : "absolute",
      top : 0,
      bottom : 0,
      left : 0,
      right :0,
      margin : "auto",
      [theme.breakpoints.down("sm")] : {
        width: "100vw",
        height : "100vh",
      }
    },
    blogTitle :{
      width : "100%",
    },
  }));
const AddBlogItem = () => {
  const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        < >
          <Tooltip title="Add a new blog post" aria-label="add" onClick = {() => setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <PostAddIcon />
            </Fab>
          </Tooltip>
          <Modal
            open={open}
            //onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Container className = {classes.container}>
               <form className={classes.form} autoComplete = "off">
                  <div className={classes.blogItem}>
                    <TextField id="blog-title" label="Blog Title" size="small" className={classes.blogTitle}  />
                  </div>
               </form>
            </Container>
            
          </Modal>
        </>
    )
}

export default AddBlogItem;
