import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  FormInputField,
  Mytxt,
  SimpleHeader,
  SubmitBtn,
} from '../../constant/file';
import colors from '../../constant/colors';
import styles from './styles';
// import Icons from '../../components/icons/Icons'; smalltxt
const ShippingScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <SimpleHeader
        size={28}
        name={'Shipping'}
        onPress={() => navigation.goBack()}
        borderBottomWidth={1}
      />
      <View style={styles.contain}>
        <ScrollView>
          <View style={styles.resister}>
            <Mytxt txt={'Name'} style={styles.smalltxtone} />
            <FormInputField
              placeholder="Name"
              inputContainerStyle={{
                // backgroundColor: 'red',
                backgroundColor: colors.cream,
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: colors.cream,
                marginTop: hp('0%'),
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              // value={}
            />
            <Mytxt txt={'Email'} style={styles.smalltxt} />
            <FormInputField
              placeholder="Email"
              inputContainerStyle={{
                // backgroundColor: 'red',
                backgroundColor: colors.cream,
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: colors.cream,
                marginTop: hp('0%'),
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              // value={}
            />
            <Mytxt txt={'Phone'} style={styles.smalltxt} />
            <FormInputField
              placeholder="Phone"
              inputContainerStyle={{
                // backgroundColor: 'red',
                backgroundColor: colors.cream,
                borderWidth: 0,
                height: hp('7%'),
              }}
              containerStyle={{
                backgroundColor: colors.cream,
                marginTop: hp('0%'),
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              // value={}
            />
            <Mytxt txt={'Address'} style={styles.smalltxt} />
            <FormInputField
              placeholder="Address"
              inputContainerStyle={{
                // backgroundColor: 'red',
                backgroundColor: colors.cream,
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: colors.cream,
                marginTop: hp('1%'),
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              // value={}
            />
            <FormInputField
              placeholder="State"
              inputContainerStyle={{
                // backgroundColor: 'red',
                backgroundColor: colors.cream,
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: colors.cream,
                marginTop: hp('1%'),
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              // value={}
            />
            <FormInputField
              placeholder="Country"
              inputContainerStyle={{
                // backgroundColor: 'red',
                backgroundColor: colors.cream,
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: colors.cream,
                marginTop: hp('1%'),
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              // value={}
            />
            <View style={styles.containerbottom}>
              <View>
              
              </View>
              <View>
                <Mytxt txt={'Save for next time'} style={styles.lasttxt} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <SubmitBtn
            style={{}}
            onPress={() => navigation.navigate('PaymentScreen')}
            label={'Continue'}
          />
        </View>
      </View>
    </View>
  );
};

export default ShippingScreen;
