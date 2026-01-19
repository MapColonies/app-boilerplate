import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { I18nProvider } from './i18n/I18nProvider';
import { theme } from './theme/theme';
import AppRoutes from './routes/AppRoutes';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const App: React.FC = () => {
  return (
    <I18nProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </I18nProvider>
  );
};

export default App;
