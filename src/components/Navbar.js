import { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent : "space-between",
    },
    logoLong:{
        display: "none",
        [theme.breakpoints.up("sm")] : {
            display : "block",
        },
    },
    logoShort :{
        display: "block",
        [theme.breakpoints.up("sm")] : {
            display : "none",
        },
    },
    search :{
        display: "flex",
        alignItems: "center",
        justifyContent : "space-between",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width:  "50%",
        [theme.breakpoints.down("sm")] : {
            //display : "none",
            display : (props) => (props.open ? "flex" : "none"), // open true ike ngörünecek. sm den küçükken seach button una tıklandığında görünsün.
            width: "70%",
        },
        
    },
    searchLeft: {
        display: "flex",
        alignItems: "center",
    },
    input :{
        color:"white",
        // marginLeft: "25px",
        marginLeft: theme.spacing(2)
    },
    close :{
        [theme.breakpoints.up("sm")] : {
            display : "none",
        },
        
    },
    icons :{
        //display: "flex",
        alignItems: "center",
        display : (props) => (props.open ? "none" : "flex"), // 
    },
    badge :{
        marginRight : theme.spacing(2),
    },
    searchButton :{
        marginRight : theme.spacing(2),
        [theme.breakpoints.up("sm")] : { // sm den büyük ise seach button görünmeyecek
            display : "none",
        },
        
    },
  }));
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles({open});  // Mui de style içine any props u geçebiliriz.
    return (
        <AppBar position = "fixed">
            <Toolbar className={classes.toolbar}>
                {/* There is already an h1 in the page, let's not duplicate it. */}
                <Typography variant="h6" component="h1" className={classes.logoLong}>
                    Dastugo Tech.
                </Typography>
                <Typography variant="h6" component="h1" className={classes.logoShort}>
                    Dastugo
                </Typography>
            <div className={classes.search}>
                <div className = {classes.searchLeft}>
                    <SearchIcon/>
                    <InputBase placeholder="search ..." className={classes.input}/>
                </div>
                
                <CloseIcon className={classes.close} onClick={() => setOpen(false)}/>
            </div>

            <div className={classes.icons}>
                <SearchIcon className = {classes.searchButton} 
                    onClick={() => setOpen(true)}
                />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
                <MailIcon />
            </Badge>
            <Badge badgeContent={3} color="secondary" className={classes.badge}>
                <NotificationsIcon />
            </Badge>
            <Avatar alt="Cetin Ogut" src="images/user-avatar-boy-image.jpg" />
            
            </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
