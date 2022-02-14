import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks';
import axios from 'axios';
const Products = ({navigation}) => {
  const {data, loading, error} = useFetch('/v1/user/userinfo');
  //console.log(data);
 // const {data:data2, loading:loading2, error:error2} = useFetch(Config.apiGateway);
  console.log('detayyyyy2', data, '-', error, '-', loading);
  /*const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>onSelect(item.id)}></ProductCard>;

  if (error2) {
    return <Error/>;
  } 
  if (loading2) {
    return <Loading size="large"/>;
  }
  const onSelect=(id)=>{
    navigation.navigate("Detail",{id});
  }*/
  // const instance = axios.create({
  //   baseURL: url,
  //   timeout: 1000,
  //   headers: {'Authorization': 'Bearer '+Config.accessToken}
  // });

  // axios.post('http://10.0.1.14:8001/api/logout',request_data, {
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': 'Bearer '+token
  //         },      
  //     })   


// const token =Config.accessToken;
// const cookie=Config.cookie;  
// axios.get(Config.apiGateway+'/v1/user/userinfo' , { headers: {"Authorization" : 'Bearer ' +token,'Cookie':cookie} })
//   .then(res => {
//     console.log(res.data)})
// .catch((error) => {
//   console.log(error)
// });
  return (
    <View><Text>{Config.apiGateway+'/v1/user/userinfo'}</Text>
    </View>
  );
};

export default Products;
