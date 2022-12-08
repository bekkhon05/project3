import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Intro', 'News', 'Gallary',  'CONTACT', "Columns"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <Box sx={{ display: 'flex', maxWidth: "100%" }}>
      <AppBar component="nav" sx={{
        background: "none",
        color: "#ffc800",
        height: "auto",
        padding: { lg: "6px 0px 6px 0px", md: "6px 0px 6px 0px", sm: "6px 0px 6px 0px", xs: "6px 0px 6px 0px" }
      }}> 
        <Toolbar sx={{
          width: { lg: "88%", md: "92%", sm: "92%", xs: "92%" },
          margin: { lg: "0% -8%", md: "0% 4%", sm: "0% 85%", xs: "0% 75%" }
        }} >
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display:{lg:"none",md:"none"},
              background: "none",
              color: "#fff",
              borderRadius: "0px",
              padding: "10px 19px",
              border:"1px solid #fff"
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{
            display: { xs: 'none', sm: 'none', md: "flex", lg: "flex" },
            width: { lg: "53%", md: "98%" },
            marginLeft: { lg: "34%", md: "12%" }
            
          }}>
            {navItems.map((item) => (
              <Button id="col1" key={item} sx={{
                color: '#fff',
                fontSize: {lg:"24px", md:"20px"},
                letterSpacing:"0.0625rem",
                marginRight: {lg:"15%", md:'5%'},
                cursor:"pointer",
                textAlign:"center",
                fontWeight:{lg:"200", md:"200"},
                fontFamily:'"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;