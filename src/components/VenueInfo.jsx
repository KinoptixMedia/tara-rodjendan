import React from 'react';
import { Box, Typography, Paper, Link, Grid, Button } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const VenueInfo = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={fadeIn}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2" component="h3" sx={{ mb: 4 }}>
          Detalji rođendana
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                backgroundColor: 'background.paper',
                borderRadius: '15px',
                border: '1px solid rgba(183, 110, 121, 0.1)'
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                Restoran Pele
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Pozivam te da mi se pridružiš u proslavi mog 18. rođendana, koji će biti održan u resoranu Pele.
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Adresa:</strong>Brodarska 1, Beograd
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Telefon:</strong> +381 64 119 63 53
              </Typography>

              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                  <Link
                    href="https://www.instagram.com/pele.proslave"
                    target="_blank"
                    sx={{
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.dark' }
                    }}
                  >
                    <InstagramIcon /> Instagram
                  </Link>
                  <Link
                    href="https://www.facebook.com/pele.proslave"
                    target="_blank"
                    sx={{
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.dark' }
                    }}
                  >
                    <FacebookIcon /> Facebook
                  </Link>
                </Box>
                <Button
                  variant="contained"
                  startIcon={<LocationOnIcon />}
                  onClick={() => window.open('https://maps.google.com/?q=Brodarska+1,+Beograd', '_blank')}
                  sx={{ mt: 2 }}
                >
                  Open in Maps
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                height: '100%',
                minHeight: '400px',
                overflow: 'hidden',
                borderRadius: '15px',
                border: '1px solid rgba(183, 110, 121, 0.1)'
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22644.213015107507!2d20.444536!3d44.810835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6555dfe02439%3A0x7dc9a3b6b96eb79d!2z0J_QldCb0JUsINCf0YDQsNCy0Lgg0J_QvtGA0L7QtNC40YfQvdC4INCf0YDQvtGB0YLQvtGAINC30LAg0J_RgNC-0YHQu9Cw0LLQtQ!5e0!3m2!1sen!2sus!4v1743500271937!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
};

export default VenueInfo;