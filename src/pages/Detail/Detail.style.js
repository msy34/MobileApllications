import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bodyContainer: {
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
  title: {color: 'black', fontWeight: 'bold', margin: 10},
  price: {
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'right',
    fontFamily: 'serif',
  },
  description: {color: 'black', margin: 10, fontFamily: 'serif'},
  category: {color: 'black', textAlign: 'right'},
  image: {width: width / 1.7, height: height / 3, borderRadius: 10},
  footerContainer: {alignSelf: 'flex-end'},
});
