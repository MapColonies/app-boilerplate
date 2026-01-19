import React from 'react';
import { useIntl } from 'react-intl';
import { Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

const About: React.FC = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Paper className={classes.paper}>
      <Box mb={2}>
        <Typography variant="h4" gutterBottom>
          {intl.formatMessage({ id: 'about.title' })}
        </Typography>
      </Box>
      <Typography variant="body1">
        {intl.formatMessage({ id: 'about.description' })}
      </Typography>
    </Paper>
  );
};

export default About;
