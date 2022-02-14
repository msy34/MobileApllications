import React from 'react';
import {SafeAreaView, Text, View,Image, TouchableOpacity} from 'react-native';
import useFetch from '../../hooks';
import styles from './Detail.style';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const {data, error, loading} = useFetch(Config.API_URL+'/'+id);
  console.log('detayyyyy2', data, '-', error, '-', loading,'-'+Config.API_URL+'/'+id);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }

  return (
      
    <View style={styles.container}>
        <View style={styles.bodyContainer}>
            
      <Text style={styles.title}>{data.title}</Text>
      <TouchableOpacity>
          
      </TouchableOpacity>
      <Image style={styles.image} source={{uri:data.image}}/>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.footerContainer}>
      <Text style={styles.price}>{data.price} TL</Text>
      <Text style={styles.category}>({(data.category)})</Text>
            
        </View>
        </View>
        
      
    </View>
  );
};

export default Detail;
