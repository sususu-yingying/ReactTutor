import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  fullScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    maxHeight: 600,
    maxWidth: 935,
    width: '100%',
  },
  media: {
    width: '100%',
    paddingTop: '100%',
  },
  detail: {
    width: 335,
  }
});

class SinglePostPanel extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.fullScreen}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-LEAD-VERTICAL.jpg"
            title="Paella dish"
          />
          <CardContent className={classes.detail}>
            header
          </CardContent>
        </Card>
      </div>
    );
  }
}

SinglePostPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SinglePostPanel);
