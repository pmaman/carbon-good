import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

//import CustIcon from './CustIcon';
import CGIcon from '../Logo/hccas-01.png';
import GitIcon from '../Logo/github-mark.png';
import DiscIcon from '../Logo/icon_clyde_black_RGB.png';


const pages = ['about', 'solutions', 'resources', 'atlas'];
const settings = ['sett1', 'sett2'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
              sx={{
                  display:{xs:'flex', xs:'none', sm:'none', md:'block', lg:'block'}, mr:1,
                  backgroundImage: `url(${CGIcon})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100%',
                  width: '25px',
                  height: '45px'
              }}
          >
          </Box>
          <Box
            sx={{
              width:'20px',
              height:'20px',
            }}
          >
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/about"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CarbonGood
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration:'none', color: '#000000'}} to={`/${page}`}>{page}</Link>
                </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box
              sx={{
                  display:{xs:'flex', md:'none'}, mr:1,
                  backgroundImage: `url(${CGIcon})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100%',
                  width: '25px',
                  height: '45px'
              }}
          >
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/about"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CarbonGood
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration:'none', color: '#000'}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
              <Stack direction="row" spacing={2}>
                <Tooltip title="Link to CarbonGood Discord">
                < IconButton onClick={() => window.open('https://discord.gg/jBQhq5Xz')} sx={{ p: 0 }}>
                      <Box
                        sx={{
                            backgroundImage: `url(${DiscIcon})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            width: '25px',
                            height: '45px'
                        }}
                      >
                      </Box>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Link to CarbonGood Github">
                  <IconButton onClick={() => window.open('https://github.com/')} sx={{ p: 0 }}>
                      <Box
                        sx={{
                            backgroundImage: `url(${GitIcon})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            width: '25px',
                            height: '45px'
                        }}
                      >
                      </Box>
                    </IconButton>
                  </Tooltip>
              </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;