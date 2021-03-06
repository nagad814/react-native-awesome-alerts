import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import config from '../../config';

const styles = StyleSheet.create({
  container: {
    paddingTop: config.spacing.titlePadding,
    paddingBottom: config.spacing.titlePadding,
    paddingLeft: config.spacing.titlePaddingSides,
    paddingRight: config.spacing.titlePaddingSides,
  },
  text: {
    color: config.colors.title,
    fontSize: config.size.title
  }
});

export default styles;
