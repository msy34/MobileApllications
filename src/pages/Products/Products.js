import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks';
const Products = () => {
  const {data, loading, error} = useFetch(Config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item}></ProductCard>;

  if (error) {
    return <Text>{error}</Text>;
  }
  if (loading) {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderProduct}
        numColumns={2}></FlatList>
    </View>
  );
};

export default Products;
