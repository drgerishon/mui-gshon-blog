import { Container, Typography, Link } from '@mui/material';
import { createTheme } from '@mui/material/styles';

interface FooterProps {
    title: string;
    description: string;
  }
const Footer = ({ title, description }: FooterProps) => {

    const theme = createTheme();

  return (
    <footer style={{backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0)}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography 
        variant='subtitle1'
        align='center'
        color ="textSecondary"
        component="p"
        >
            {description}
        </Typography>
        <Typography variant='body2' color="textSecondary" align="center">
            Copyright @ {""}
            <Link color="inherit" href="https://gerishonkungu@vercel.app">see developer</Link>
        {new Date().getFullYear()}.
        
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
