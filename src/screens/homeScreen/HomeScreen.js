import React, {useRef, useState,useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  // VirtualizedList,
  TouchableOpacity,
  Animated,
  Button,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Mytxt, SubmitBtn} from '../../constant/file';
import colors from '../../constant/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Flatlist from '../../components/flatList/FlatList';
import VaL from '../../components/vaL/ VaL';
import {SliderBox} from 'react-native-image-slider-box';
import Slides from '../../components/sliderData/SliderData';
import SlideItem from '../../components/sliderItem/SliderItem';
import Pagination from '../../components/pagination/Pagination';
import { data } from '../categoriesScreens/CategoriesScreens';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductsSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState();
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // //console.log('viewableItems', viewableItems);
    setIndex(viewableItems.index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 0,
  }).current;

 

  useEffect(() => {
    dispatch(addProducts(data));
    // getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp('92%'),
          height: wp('15'),
          // backgroundColor: 'red',
          justifyContent: 'center',
          borderBottomColor: colors.gray,
          borderBottomWidth: 1,
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Mytxt
            style={{
              fontFamily: 'Gilroy-SemiBold',
              color: 'black',
              fontWeight: '600',
              fontSize: hp('3.5%'),
            }}
            txt={'Luxury Fashion'}
          />
          <TouchableOpacity
            style={{justifyContent: 'center'}}
           >
            <AntDesign
              iconType={'AntDesign'}
              name="search1"
              size={26}
              color={colors.black}
              // onPress={() => navigation.goBack()}
              // onPress={onPress}
              // style={{marginRight: wp('2%')}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: hp('2%')}}>
          <Flatlist />
        </View>

        <View style={{height: hp('78'), alignItems: 'center'}}>
          <FlatList
            data={Slides}
            renderItem={({item}) => <SlideItem item={item} />}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />

          <Pagination data={Slides} scrollX={scrollX} index={index} />
        </View>

        <View>
         
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: hp('2%'),
              alignItems: 'center',
            }}>
            <Mytxt style={styles.textj} txt={'New Arrivals'} />
          
            <Pressable >
              <Mytxt style={{color: colors.black}} txt={'View all>>'} />
            </Pressable>
          </View>
          
          <View>
            <VaL navigation={navigation}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('3'),
    // width: wp('90%'),
    // flexDirection: 'column',
    // gap: 22,
    // backgroundColor: 'blue'
  },
  // image: {
  //   flex: 0.87,
  //   justifyContent: 'center',
  //   height: hp('50.5%')

  // },

  texta: {
    fontFamily: 'Gilroy-SemiBold',
    // color: 'black',
    color: colors.black,
    fontWeight: '600',
    fontSize: hp('2.25%'),
  },
  textb: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.grey,
  },

  textd: {
    fontFamily: 'Gilroy-Bold',
    fontSize: hp('5.5%'),
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  texte: {
    fontFamily: 'Gilroy-Bold',
    fontSize: hp('5.5%'),
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textf: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: hp('2.25%'),
    textAlign: 'center',
    color: colors.black,
  },
  textg: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  texth: {
    fontFamily: 'Gilroy-SemiBold',
    textAlign: 'center',
    color: colors.grey,
  },

  textj: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.black,
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
});

export default HomeScreen;
