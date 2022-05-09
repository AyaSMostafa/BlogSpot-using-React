import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div  id='conCards' style={{display: "flex"}}>
        
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Health Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/virus_3d_render_blue_02_other/1800x1200_virus_3d_render_blue_02_other.jpg?resize=*:350px&output-quality=75"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Health from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          100 Best Health and Wellness Blogs <br></br>
          <a href='/ContentDetails.jsx' rel="noreferrer" target="_blank">Go</a>
          </Typography>
          </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Running Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i1.feedspot.com/200/323781.jpg?t=1603432053"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Running from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          100 Best Running Blogs <br></br>
          <a href='/ContentDetails' rel="noreferrer" target="_blank">Go</a>
          
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
 
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Superfood Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i1.feedspot.com/200/4795646.jpg?t=1609910210"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Superfood from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness.        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          20 Best Superfood Blogs and Websites <br></br>
          <a href='https://blog.feedspot.com/superfood_blogs/?_src=home' rel="noreferrer" target="_blank">Go</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Health Insurance Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i1.feedspot.com/200/4812347.jpg?t=1610611051"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Health Insurance from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness.        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          30 Best Health Insurance Blogs and Websites <br></br>
          <a href='https://blog.feedspot.com/health_insurance_blogs/?_src=home' rel="noreferrer" target="_blank">Go</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Superfood Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i1.feedspot.com/200/4795646.jpg?t=1609910210"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Superfood from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness.        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          20 Best Superfood Blogs and Websites <br></br>
          <a href='https://blog.feedspot.com/superfood_blogs/?_src=home' rel="noreferrer" target="_blank">Go</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Health Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/virus_3d_render_blue_02_other/1800x1200_virus_3d_render_blue_02_other.jpg?resize=*:350px&output-quality=75"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Health from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          100 Best Health and Wellness Blogs <br></br>
          <a href='https://blog.feedspot.com/healthy_living_blogs/?_src=home' rel="noreferrer" target="_blank">Go</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Running Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i1.feedspot.com/200/323781.jpg?t=1603432053"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Running from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          100 Best Running Blogs <br></br>
          <a href='https://blog.feedspot.com/running-blogs/?_src=home' rel="noreferrer" target="_blank">Go</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Health Insurance Blogs"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i1.feedspot.com/200/4812347.jpg?t=1610611051"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The best blogs about Health Insurance from thousands of blogs on the web ranked by traffic, social media followers, domain authority & freshness.        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          30 Best Health Insurance Blogs and Websites <br></br>
          <a href='https://blog.feedspot.com/health_insurance_blogs/?_src=home' rel="noreferrer" target="_blank">Go</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  );
}
