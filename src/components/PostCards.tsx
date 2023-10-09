import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography } from '@mui/material';
interface Post {
    title: string;
    date: string;
    description: string;
    image: string;
  }
const PostCards = ({ post }: { post: Post }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: 'skyblue' }}>
                continue reading...
              </Typography>
            </CardContent>
          </div>
          <CardMedia sx={{ width: 160, height: 160 }} image={post.image} />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCards;
