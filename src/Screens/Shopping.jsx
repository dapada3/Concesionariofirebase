import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Renault',
    imageUrl: require('../../Img/carro4.jpg'),
    price: '$19.99',
  },
  {
    id: 2,
    title: 'Toyota ',
    imageUrl: require('../../Img/carro5.webp'),
    price: '$49.99',
  },
  {
    id: 3,
    title: 'Nissan',
    imageUrl: require('../../Img/carro6.jpg'),
    price: '$79.99',
  },
];

const Shopping = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product.id]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((id) => id !== productId));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Image source={ item.imageUrl } style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <View style={styles.productActions}>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
              <Text style={styles.addToCartButtonText}>Añadir al carrito</Text>
            </TouchableOpacity>
            {cart.includes(item.id) && (
              <TouchableOpacity style={styles.removeFromCartButton} onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeFromCartButtonText}>Eliminar del carrito</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Compras</Text>
      <FlatList
        data={MOCK_PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 90,
    height: 50,
    marginRight: 15,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#f00',
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartButton: {
    padding: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginRight: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  removeFromCartButton: {
    padding: 5,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
  removeFromCartButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Shopping;