import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constant/colors';
const top = hp('4');
const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {                                                      
  const translateYImage = new Animated.Value(top);

  // Animated.timing(translateYImage, {
  //   toValue: 0,
  //   duration: 1000,
  //   useNativeDriver: true,
  //   easing: Easing.bounce,
  // }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {/* <Text style={styles.price}>{item.price}</Text> */}
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    // alignItems: 'center',
    // backgroundColor: 'blue',
  },
  image: {
    // width: wp('80%'),
    // flex:1,
    justifyContent: 'center',
    height: hp('55.5%'),
    alignSelf: 'center',
    // width:wp('80')
  },
  content: {
    // flex: 0.5,
    alignItems: 'center',
    // marginTop: hp('5%')
  },
  title: {
    // fontSize: 24,
    marginTop: hp('5%'),
    fontSize: hp('4%'),
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'Gilroy-SemiBold',
  },
  description: {
    fontSize: hp('2%'),
    marginTop: hp('1%'),
    color: colors.black,
    fontFamily: 'Gilroy-SemiBold',
  },
  // price: {
  //   fontSize: 32,
  //   fontWeight: 'bold',
  // },
});
