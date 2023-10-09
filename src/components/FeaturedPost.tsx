import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
const FeaturedPost = () => {

    const theme = createTheme({
        palette: {
          text:{
            primary: "#FFFFFF"
          }
        },
      });
  return (
    
    <ThemeProvider theme={theme}>
    <Card sx={{
        backgroundImage: `url(https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
        backgroundPosition: "center",
        padding: "35px 25px"
    }}>
      <CardContent>
        <Typography gutterBottom sx={{fontFamily: "Monserrat", fontSize: 40}} color="textPrimary">
          This blog post is for sharing programming knowlegde and skill that i
          have acquired over time and material on web development.
        </Typography>
        <Typography variant="h6">
          Lean Various programming skills such as next js, node js, react js,
          material ui, data fetching and so on
        </Typography>
       
      </CardContent>
      <CardActions>
          <Button variant="outlined" sx={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}>Learn More...</Button>
        </CardActions>
    </Card>
    
</ThemeProvider>
  );
};

export default FeaturedPost;
