import React, { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Cesium from 'cesium';
import config from '../../config/config';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 'calc(100vh - 200px)',
    width: '100%',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const MapView: React.FC = () => {
  const classes = useStyles();
  const intl = useIntl();
  const cesiumContainer = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Cesium.Viewer | null>(null);

  useEffect(() => {
    if (!cesiumContainer.current) return;

    // Initialize Cesium Viewer
    const viewer = new Cesium.Viewer(cesiumContainer.current, {
      timeline: false,
      animation: false,
      baseLayerPicker: true,
      geocoder: true,
      homeButton: true,
      sceneModePicker: true,
      navigationHelpButton: true,
      fullscreenButton: true,
    });

    // Set initial camera position
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        config.map.center[0],
        config.map.center[1],
        10000000
      ),
    });

    viewerRef.current = viewer;

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          {intl.formatMessage({ id: 'map.title' })}
        </Typography>
      </Paper>
      <div className={classes.container}>
        <div ref={cesiumContainer} className={classes.mapContainer} />
      </div>
    </div>
  );
};

export default MapView;
