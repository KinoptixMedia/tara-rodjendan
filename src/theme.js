import { createTheme } from '@mui/material';
import '@fontsource/playfair-display';
import '@fontsource/montserrat';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B76E79', // Rose gold
      light: '#E8C1C5',
      dark: '#8E4E57',
    },
    secondary: {
      main: '#F7CAC9', // Soft pink
      light: '#FDE2E4',
      dark: '#D4A5A5',
    },
    background: {
      default: '#FDF6F6',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#8E4E57',
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 600,
      color: '#B76E79',
      marginBottom: '1.5rem',
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.1rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          padding: '10px 30px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '15px',
            '&:hover fieldset': {
              borderColor: '#B76E79',
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            color: '#8E4E57',
          },
        },
        h1: {
          '&:hover': {
            background: 'linear-gradient(45deg, #B76E79 30%, #8E4E57 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
      },
    },
  },
});

export default theme;