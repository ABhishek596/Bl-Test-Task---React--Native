import React, {useState,useEffect} from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {SubmitBtn, Mytxt} from '../../constant/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constant/colors';
import Icons from '../../components/icons/Icons';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductsSlice';

export const data = [
  { 
    id : 1,
    title: 'My address',
    name: '110, Om grudev plaza',
    category_name: 'Womens Wear',
    data: [
      { 
        id : 551,
        title: 'Lehngas',
        des: 'New Collection',
        uri: 'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c8552fff-f0d3-5064-9afb-2dea949d1f34.jpg',
        data: [
          { 
            id : 661,
            title: 'Lehngas- A is',
            des: 'New Collection',
            uri: 'https://assets0.mirraw.com/images/10011965/7614_(2)_large_m.jpg?1646110315',
            prize: 400,
            whishlist: false,
          },
          { 
            id : 662,
            title: 'Lehngas- B is',
            des: 'New Collection',
            uri: 'https://i.pinimg.com/474x/e8/8c/96/e88c966208ef75080a80687a48f73cd1.jpg',
            prize: 600,
            whishlist: false,
          },
          { 
            id : 663,
            title: 'Lehngas- C is',
            des: 'New Collection',
            uri: 'https://rukminim1.flixcart.com/image/612/612/l2xmqvk0/lehenga-choli/a/x/m/free-sleeveless-l8097-anara-original-image5uvub9hh3hz.jpeg?q=70',
            prize: 745,
            whishlist: false,
          },
          { 
            id : 664,
            title: 'Lehngas- D is',
            des: 'New Collection',
            uri: 'https://i.pinimg.com/736x/0b/44/f7/0b44f7cc3da49691721fddf596ef2ae3.jpg',
            prize: 460,
            whishlist: false,
          },
        ],
      },
      { 
        id : 552,
        title: 'Dress',
        des: 'New Collection',
        uri: 'https://m.media-amazon.com/images/I/51lB0WbqahL._UY550_.jpg',
        data: [
          { 
            id : 711,
            title: 'Lehngas- A is',
            des: 'New Collection',
            uri: 'https://assets0.mirraw.com/images/10011965/7614_(2)_large_m.jpg?1646110315',
            prize: 3000,
            whishlist: false,
          },
          { 
            id : 712,
            title: 'Lehngas- B is',
            des: 'New Collection',
            uri: 'https://i.pinimg.com/474x/e8/8c/96/e88c966208ef75080a80687a48f73cd1.jpg',
            prize: 900,
            whishlist: false,
          },
          { 
            id : 713,
            title: 'Lehngas- C is',
            des: 'New Collection',
            uri: 'https://rukminim1.flixcart.com/image/612/612/l2xmqvk0/lehenga-choli/a/x/m/free-sleeveless-l8097-anara-original-image5uvub9hh3hz.jpeg?q=70',
            prize: 546,
            whishlist: false,
          },
          { 
            id : 714,
            title: 'Lehngas- D is',
            des: 'New Collection',
            uri: 'https://i.pinimg.com/736x/0b/44/f7/0b44f7cc3da49691721fddf596ef2ae3.jpg',
            prize: 345,
            whishlist: false,
          },
        ],
      },
      { 
        id : 553,
        title: 'Kurtas and Tunics shamimi manshjd',
        des: 'New Collection',
        uri: 'https://img.faballey.com/images/Product/ITN04326Z/1.jpg',
        data: [
          { id : 821,
            title: 'Kurtas- A is',
            des: 'New Collection',
            uri: 'https://shivanistylehouse.co.uk/adminpanel/uploads/product_images/slider/318.JPG',
            prize: 897,
            whishlist: false,
          },
          { 
            id : 822,
            title: 'Kurtas- B is',
            des: 'New Collection',
            uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13313906/2021/1/6/3a0849cb-f92d-4295-9e18-5fba4bc68db91609909936947-Rain--Rainbow-Women-Kurtas-5511609909935760-1.jpg',
            prize: 599,
            whishlist: false,
          },
          { 
            id : 823,
            title: 'Kurtas- C is',
            des: 'New Collection',
            uri: 'https://assets.ajio.com/medias/sys_master/root/20220711/Gp8K/62cc051ff997dd03e2c8508f/-473Wx593H-464626798-pink-MODEL.jpg',
            prize: 890,
            whishlist: false,
          },
          { 
            id : 824,
            title: 'Kurtas- D is',
            des: 'New Collection',
            uri: 'https://i.pinimg.com/736x/0b/44/f7/0b44f7cc3da49691721fddf596ef2ae3.jpg',
            prize: 456,
            whishlist: false,
          },
        ],
      },
      { 
        id : 554,
        title: 'Saree',
        des: 'New Collection',
        uri: 'https://5.imimg.com/data5/SI/JT/VF/SELLER-37269396/beautiful-and-gorgeous-party-and-wedding-wear-designer-saree-500x500.jpg',
      },
    ],
  },
  { 
    id : 2,
    title: 'My orders',
    name: '2 Orders',
    category_name: 'Mens Wear',
    data: [
      {
        id : 11,
        title: 'T-shirt',
        des: 'New Collection',
      },
      { 
        id : 12,
        title: 'Shirt',
        des: 'New Collection',
      },
      { 
        id : 13,
        title: 'Jeans',
        des: 'New Collection',
      },
    ],
  },
  { 
    id : 3,
    title: 'My returns',
    name: '1 Return',
    category_name: 'Couple Match',
    data: [
      { 
        id : 21,
        title: 'Lehngas',
        des: 'New Collection',
      },
      { 
        id : 22,
        title: 'Dress',
        des: 'New Collection',
      },
      {
        id : 23,
        title: 'Saree',
        des: 'New Collection',
      },
      { 
        id : 24,
        title: 'Kurtas and Tunics',
        des: 'New Collection',
      },
    ],
  },
  { 
    id : 4,
    title: 'Payment',
    name: 'Copleted',
    category_name: 'Season Wear',
    data: [
      { 
        id : 31,
        title: 'Lehngas',
        des: 'New Collection',
      },
      { 
        id : 32,
        title: 'Dress',
        des: 'New Collection',
      },
      { 
        id : 33,
        title: 'Saree',
        des: 'New Collection',
      },
      { 
        id : 34,
        title: 'Kurtas and Tunics',
        des: 'New Collection',
      },
    ],
  },
  { 
    id : 5,
    title: 'Language',
    name: 'English',
    category_name: 'Customize',
    data: [
      { 
        id : 41,
        title: 'Lehngas',
        des: 'New Collection',
      },
      { 
        id : 42,
        title: 'Dress',
        des: 'New Collection',
      },
      { 
        id : 43,
        title: 'Saree',
        des: 'New Collection',
      },
      { 
        id : 44,
        title: 'Kurtas and Tunics',
        des: 'New Collection',
      },
    ],
  },
  { 
    id : 6,
    title: 'Language',
    name: 'English',
    category_name: 'Accessories',
    data: [
      { 
        id : 51,
        title: 'Lehngas',
        des: 'New Collection',
      },
      { 
        id : 52,
        title: 'Dress',
        des: 'New Collection',
      },
      { 
        id : 53,
        title: 'Saree',
        des: 'New Collection',
      },
      { 
        id : 54,
        title: 'Kurtas and Tunics',
        des: 'New Collection',
      },
    ],
  },
];





