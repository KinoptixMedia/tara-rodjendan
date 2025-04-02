import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/playfair-display';
import '@fontsource/montserrat';
import { Container, Box, Typography, TextField, Button, Snackbar } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import theme from './theme';
import CountdownTimer from './components/CountdownTimer';
import VenueInfo from './components/VenueInfo';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        attending: '',
        guests: 'Samo ja',
        guestNames: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    React.useEffect(() => {
        document.body.style.background = 'linear-gradient(135deg, #FDF6F6 0%, #F7CAC9 100%)';
        return () => {
            document.body.style.background = '';
        };
    }, []);

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const guestCount = formData.guests === 'Samo ja' ? '0' : formData.guests.replace('+', '');
        const formPayload = {
            firstName: formData.name,
            lastName: formData.surname,
            attending: formData.attending === 'yes' ? 'Da' : 'Ne',
            guestCount: guestCount,
            guestsInfo: formData.guestNames,
            message: formData.message
        };

        console.log('Sending form data:', formPayload);

        try {
            // Use no-cors mode which doesn't trigger CORS errors but gives limited response access
            const response = await fetch('https://script.google.com/macros/s/AKfycbyIHk36iVaMf2KARbBALDdNmUp63T1bhFTk7amAFz-EJj9SAKfmInb1PKAWna9NcvJavg/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formPayload)
            });

            console.log('Response type:', response.type);
            console.log('Response status:', response.status || 'No status available in no-cors mode');
            
            // In no-cors mode, we can't actually read the response data or status
            // Since the data is successfully reaching the sheet, we'll assume success
            setSnackbarMessage('Hvala Vam što ste potvrdili prisustvo!');
            setSnackbarSeverity('success');
            setFormData({
                name: '',
                surname: '',
                attending: '',
                guests: 'Samo ja',
                guestNames: '',
                message: ''
            });
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Error during fetch:', error);
            setSnackbarMessage('Došlo je do greške pri slanju podataka. Molimo pokušajte ponovo.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <animated.div style={fadeIn}>
                    <Box
                        sx={{
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            py: 8,
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{
                            textAlign: 'center',
                            background: 'linear-gradient(45deg, #8E4E57 30%, #B76E79 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            Tarin 18. rođendan
                        </Typography>

                        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                            Pozivam te da zajedno proslavimo moj 18. rođendan!
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                                U Petak, 16. Maja 2025. godine u 19:00 časova
                            </Typography>
                        </Box>

                        <CountdownTimer />
                        <VenueInfo />

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                p: 4,
                                backgroundColor: 'white',
                                borderRadius: 2,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            }}
                        >
                            <Typography variant="h2" component="h2">
                                Potvrda prisutnosti
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
                                Molimo vas da nas obavestite da li ćete prisustvovati proslavi!
                            </Typography>

                            <TextField
                                required
                                fullWidth
                                label="Ime"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                fullWidth
                                label="Prezime"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                select
                                fullWidth
                                label="Da li dolazite?"
                                name="attending"
                                value={formData.attending}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value=""></option>
                                <option value="yes">Da, doći ću!</option>
                                <option value="no">Nažalost, ne mogu</option>
                            </TextField>

                            {formData.attending === 'yes' && (
                                <>
                                    <TextField
                                        required
                                        select
                                        fullWidth
                                        label="Broj gostiju koji dolaze sa vama"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="Samo ja">Samo ja</option>
                                        <option value="+1">+1 gost</option>
                                        <option value="+2">+2 gosta</option>
                                        <option value="+3">+3 gosta</option>
                                        <option value="+4">+4 gosta</option>
                                        <option value="+5">+5 gostiju</option>
                                        <option value="+6">+6 gostiju</option>
                                        <option value="+7">+7 gostiju</option>
                                    </TextField>

                                    {formData.guests !== 'Samo ja' && (
                                        <TextField
                                            required
                                            fullWidth
                                            multiline
                                            rows={3}
                                            label="Imena i prezimena gostiju"
                                            name="guestNames"
                                            value={formData.guestNames}
                                            onChange={handleChange}
                                            helperText="Unesite imena i prezimena svih gostiju koji dolaze sa vama"
                                        />
                                    )}
                                </>
                            )}

                            <TextField
                                fullWidth
                                label="Message (Optional)"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={isSubmitting}
                                sx={{
                                    mt: 2,
                                    backgroundColor: theme.palette.primary.main,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark,
                                    }
                                }}
                            >
                                {isSubmitting ? 'Slanje...' : 'Pošalji odgovor'}
                            </Button>
                        </Box>
                    </Box>
                </animated.div>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                    message={snackbarMessage}
                    ContentProps={{
                        sx: {
                            backgroundColor: snackbarSeverity === 'success' ? '#4caf50' : '#f44336'
                        }
                    }}
                />
            </Container>
        </ThemeProvider>
    );
}

export default App;
