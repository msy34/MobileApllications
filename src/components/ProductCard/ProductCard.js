import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product,onSelect}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
      <View style={styles.bodyContainer}>
        <Image style={styles.image} source={{uri: product.image}} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
