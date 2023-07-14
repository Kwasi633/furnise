import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 30,
    backgroundColor: 'linen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  sqaure1: {
    width: 60,
    alignSelf: 'stretch',
    backgroundColor: 'green',
    flex: 1,
  },

  sqaure2: {
    width: 60,
    height: 60,
    alignSelf: ' center',
    backgroundColor: 'crimson',
    flex: 2,
  },

  sqaure3: {
    width: 60,
    height: 60,
    backgroundColor: 'midnightblue',
    alignSelf: 'flex-end',
    flex: 4,
  },

  sqaure4: {
    width: 60,
    height: 60,
    backgroundColor: 'coral',
    flex: 2,
  },
});

export default styles;
