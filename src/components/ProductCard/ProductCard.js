import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  console.log(product);
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Image style={styles.image} source={{uri: product.image}} />
        <Text style={styles.title}>{product.title + 'DSA'}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </View>
  );
};

export default ProductCard;
