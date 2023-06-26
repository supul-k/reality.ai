import React , { useEffect } from 'react';
import { styled  } from '@mui/system';
import homeBackground from '../../assets/home_background.jpg';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Background1 = styled('div')({
  // position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  zIndex: -1,
  maxHeight: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const themeH1MiddleTypo = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          mr: 2,
          color: 'white',
          fontWeight: '700',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '100vh',
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
          fontWeight: '700',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '100vh',
        },
      },
    },
  },
});

const ServicesHome = () => {

  useEffect(() => {
    const landingSubtitle = document.getElementById('landing-subtitle');
    if (landingSubtitle) {
      landingSubtitle.classList.add('slide-up-animation');
    }
  }, []);

  return (
      <div style={{ top: '0'}}>
        <Background1 style={{ backgroundImage: `url(${homeBackground})`, height: '100vh' }}>
            <ThemeProvider theme={themeH1MiddleTypo}>
              <div>
                <Typography 
                  sx={{ 
                  display: {  xs: 'none', md: 'flex' }, 
                  fontSize: '72px',
                  flexGrow: 1,
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
                    id="landing-subtitle"
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
              </div>
          </ThemeProvider>

          <ThemeProvider theme={themeH1MiddleTypoSM}>
            <div>
              <Typography 
                sx={{ 
                fontSize: '56px',
                display: { xs: 'flex', md: 'none' }, 
                flexGrow: 1,
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
            </div>
          </ThemeProvider>
        </Background1>
      </div>
  );
};

export default ServicesHome;

