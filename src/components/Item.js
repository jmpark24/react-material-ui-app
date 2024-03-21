import { Favorite, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';

const Item = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'red' }}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.frontoverflow.com/document/first-met-aws/images/chapter_01/cloud_computing.jpeg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla voluptate mollitia dolorem ea maiores quo
          ipsam est amet autem id nobis consequuntur animi cum debitis, possimus in ullam magnam corrupti placeat? Magni
          quidem, ex earum dignissimos minima aperiam, sequi aut minus repellendus dolorum accusantium recusandae, odio
          cumque. Distinctio voluptates odit dolores magni deserunt debitis deleniti dolorum facilis soluta temporibus
          doloremque veniam rerum aspernatur voluptas quod unde, corrupti, sunt quaerat vitae natus quos ea. Excepturi
          corrupti modi voluptatem optio possimus eveniet est ullam dolorum atque, dolore itaque soluta voluptatum
          officia unde magnam fugiat et hic corporis, eaque aspernatur repudiandae fugit.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
