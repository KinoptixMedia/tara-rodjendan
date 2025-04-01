import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const CountdownTimer = () => {
  const targetDate = new Date('2025-05-16T19:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  const TimeUnit = ({ value, label }) => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minWidth: '100px',
        backgroundColor: 'background.paper',
        borderRadius: '15px',
        textAlign: 'center',
        border: '1px solid rgba(183, 110, 121, 0.1)' // Rose gold border
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '2.5rem',
          color: 'primary.main',
          mb: 1
        }}
      >
        {String(value).padStart(2, '0')}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: 'primary.dark',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '0.8rem'
        }}
      >
        {label}
      </Typography>
    </Paper>
  );

  return (
    <animated.div style={fadeIn}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: 'background.paper',
          borderRadius: '15px',
          border: '1px solid rgba(183, 110, 121, 0.1)',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: 'primary.main',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '1.8rem'
          }}
        >
          Odbrojavanje do žurke:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap',
            my: 4
          }}
        >
          <TimeUnit value={timeLeft.days} label="Dana" />
          <TimeUnit value={timeLeft.hours} label="Sati" />
          <TimeUnit value={timeLeft.minutes} label="Minuta" />
          <TimeUnit value={timeLeft.seconds} label="Sekundi" />
        </Box>
      </Paper>
    </animated.div>
  );
};

export default CountdownTimer;