const CategoriesScreens = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(data));
    // getProducts();
  }, []);

  // const getProducts = () => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(json => {
  //       setProducts(json);
  //       json.map(item => {
  //         item.qty = 1;
  //       });
  //       dispatch(addProducts(json));
  //     });
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          width: wp('95'),
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
            onPress={() => navigation.navigate('SearchItem')}>
            <Icons
              iconType={'AntDesign'}
              name="search1"
              size={26}
              color={colors.black}
              // onPress={() => navigation.goBack()}
              // onPress={onPress}
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(val => {
          //console.log('valdatacolletion',JSON.stringify(val.data));
          return (
            <View
              style={{width: wp('95'), height: wp('75'), marginTop: hp('2')}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: hp('1.5'),
                }}>
                <Mytxt
                  txt={val.category_name}
                  style={{
                    fontSize: hp('3'),
                    fontWeight: '700',
                    color: colors.black,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NormalPageNevigator', {
                      screen: 'CategoriesView',
                      params: {data: val.data},
                    });
                    //console.log('kmkmmkmmkkmkkkkkmkmkkk', val.data)
                  }}
                  >
                  <View
                    // style={{flexDirection: 'row', alignItems:'center'}}
                    >
                    <Mytxt txt="View all>>" style={{color: colors.black}} />
                  </View>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {val.data.map(val => {
                  return (
                    <View
                      style={{
                        // height: wp('55'),
                        // width: wp('46.5'),
                        // borderRadius: wp('20'),
                        // alignSelf: 'center',
                        marginRight: wp('3'),
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('NormalPageNevigator', {
                            screen: 'Products',
                            params: {data: val.data},
                          });
                        }}>
                        <View
                          style={{
                            height: wp('55'),
                            width: wp('46.5'),
                            // borderRadius: wp('20'),
                            // alignSelf: 'center',
                            // marginTop: hp('2'),
                            backgroundColor: colors.inputBorderColor,
                          }}>
                          <Image
                            source={{
                              uri:
                                val.uri ||
                                'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                            }}
                            style={{
                              height: wp('55'),
                              width: wp('46.5'),
                              // borderRadius: wp('20'),
                              // alignSelf: 'center',
                              // marginTop: hp('2'),
                            }}
                            resizeMode="cover"
                          />
                        </View>
                        <Mytxt
                          txt={
                            val.title.length <= 25
                              ? val.title.substring(0, 25)
                              : val.title.substring(0, 22) + '...'
                          }
                          style={{
                            fontSize: hp('2'),
                            width: wp('46.5'),
                            fontWeight: '700',
                            color: colors.black,
                            alignSelf: 'flex-start',
                          }}
                        />
                        <Mytxt
                          txt={val.des}
                          style={{
                            fontSize: hp('1.5'),
                            fontWeight: '500',
                            color: colors.gray,
                            alignSelf: 'flex-start',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreens;
