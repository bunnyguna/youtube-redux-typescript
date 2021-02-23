import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { IVideoProps } from './typings';

function VideoPlayer(props: IVideoProps) {
  const { id = {}, snippet = {} } = props;

  if (!id.videoId) {
    return (
      <div className="empty-video">
        <Typography variant="h4">
          Enter search keyword to load video...
        </Typography>
      </div>
    );
  }

  const VIDEO_URL = `https://www.youtube.com/embed/${id.videoId}`;
  console.log({ VIDEO_URL });

  return (
    <div className="youtube-card">
      <Card>
        <CardMedia
          component="iframe"
          title="Video player"
          src={VIDEO_URL}
          width="600"
          height="400"
        />
      </Card>
      <Typography variant="h5">{snippet.title}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {snippet.description}
      </Typography>
    </div>
  );
}

export { VideoPlayer };
export default VideoPlayer;

