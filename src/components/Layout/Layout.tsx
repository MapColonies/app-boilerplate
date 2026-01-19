import React from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import { useI18n } from '../../i18n/I18nProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: theme.spacing(2),
  },
  main: {
    flexGrow: 1,
  },
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  const intl = useIntl();
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'he' : 'en');
  };

  return (
    <div className={classes.root} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {intl.formatMessage({ id: 'app.title' })}
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            className={classes.navButton}
          >
            {intl.formatMessage({ id: 'navigation.home' })}
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            className={classes.navButton}
          >
            {intl.formatMessage({ id: 'navigation.about' })}
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/map"
            className={classes.navButton}
          >
            {intl.formatMessage({ id: 'navigation.map' })}
          </Button>
          <IconButton color="inherit" onClick={toggleLanguage}>
            <LanguageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        <Box py={3}>{children}</Box>
      </Container>
    </div>
  );
};

export default Layout;
