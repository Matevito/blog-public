import { Box, Container,Typography, Link } from "@mui/material"

const title = "Disgraciones de un tirano"
const description = "Articulos sobre programación, desarrollo web, café o cualquier opinion literaria o filosofica que se me ocurra."

const Copyrigth = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
        {'A proyect developed by '}
        <Link color="inherit" href="https://github.com/Matevito">
        Matevito
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}


const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                >
                    {description}
                </Typography>
                <Copyrigth />
            </Container>
        </Box>
    )
}

export default Footer;