import React, {useState} from 'react';
import {
  Image,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import Icons from '../../components/icons/Icons';
import colors from '../../constant/colors';
import {SubmitBtn, Mytxt} from '../../constant/file';
import {addItemToCart} from '../../redux/action/Actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation, useRoute} from '@react-navigation/native';
import {addItemToWishList} from '../../redux/slices/WishlistSlice';

const Products = props => {
  const {navigation, route} = props;
  const data = route?.params?.data;
  const [productData, setProductList] = useState(data);
  //console.log('pppppppppppppppppppppppppppppp',JSON.stringify(productData));

  const dispatch = useDispatch();

  // const addItem = item => {
  //   dispatch(addItemToCart(item));
  // };

  // const addItem = item => {
  //   const index = productData.findIndex(
  //     product => product.title === item.title,
  //   );
  //   //console.log('Dispatching item with index:', index);
  //   dispatch(addItemToCart(item));
  // };

  const items = useSelector(state => state);
  //console.log('idididididirtrtrtrtrtrtrtrtrtrtrtrttr', JSON.stringify(items));

  const onWhisList = item => {

    const upd_obj = productData.map(val => {
      if (val.title == item.title && val.whishlist == false) {
        val.whishlist = true;
      } else if (val.title == item.title && val.whishlist == true) {
        val.whishlist = false;
      }
      return val;
    });

    const isdATA = upd_obj.filter(val => val.whishlist == true);
    //console.log('isdATA', isdATA);
    dispatch(addItemToWishList(isdATA));
    setProductList(upd_obj);
  };


  // const onWhisLista = item => {

  //   const upd_obj = productData.map(val => {
  //     if (val.title == item.title && val.whishlist == false) {
  //       val.whishlist = true;
  //     } else if (val.title == item.title && val.whishlist == true) {
  //       val.whishlist = false;
  //     }
  //     return val;
  //   });

  //   const isdATA = upd_obj.filter(val => val.whishlist == true);
  //   //console.log('isdATA', isdATA);
  //   dispatch(addItemToWishList(isdATA));
  // };

  // const onWhisListb = item => {
  //   const upd_obj = productData.map(val => {
  //     if (val.title === item.title) {
  //       val.whishlist = !val.whishlist; // Toggle the wishlist status
  //     }
  //     return val;
  //   });
  
  //   const wishlistItems = upd_obj.filter(val => val.whishlist);
  //   dispatch(addItemToWishList(wishlistItems));
  //   setProductList(upd_obj);
  // };
  

  // const onWhisList = item => {
  //   const upd_obj = productData.map(val => {
  //     if (val.title === item.title) {
  //       val.whishlist = !val.whishlist; // Toggle the wishlist status
  //     }
  //     return val;
  //   });
  
  //   const wishlistItems = upd_obj.filter(val => val.whishlist);
  //   dispatch(addItemToWishList(wishlistItems));
  //   setProductList(upd_obj);
  // };



  const getOnPressItem = title => {
    Alert.alert(title);
  };

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          height: wp('74'),
          borderColor: colors.gray,
          borderWidth: 0.5,
          // width: wp('46.5'),
          // borderRadius: wp('20'),
          // alignSelf: 'center',
          //   marginRight: wp('3'),
          // borderWidth:2,
          marginBottom: hp('2'),
          // backgroundColor:'red'
        }}>
        <Pressable 
        // onPress={() =>{
        //   onWhisListb();
        //   navigation.navigate('ProductDetails')}}
        // onPress={() => navigation.navigate('ProductDetails')}
        onPress={() => navigation.navigate('NormalPageNevigator', {
          screen: 'ProductDetails',
          params: { data: item },
        })}
        >
          <View
            style={{
              height: wp('55'),
              width: wp('46.5'),
              backgroundColor: colors.inputBorderColor,
              // borderRadius: wp('20'),
              // alignSelf: 'center',
              // marginTop: hp('2'),
            }}>
            <Image
              source={{
                uri:
                  item.uri ||
                  'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
              style={{
                height: wp('55'),
                width: wp('46.5'),
                // borderRadius: wp('20'),
                // alignSelf: 'center',
                // marginTop: hp('2'),
              }}
              resizeMode="contain"
              // resizeMode="cover"
            />
          </View>
          <Pressable
            onPress={item => {
              getOnPressItem(item.title);
            }}>
            <Mytxt
              txt={item.title}
              style={{
                fontSize: hp('2'),
                fontWeight: '700',
                color: colors.black,
                alignSelf: 'flex-start',
              }}
            />
          </Pressable>
          <Mytxt
            txt={item.des}
            style={{
              fontSize: hp('1.5'),
              fontWeight: '500',
              color: colors.gray,
              alignSelf: 'flex-start',
            }}
          />
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Mytxt
              txt={item.prize}
              style={{
                fontSize: hp('2'),
                fontWeight: '700',
                color: colors.black,
                alignSelf: 'flex-start',
              }}
            />
            <Icons
              iconType={'MaterialCommunityIcons'}
              name={item.whishlist ? 'cards-heart' : 'cards-heart-outline'}
              color={item.whishlist ? colors.error : colors.inputBorderColor}
              // onPress={() => {
              //   onWhisList(item);
              //   addItem(item);
              // }}
              onPress={() => {
                onWhisList(item);
              }}
            />
          </View>
          {/* <View style={styles.bagtxtview}>
          <Pressable
            // onPress={(item) => {
            //   getOnPressItem(item);
            // }}
            >
            <Mytxt
              txt={'ADD TO CART'}
              style={{
                fontSize: hp('2'),
                fontWeight: '500',
                color: colors.primary,
                alignSelf: 'center',
                padding: 8,
              }}
            />
          </Pressable>
        </View> */}
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={styles.header}>
        <View style={styles.iconntext}>
          <View style={styles.icon}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={28}
                style={{
                  color: 'grey',
                  alignSelf: 'flex-start',
                }}
              />
            </Pressable>
          </View>

          <View style={styles.wishlisttxtview}>
            <View style={styles.toptxt}>
              <Mytxt txt={'All Products'} style={styles.textstyle} />
            </View>
            {/* <View style={styles.bottomtxt}>
              <Mytxt
                txt={[addedItems.length, '  items']}
                style={styles.textstylebottomtxt}
              />
            </View> */}
          </View>
        </View>
        <View style={styles.righticon}>
          <Pressable onPress={() => navigation.navigate('WishlistNavigator')}>
            <MaterialIcons name="favorite-outline" size={30} color="grey" />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={productData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
        keyExtractor={item => item.title}
        // contentContainerStyle={{justifyContent:'space-between', alignItems:'center'}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        style={{width: wp('95'), alignSelf: 'center', marginTop: hp('2')}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    // marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    width: wp('90%'),
    height: hp('10%'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  wishlisttxtview: {
    marginLeft: wp('2%'),
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
  },
  iconntext: {
    flexDirection: 'row',
  },
  textstyle: {
    fontSize: 18,
    alignSelf: 'flex-start',
    color: colors.black,
  },
  // toptxt: {
  //   alignSelf: 'center',
  // },
  textstylebottomtxt: {
    fontSize: 12,
    alignSelf: 'flex-start',
    color: colors.gray,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  imagecontainer: {
    // width: wp('95%'),
    // height:hp('90%'),
    // alignSelf: 'center',
    // backgroundColor:'red',
    // padding:10,
  },
  bagtxtview: {
    // borderWidth: 0.5,
    // borderColor: colors.gray,
    borderTopColor: colors.gray,

    marginTop: hp('2%'),
    borderTopWidth: 0.5,
  },

  lefticon: {
    marginTop: hp('1%'),
    marginRight: wp('1%'),
  },
  nowishlist: {
    marginTop: hp('18%'),
    // backgroundColor:'red'
  },
  MainContainer: {
    flex: 1,
    backgroundColor: colors.cream,
    // marginHorizontal: wp('3'),
  },

  gridbox: {
    flex: 1,
    // height: 100,
    // margin: 1,
    backgroundColor: colors.cream,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('95%'),
    marginLeft: wp('2'),
    // alignItems: 'center',
  },

  gridText: {
    fontSize: 24,
    color: 'white',
  },
  main: {
    flex: 1,
    // backgroundColor: 'red',
    marginHorizontal: 16,
    // width: wp('45%')
  },
  texta: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.black,
    fontWeight: '600',
    fontSize: hp('2.25%'),
  },
  textb: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.black,
    width: wp('45%'),
    alignSelf: 'flex-start',
  },
  textr: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.gray,
    width: wp('45%'),
    alignSelf: 'flex-start',
  },
});

export default Products;
