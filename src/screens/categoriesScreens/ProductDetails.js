import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import Icons from '../../components/icons/Icons';
import React, {useState} from 'react';

import {SimpleHeader} from '../../constant/file';
import {CustomButton} from '../../constant/file';

import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../../redux/slices/CartSlice';

const ProductDetail = ({navigation, route}) => {
  const newdata = route?.params?.data;
  const items = useSelector(state => state.wishlist);
  //console.log('idetailssssssssss', JSON.stringify(newdata));

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <SimpleHeader size={28} onPress={() => navigation.goBack()} />
      <ScrollView>
        <Image
          source={{
            uri: newdata.thumbnail,
          }}
          style={styles.banner}
          resizeMode='contain'
        />
        <Text style={styles.title}>{newdata.title}</Text>
        <Text style={styles.desc}>{newdata.des}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.price, {color: '#000'}]}>{'Price:'}</Text>
            <Text style={[styles.price, {color: '#000'}]}>
              {/* {'$' + ' ' + newdata.prize} */}
              {newdata.price}
            </Text>
          </View>
          <View style={styles.qtyView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setQty(qty + 1);
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton
          onClick={() => {
            dispatch(
              addItemToCart({
                description: route.params.data.des,
                id: route.params.data.id,
                image: route.params.data.thumbnail,
                price: route.params.data.price,
                qty: qty,
                title: route.params.data.title,
              }),
            );
            navigation.navigate('CartNavigator', {
              screen: 'AddCartScreen',
            });
          }}
          bg={'#FF9A0C'}
          title={'Add To Cart'}
          color={'#fff'}
        />
        <View style={{height: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 23,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  price: {
    color: 'green',
    marginLeft: 20,
    // marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    marginLeft: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btn: {
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
});
