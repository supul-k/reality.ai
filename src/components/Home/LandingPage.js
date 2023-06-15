import React from 'react';
import Navbar from './Navbar';
import { styled  } from '@mui/system';
import homeBackground from '../../assets/home_background.jpg';
// import homeBackground2 from '../../assets/home_background2.jpg';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'


const Background1 = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: -1,
  maxHeight: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
});

// const Background2 = styled('div')({
//   position: 'fixed',
//   top: '101vh',
//   left: 0,
//   width: '100%',
//   maxHeight: '100vh',
//   zIndex: -1,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundAttachment: 'fixed',
// });

const themeH1MiddleTypo = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          mr: 2,
          color: 'white',
          alignItems: 'flexStart',
          justifyContent: 'center',
          height: 'auto',
          fontWeight: '700'
        },
      },
    },
  },
});

const themeH1MiddleTypoSM = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          mr: 2,
          color: 'white',
          alignItems: 'flexStart',
          justifyContent: 'center',
          fontWeight: '700'
        },
      },
    },
  },
});


const LandingPage = () => {
    return (
        <div>
        <Container>
            <Background1 style={{ backgroundImage: `url(${homeBackground})`, height: '100vh' }}>
                <Navbar />
                <ThemeProvider theme={themeH1MiddleTypo}>
                <Typography 
                    sx={{ 
                    display: {  xs: 'none', md: 'flex' }, 
                    fontSize: '72px',
                    flexGrow: 1, 
                    marginTop: '150px',
                    textAlign: 'center',
                    }}
                >
                    BEYOND THE REALITY
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    display: {  xs: 'none', md: 'flex' }, 
                    fontSize: '48px',
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    color: 'white',
                    }}
                >
                    <span style={{ color: 'cyan' }}>the</span>Reality
                    <span style={{ color: 'cyan' }}>.</span>ai
                </Typography>
                </ThemeProvider>

                <ThemeProvider theme={themeH1MiddleTypoSM}>
                <Typography 
                    sx={{ 
                    fontSize: '56px',
                    display: { xs: 'flex', md: 'none' }, 
                    flexGrow: 1,
                    marginTop: '150px',
                    height: 'auto',
                    textAlign: 'center',
                    }}
                >
                    BEYOND THE REALITY
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    display: { xs: 'flex', md: 'none' }, 
                    fontSize: '32px',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    color: 'white',
                    }}
                >
                    <span style={{ color: 'cyan' }}>the</span>Reality
                    <span style={{ color: 'cyan' }}>.</span>ai
                </Typography>
                </ThemeProvider>
            </Background1>
        </Container> 
        </div>
    );
};

export default LandingPage;