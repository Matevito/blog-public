import { Link } from "react-router-dom"
import { Toolbar, Button, Typography} from "@mui/material";

const Header = ({ title }) => {

    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
            >
                <Link to="/" 
                    style={{ color: "inherit", textDecoration: 'none' }}
                >
                    {title}
                </Link>
            </Typography>
            <Button variant="outlined" size="small">
                <Link to="/about" 
                    style={{ color: "inherit", textDecoration: 'none' }}
                >
                    About
                </Link>
            </Button>
        </Toolbar>
        </>
    )
};

export default Header;