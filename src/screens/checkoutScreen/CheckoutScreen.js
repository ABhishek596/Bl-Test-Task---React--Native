import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  TextInput,
  Switch,
  TouchableOpacity,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  FormInputField,
  MyButton,
  Mytxt,
  SimpleHeader,
  SubmitBtn,
} from '../../constant/file';
import colors from '../../constant/colors';
import styles from './styles';
import Icons from '../../components/icons/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    uri: require('../../../assets/images/41.jpg'),
    title: 'Longsleeve tops',
    price: '₹ 1,299',
    dec: 'lahangaa',
  },
  {
    id: 2,
    uri: require('../../../assets/images/849.jpeg'),
    title: 'Longsleeve',
    price: '₹ 1,555',
    dec: 'black-top',
  },
  {
    id: 3,
    uri: require('../../../assets/images/a.jpg'),
    title: 'Longsleeve',
    price: '₹ 1,555',
    dec: 'black-top',
  },
  {
    id: 4,
    uri: require('../../../assets/images/imagethree.jpg'),
    title: 'Longsleeve',
    price: '₹ 1,555',
    dec: 'black-top',
  },
  {
    id: 5,
    uri: require('../../../assets/images/one.png'),
    title: 'Longsleeve',
    price: '₹ 1,555',
    dec: 'black-top',
  },
];

const CheckoutScreen = ({navigation}) => {
  const items = useSelector(state => state.cart);
  //console.log('checkout11133111331111331113311133', JSON.stringify(items));
  const [cartItems, setCartItems] = useState([]);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState('Please Select Address');

  // useEffect(() => {
  //   getSelectedAddress();
  // }, [isFocused]);

  // const getSelectedAddress = async () => {
  //   setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  // };
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };
  // useEffect(() => {
  //   getSelectedAddress();
  // }, [isFocused]);

  // const getSelectedAddress = async () => {
  //   setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  // };

  const Item = ({title, image, price, dec, qty}) => (
    <View style={styles.listitem}>
      <View style={styles.txtimage}>
        <View>
          <Image
            style={styles.imagecontain}
            source={{uri: image}}
            resizeMode="contain"
          />
        </View>

        <View style={styles.txtcontainer}>
          <Mytxt style={styles.toptxt} txt={title} />
          <Mytxt style={styles.middletxt} txt={'₹ ' + price} />
          <Mytxt style={styles.bottomtxt} txt={dec} />
        </View>
      </View>

      <View style={styles.activity}>
        <View style={styles.minus}>
          <Icons
            name={'x'}
            iconType={'Feather'}
            size={14}
            color={colors.black}
            // onPress={() => Alert.alert('Item Removed')}
          />
        </View>
        <View style={styles.value}>
          <Mytxt style={styles.increse} txt={qty} />
        </View>
        {/* <View style={styles.plus}>
          <Icons
            name={'plus'}
            iconType={'AntDesign'}
            size={16}
            color={colors.black}
            // onPress={() => Alert.alert('Item added')}
          />
        </View> */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SimpleHeader
        size={28}
        name={'Check out'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contain}>
        <View style={styles.flatlist}>
          <FlatList
            data={cartItems}
            renderItem={({item}) => (
              <Item
                image={item.image}
                title={item.title}
                price={item.price}
                dec={item.dec}
                qty={item.qty}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.detailsincenter}>
            <View style={styles.billing}>
              <View style={styles.billingtxt}>
                <Mytxt txt={'Subtotal'} style={styles.txtstyle} />
                <Mytxt txt={'Estimated Tax'} style={styles.txtstyle} />
                <Mytxt txt={'Shipping'} style={styles.txtstyle} />
              </View>
              <View>
                <Mytxt txt={'₹ ' + getTotal()} style={styles.txtstyleprice} />
                <Mytxt txt={'₹ 0.00'} style={styles.txtstyleprice} />
                <Mytxt txt={'₹ 0.00'} style={styles.txtstyleprice} />
              </View>
            </View>
            <View style={styles.shipping}>
              <View style={styles.totalamt}>
                <View>
                  <Mytxt txt={'Total amount'} style={styles.txtstyle} />
                </View>
                <View>
                  <Mytxt txt={'₹ ' + getTotal()} style={styles.txtstyle} />
                </View>
              </View>
              <View style={styles.addressView}>
                <Text style={styles.title}>Address</Text>
                <Text
                  style={[
                    styles.title,
                    {textDecorationLine: 'underline', color: '#0269A0FB'},
                  ]}
               
                  >
                  Edit Address
                </Text>
              </View>
              <Text
                style={[
                  styles.title,
                  {marginTop: 10, fontSize: 16, color: '#636363'},
                ]}>
                {selectedAddress}
              </Text>
              {/* <Mytxt txt={'Shipping method'} style={styles.shippingmethod} /> */}
              {/* <View style={styles.formInputfield}>
                <FormInputField
                  placeholder="Standard (3-7 business days)"
                  inputContainerStyle={{
                    // backgroundColor: 'red',
                    backgroundColor: 'colors.cream',
                    borderWidth: 0,
                    height: hp('6%'),
                  }}
                  containerStyle={{
                    backgroundColor: 'colors.cream',
                    // marginTop: hp('4%'),
                  }}
                  keyboardType="email-address"
                  textInputStyle={{fontSize: 14}}
                  // value={}
                />
              </View> */}
            </View>
          </View>
        </View>
        {/* <View style={styles.price}></View> */}
      </View>

      <View style={styles.containerbottom}>
        <View style={styles.button}>
          <SubmitBtn
            style={{}}
            onPress={() => navigation.navigate('OrderPlaced')}
            label={'Place order'}
          />
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
