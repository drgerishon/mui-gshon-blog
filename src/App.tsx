import { Container } from '@mui/material';
import Header from './components/Header';
import { Grid } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts, sidebar, mainFeaturedPost} from './data/data'
import PostCards from './components/PostCards';
import "./App.css"
import MainPost from './components/MainPost';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
       <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCards key={post.title} post={post}/>
          ))}
       </Grid>
       <Grid container spacing={5}>
            <MainPost title="Main Posts Learning"/>
            <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
            />
       </Grid>
      </Container>
      <Footer title="Footer" description="welcome to gshonplace programming blog" />
    </ThemeProvider>
  );
}

export default App;
