import { Container, makeStyles, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsIcon from '@material-ui/icons/Collections';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
  container : {
    height: "100vh",
    paddingTop : theme.spacing(10),
    backgroundColor : theme.palette.primary.main,
    color: "white",
    [theme.breakpoints.up("sm")] : {
      backgroundColor :"white", // white on desktop
      color :"#555",
      border : "1px solid #999",
    },
    position : "sticky",
    top : "0",

  },
  menuItem : {
    display:  "flex",
    alignItems : "center",
    marginBottom : theme.spacing(4), // `${8 * 3}px` = '24px' // mobile devices
    [theme.breakpoints.up("sm")] : {
      marginBottom : theme.spacing(3), // desktop-tablet
      cursor: "pointer",
    },
  },
  icon : {
    marginRight : theme.spacing(1),
    [theme.breakpoints.up("sm")] : {
      fontsize : "18px",
    },
  },
  text : {
    fontWeight : "500",
    [theme.breakpoints.down("sm")] : {
      display: "none", // no text on mobile
    }
  },
  }));
const Leftmenu = () => {
    const classes = useStyles();
    return (
        <Container className ={classes.container}>
            <div className = {classes.menuItem}>
              <HomeIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Homepage
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <PeopleIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Friends
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <FormatListBulletedIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Lists
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <CameraAltIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Camera
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <PlayCircleFilledIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Videos
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <AppsIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Apps
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <CollectionsIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Collections
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <StoreIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Market Place
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <SettingsIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Settings
              </Typography>
            </div>
            <div className = {classes.menuItem}>
              <ExitToAppIcon className = {classes.icon}/>
              <Typography className = {classes.text}>
                Logout
              </Typography>
            </div>
        </Container>
    )
}

export default Leftmenu
