import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Pressable,
} from 'react-native';
import {Mytxt, SubmitBtn, SimpleHeader, CheckBox1} from '../../constant/file';
import styles from './styles';
import colors from '../../constant/colors';
import Icons from '../../components/icons/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';


const AddCartScreen = ({navigation}) => {
  const items = useSelector(state => state.cart);
  // const [cartItems, setCartItems] = useState([]);
  //console.log('shopshopshop32332233232', JSON.stringify(items));

  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();

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

  const Item = ({title, uri, price, dec, qty, item, index}) => (
  

    <View style={styles.listitem}>
      <View style={styles.txtimage}>
        <View>
          <ImageBackground
            style={styles.imagecontain}
            // source={require('../../../assets/images/849.jpeg')}
            resizeMode="cover"
            source={{uri}}>
            <View style={styles.cross}>
          
            </View>
          </ImageBackground>
        </View>

        <View style={styles.txtcontainer}>
        
          <Mytxt style={styles.toptxt} txt={title.slice(0, 17)+'...'} />
          <Mytxt style={styles.middletxt} txt={price} />
          <Mytxt style={styles.bottomtxt} txt={dec} />
       
          <View style={styles.activity}>
            <Pressable
              onPress={() => {
                if (item.qty > 1) {
                  dispatch(reduceItemFromCart(item));
                } else {
                  dispatch(removeItemFromCart(index));
                }
              }}>
              <View style={styles.minus}>
                <Icons
                  name={'minus'}
                  iconType={'AntDesign'}
                  size={14}
                  color={colors.white}
                />
              </View>
            </Pressable>
            <View style={styles.value}>
              <Mytxt style={styles.increse} txt={qty} />
              {/* {counter} */}
            </View>
            <Pressable
              onPress={() => {
                dispatch(addItemToCart(item));
              }}>
              <View style={styles.plus}>
                <Icons
                  name={'plus'}
                  iconType={'AntDesign'}
                  size={14}
                  color={colors.white}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.cut}>
          <Icons
            name={'close-o'}
            iconType={'EvilIcons'}
            size={25}
            color={colors.gray}
            onPress={() => {
              dispatch(removeItemFromCart(index));
            }}
          />
        </View>

      
      </View>
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
     
      <SimpleHeader
        size={28}
        name={'My Cart'}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.contain}>
     

      

        <FlatList
          data={cartItems}
          renderItem={({item, index}) => (
            <Item
              item={item}
              uri={item.image}
              title={item.title}
              price={item.price}
              dec={item.description}
              qty={item.qty}
              index={index}
            />
          )}
          keyExtractor={item => item.id}
        />
        {cartItems.length > 0 && (
          <View style={styles.totalamtext}>
            <View
            >
              <Mytxt style={styles.totalfixamount} txt={'Total amount'} />
            </View>
            <View
            >
              <Mytxt style={styles.finalprice} txt={'₹ '+ getTotal()} />
            </View>
          </View>
        )}
      </View>
      {cartItems.length < 1 && (
        <View style={styles.noItems}>
          <Text>No Items in Cart</Text>
        </View>
      )}
      {cartItems.length > 0 && (
        <View style={styles.submit}>
          <Mytxt style={styles.Quantity} txt={cartItems.length + '  Items selected for order'} />
          <View style={styles.button}>
            <SubmitBtn
              style={{}}
              onPress={() => navigation.navigate('BaseStackNavigator')}
              label={'Check Out'}
            />
          </View>
        </View>
      )}

 
    </SafeAreaView>
  );
};

export default AddCartScreen;
