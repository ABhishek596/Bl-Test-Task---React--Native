import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constant/colors';

const carBrands = [
  {
    id: 1,
    name: 'New in',
    img: require('../../../assets/images/Apple.jpg'),
    page:'HomeCategories',
  },
  {
    id: 2,
    name: 'Men',
    img: require('../../../assets/images/imgk.jpeg'),
    page:'CategoriesScreen',
  },
  {
    id: 3,
    name: 'Women',
    img: require('../../../assets/images/Apple.jpg'),
    page:'',
  },
  {
    id: 4,
    name: 'Season',
    img: require('../../../assets/images/imgk.jpeg'),
    page:'',
  },
  {
    id: 5,
    name: 'Customize',
    img: require('../../../assets/images/imgv.jpeg'),
    page:'',
  },
  {
    id: 6,
    name: 'Couple Match',
    img: require('../../../assets/images/imgk.jpeg'),
    page:'',
  },
  {
    id: 7,
    name: 'Accessories',
    img: require('../../../assets/images/pexels.webp'),
    page:'',
  },
  {
    id: 8,
    name: 'Brand',
    img: require('../../../assets/images/sav.jpeg'),
    page:'',
  },
  {
    id: 9,
    name: 'Clothing',
    img: require('../../../assets/images/imgk.jpeg'),
    page:'',
  },
  {
    id: 10,
    name: 'Shoes',
    img: require('../../../assets/images/pexels.webp'),
    page:'',
  },
];

const FlatListExample = ({ onTouch }) => {

  const ItemView = ({item}) => {
    // const translateYImage = new Animated.Value(40);
    return (
      <View>
        <View style={styles.cardContainer}>
          {/* <Image
              // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
              source={carBrands.img}
              style={styles.cardContainer}
              
            /> */}
          <TouchableOpacity 
          // onPress={() => onTouch(item.page)}
          >
            <Animated.Image
              source={item.img}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  };
  
  // const ontouch = () => navigation.navigate(item.page);
  return (
    <FlatList
      data={carBrands}
      renderItem={ItemView} 
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    width: 55,
    height: 55,
    borderRadius: 75,
    justifyContent: 'center',
    // marginVertical: 8,
    marginHorizontal: wp('3'),
    // padding: 20,
  },
  name: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    fontFamily: 'Merriweather-BlackItalic',
    color: colors.black,
    fontSize: hp('1.5%'),
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 75,
    color: colors.black,
    borderwith: 1,
    backgroundColor: '#dcdcdc',
  },
});

export default FlatListExample;
