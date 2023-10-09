import { Toolbar, Divider, IconButton, Typography, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideDrawer from './SideDrawer';

const Header = () => {
  return (
    <>
      <Toolbar>
        <SideDrawer>
        <IconButton>
          <MenuIcon />
        </IconButton>

        </SideDrawer>

        <Typography sx={{ flexGrow: 1 }}>Gshon Place Blog</Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="warning">
            <AccountCircleIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar
        sx={{
          fontSize: 20,
          textTransform: 'uppercase',
          justifyContent: 'center',
          fontFamily: 'Montserrat',
        }}
      >
        Gshon Place
      </Toolbar>
    </>
  );
};

export default Header;
