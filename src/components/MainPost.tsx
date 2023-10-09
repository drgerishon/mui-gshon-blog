import { Grid, Typography, Divider} from '@mui/material'
import Markdown from 'markdown-to-jsx'
import { posts } from '../data/data'
interface Title {
  title: string;
}
const MainPost = ({title}: Title) => {
  return (
    <Grid item xs={12} md={8}>
        <Typography variant='h5' gutterBottom>
            {title}
        </Typography>
        <Divider />
        {posts.map((post) => (
            <Markdown key={post.body}>{post.body}</Markdown>
        ))}
    </Grid>
  )
}

export default MainPost