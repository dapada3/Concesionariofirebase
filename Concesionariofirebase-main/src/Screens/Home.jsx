import React from 'react';
import { View,  Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Button,Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Hyundai',
    imageUrl: require('../../Img/carro7.png'),
    price: '$19.99',
  },
  {
    id: 2,
    title: 'Suzuki',
    imageUrl: require('../../Img/carro8.png'),
    price: '$49.99',
  },
  {
    id: 3,
    title: 'Kia',
    imageUrl: require('../../Img/carro9.webp'),
    price: '$79.99',
  },
  {
    id:4,
    title:'Mazda',
    imageUrl: require('../../Img/carro10.jpg'),
    price:'$20.00',
  }
];

const FeaturedProductItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.featuredProduct} onPress={onPress}>
    <Image source={ item.imageUrl } style={styles.featuredProductImage} />
    <Text style={styles.featuredProductTitle}>{item.title}</Text>
    <Text style={styles.featuredProductPrice}>{item.price}</Text>
  </TouchableOpacity>
);

const Home = () => {
  const navigation = useNavigation(); 
  const handleProductPress = (product) => {
    console.log('Product pressed:', product);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://estaticos.elcolombiano.com/documents/10157/0/1004x565/112c0/780d565/none/11101/FICA/image_content_25061817_20160101220021.jpg' }} style={styles.banner} />
      <Text style={styles.featuredHeading}>Productos Destacados</Text>
      <FlatList
        data={MOCK_PRODUCTS.slice(0, 4)} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FeaturedProductItem item={item} onPress={() => handleProductPress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
     
        <Button mode="contained" onPress={() => navigation.navigate('Compras')} >Ver más</Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  featuredHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'darkgoldenrod',
    marginBottom: 10,
  },
  featuredProduct: {
    width: 150,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  featuredProductImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  featuredProductTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredProductPrice: {
    fontSize: 15,
    color:'#006400',
  },
  seeMoreButton: {
    marginTop: 7,
    padding: 7,
    alignItems: 'center',
  },
});

export default Home;
