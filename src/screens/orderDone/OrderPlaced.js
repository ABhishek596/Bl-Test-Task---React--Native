import React from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SubmitBtn, Mytxt} from '../../constant/file';
import styles from './styles';
import colors from '../../constant/colors';
import Icons from '../../components/icons/Icons';

const OrderPlaced = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containertop}>
        <View style={styles.nowishlist}>
          <View>
            <Icons
              iconType="Fontisto"
              name="shopping-basket-add"
              size={80}
              style={{
                color: colors.black,
                alignSelf: 'center',
                bottom: hp('5'),
              }}
            />
          </View>
          <Mytxt
            txt={'Order Success!'}
            style={{
              fontSize: hp('4'),
              fontWeight: '500',
              color: colors.black,
              alignSelf: 'center',
            }}
          />

          <Mytxt
            txt={'Your order has been placed successfully! For'}
            style={{
              fontSize: hp('2'),
              fontWeight: '500',
              color: colors.gray,
              alignSelf: 'center',
              marginTop: hp('2'),
            }}
          />
          <Mytxt
            txt={'more details check your account'}
            style={{
              fontSize: hp('2'),
              fontWeight: '500',
              color: colors.gray,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>

      <View style={styles.containerbottom}>
        <View style={styles.button}>
          <SubmitBtn
            style={{}}
            onPress={() => navigation.navigate('HomeScreen')}
            label={'Continue Shopping'}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderPlaced;
