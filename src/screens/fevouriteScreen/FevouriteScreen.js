import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
  Pressable,
  Alert,
  Text
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SubmitBtn, Mytxt} from '../../constant/file';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import colors from '../../constant/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCarta,
} from '../../redux/slices/WishlistSlice';

export default function FevouriteScreen({navigation}) {
  const items = useSelector(state => state.wishlist);
  // const dispatch = useDispatch();

  //console.log('itemsssssssssssssssssssss8989889', JSON.stringify(items));
  //console.log('itemsdataitemsdataitemsdata', JSON.stringify(items.data)+ " "+items.data.length);


  const uniqueArray = [];

  items.data.forEach(subArray => {
  subArray.forEach(obj => {
    const existingObj = uniqueArray.find(item => item.id === obj.id);
    if (!existingObj) {
      uniqueArray.push(obj);
    }
  });
});

//console.log("uniqidididddi",uniqueArray);

const dispatch = useDispatch();

  // let addedItems = [];
  // addedItems = items;

  // const removeItem = index => {
  //   // const indexone = items.findIndex(product => product.title === index.title); findIndex
  //   // //console.log('Dispatching item with index from favourite:', indexone);
  //   dispatch(removeItemFromCart(index));
  // };

  const Data = [
    {
      title: 'My address',
      name: '110, Om grudev plaza',
      category_name: 'Womens Wear',
      data: [
        {
          title: 'Lehngas',
          des: 'New Collection',
          uri: 'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Dress',
          des: 'New Collection',
          uri: 'https://images.unsplash.com/photo-1676576844085-ce6d79e4f277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Kurtas and Tunics',
          des: 'New Collection',
          uri: 'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Saree',
          des: 'New Collection',
          uri: 'https://images.unsplash.com/photo-1676576844085-ce6d79e4f277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];
  const ITEMS = [
    {
      id: 1,
      data: 'A',
      title: 'Lehngas',
      uri: 'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      prize: '₹ 1,899',
    },
    {
      id: 2,
      data: 'B',
      title: 'Dress',
      uri: 'https://images.unsplash.com/photo-1676576844085-ce6d79e4f277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      prize: '₹ 1,299',
    },
    {
      id: 3,
      data: 'C',
      title: 'Kurtas and Tunics',
      uri: 'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      prize: '₹ 899',
    },
    {
      id: 4,
      data: 'D',
      title: 'Saree',
      uri: 'https://images.unsplash.com/photo-1676576844085-ce6d79e4f277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      prize: '₹ 21,899',
    },
    {
      id: 5,
      data: 'E',
      title: 'Lehngas',
      prize: '₹ 1,599',
    },
    {
      id: 6,
      data: 'F',
      title: 'Dress',
      prize: '₹ 699',
    },
    {
      id: 7,
      data: 'G',
      title: 'Kurtas and Tunics',
    },
    // {
    //   id: 8,
    //   data: 'H',
    // },
    // {
    //   id: 9,
    //   data: 'I',
    // },
    // {
    //   id: 10,
    //   data: 'J',
    // },
    // {
    //   id: 11,
    //   data: 'K',
    // },
    // {
    //   id: 102,
    //   data: 'L',
    // },
  ];

  const GridView = ({item, title, uri, prize, index}) => (

    <View style={styles.gridbox}>
    <Pressable 
        onPress={() => navigation.navigate('NormalPageNevigator', {
          screen: 'ProductDetails',
          params: { data: item },
        })}
    >
      <View
        style={{
          height: wp('72%'),
          width: wp('46.5%'),
          marginTop: hp('2%'),
          borderColor: colors.gray,
          borderWidth: 0.5,

        }}>
        <View
          style={{
            height: wp('55%'),
            width: wp('46.5%'),
          }}>
          <ImageBackground
            source={{uri}}
            style={{
              height: wp('55'),
              width: wp('46.5'),
            }}
            resizeMode="cover">
            <View style={styles.lefticon}>
            <Pressable >
              <AntDesign
                name="closecircleo"
                size={18}
                style={{
                  color: 'grey',
                  alignSelf: 'flex-end',
                }}
                onPress={() =>  dispatch(removeItemFromCarta(index))}
              />
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        <Mytxt
          txt={title}
          style={{
            fontSize: hp('2.5'),
            fontWeight: '700',
            color: colors.gray,
            alignSelf: 'flex-start',
            marginTop:hp('1'),
            marginHorizontal:wp('2')
          }}
        />
        <Mytxt
          txt={"₹ "+prize}
          style={{
            fontSize: hp('2'),
            fontWeight: '500',
            color: colors.black,
            alignSelf: 'flex-start',
            marginHorizontal:wp('2')
          }}
        />
        {/* <View style={styles.bagtxtview}>
          <Pressable
            onPress={() => {
              getOnPressItem(des);
            }}>
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
      </View>
      </Pressable>
    </View>
  );

  const getOnPressItem = des => {
    Alert.alert(des);
    //console.log('click',des);
  };

  const Grid_Header = () => {
    return (
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
                  // marginBottom: hp('2.5%'),
                }}
              />
            </Pressable>
          </View>

          <View style={styles.wishlisttxtview}>
            <View style={styles.toptxt}>
              <Mytxt txt={'Wishlist'} style={styles.textstyle} />
            </View>
            <View style={styles.bottomtxt}>
              <Mytxt txt={'0 items'} style={styles.textstylebottomtxt} />
            </View>
          </View>
        </View>
        <View style={styles.righticon}>
          {/* <SimpleLineIcons
                  name="handbag"
                  size={28}
                  style={{
                    color: 'grey',
                    alignSelf: 'flex-start',
                    // marginBottom: hp('2.5%'),
                  }}
                /> */}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
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
              <Mytxt txt={'Wishlist'} style={styles.textstyle} />
            </View>
            <View style={styles.bottomtxt}>
              <Mytxt
                txt={[uniqueArray.length, '  items']}
                style={styles.textstylebottomtxt}
              />
            </View>
          </View>
        </View>
        <View style={styles.righticon}></View>
      </View>
      <View style={{borderTopWidth: 1, borderTopColor: colors.gray}} />
      {/* <Button
      title='rrr'
      // onPress={navigation.navigate('HomeScreen')}
      onPress={()=>{alert('go')}}
      /> */}
         {uniqueArray.length < 1 && (
        <View style={styles.noItems}>
          <Text style={{bottom:hp('10')}}>No Items in Wishlist</Text>
        </View>
      )}
      <View style={{flex:1}}>
        <FlatList
          // data={ITEMS}
          data={uniqueArray}
          renderItem={({item, index}) => (
            
            <GridView
              item={item}
              title={item.title}
              uri={item.uri}data
              prize={item.prize}
              id={item.id}
              index={index}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          key={item => item.id}
          // ListHeaderComponent={Grid_Header}
        />
      </View>
      {/* <View style={{height:hp('6')}}/> */}
   
    </SafeAreaView>
  );
}


