import { Paper, Typography, Link, Grid } from "@mui/material"
import { createTheme } from '@mui/material/styles';


const Sidebar = ({archives, description, social, title}) => {

    const theme = createTheme();

    return (
    <Grid item xs={12} md={4}>
        <Paper sx={{padding: theme.spacing(2)}}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography>{description}</Typography>
        </Paper>
        <Typography variant="h6"
         gutterBottom>
            Archives
        </Typography>
        {archives.map((archive) => (
            <Link 
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
            >
                {archive.title}
            </Link>
        ))}
        <Typography variant="h6" gutterBottom sx={{marginTop: theme.spacing(3)}}> 
            Social
        </Typography>
        {social.map((network) => (
            <Link display="block" variant="body1" href="#" key={network.name}>
                <Grid container direction="row" spacing={1} alignItems="center">
                    <Grid item>
                        <network.icon />
                    </Grid>
                    <Grid item>{network.name}</Grid>
                </Grid>
            </Link>
        ))}
    </Grid>
  )
}

export default Sidebar