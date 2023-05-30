import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Header = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  const [scrollUp, setScrollUp] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollUp(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainHeader = (
    <Toolbar
      style={{
        marginTop: 10,
        // Add marginInline style here
        borderRadius: 10,
        // marginInline: 30,
        backgroundColor: scrollUp ? 'rgb(240,248,255)' : 'transparent',
        zIndex: scrollUp ? -1 : 'auto',
        
      }}
      sx={{ marginInline: 5}}
    >
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 } }}
      >
        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </IconButton>
      <HeaderContent />
    </Toolbar>
  );

  const appBar = {
    position: 'fixed',
    color: 'transparent',
    backgroundColor: 'transparent',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      borderRadius: 20,
    },
  };

  const contentStyle = {
    position: 'relative',
    zIndex: scrollUp ? -1 : 'auto',
    paddingTop: scrollUp ? '80px' : '0px',
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {/* <Box sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}> */}
            {mainHeader}
          {/* </Box> */}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>
          {/* <Box sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}> */}
            {mainHeader}
          {/* </Box> */}
        </AppBar>
      )}
      <div style={contentStyle}>{/* Content goes here */}</div>
    </>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};

export default Header;
