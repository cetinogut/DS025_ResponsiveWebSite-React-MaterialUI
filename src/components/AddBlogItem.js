import { useState } from 'react' ;
import { Container, makeStyles, TextField, MenuItem, Snackbar, Button, Radio, FormLabel, FormControlLabel, RadioGroup } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    fab :{
      position : "fixed",
      bottom : "20px", // tırnak içinde yazıyorsan px kullan
      right : "20px",
    },
    container : {
      width : 500,
      height: 550,
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
    
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(2),
    },
  }));

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const AddBlogItem = () => {
  const [open, setOpen] = useState(false); // this is for open form
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false); // for aler message , in order to handle Close we need a open

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  
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
                  <div className={classes.item}>
                    <TextField id="blog-title" label="Blog Title" size="small" className={classes.item}  />
                  </div>
                  <div className={classes.item}>
                    <TextField 
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      defaultValue="Tell your story..."
                      variant="outlined"
                      label="Description" size="small" className={classes.item}  />
                  </div>
                  <div className = {classes.item} >
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Visibility"
                    value = "Public"
                    helperText ="Please select"
                    >
                      <MenuItem value = "Public">Public</MenuItem>
                      <MenuItem value = "Private">Private</MenuItem>
                      <MenuItem value = "Unlisted">Unlisted</MenuItem>
                    </TextField>
                  </div>

                  <div className= {classes.item}>
                    <FormLabel component="legend">Who can commont?</FormLabel>
                    <RadioGroup >
                      <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                      <FormControlLabel value="My friends" control={<Radio size="small" />} label="My friends" />
                      <FormControlLabel value="Nobody" control={<Radio size="small"/>} label="Nobody" />
                      <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom(Premium)" />
                    </RadioGroup>
                  </div>
                  <div className= {classes.item}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ marginRight: 20 }}
                      onClick={() => setOpenAlert(true)}
                    >
                      Create
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
               </form>
            </Container>
            
          </Modal>
          <Snackbar
            open={openAlert}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert onClose={handleClose} severity="success">
              This is a success message!
            </Alert>
      </Snackbar>
        </>
    )
}

export default AddBlogItem;
