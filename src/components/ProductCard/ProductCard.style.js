import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    height: windowHeight / 2,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    textAlign: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ECF0F1',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    margin: 5,
    width: windowWidth / 3,
    height: windowHeight / 5,
    borderRadius: 10,
  },
  title: {padding: 10, color: 'black', fontSize: 14, fontWeight: 'bold'},
  price: {padding: 15, fontSize: 20, fontFamily: 'serif', color: '#34495E'},
});
