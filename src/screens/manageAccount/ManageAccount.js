import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../../components/icons/Icons';
import colors from '../../constant/colors';
import {
  SubmitBtn,
  Mytxt,
  SubmitBtn1,
  SimpleHeader,
  FormInputField,
  //   SubmitBtn1
} from '../../constant/file';
// import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const ManageAccount = ({navigation}) => {
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <SimpleHeader
          name={'Manage Your Account'}
          size={28}
          onPress={() => navigation.goBack()}
          borderBottomWidth={1}
        />
        <ScrollView>
          <View style={styles.mainscrollview}>
            <View style={styles.toptxtview}>
              <View style={styles.leftcontent}>
                <View>
                  <Mytxt
                    txt={'Mobile Number'}
                    style={{
                      alignSelf: 'flex-start',
                      color: colors.gray,
                      marginBottom: hp('0.5'),
                    }}
                  />
                </View>
                <View>
                  <Mytxt
                    txt={'9807897867'}
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: wp('4'),
                      color: colors.black,
                      marginTop: hp('0.5'),
                    }}
                  />
                </View>
              </View>
              <View style={styles.rightcontenr}>
                <Mytxt
                  txt={'CHANGE'}
                  style={{
                    alignSelf: 'flex-start',
                    color: colors.primary,
                    fontSize: wp('4'),
                  }}
                />
              </View>
            </View>
            <Mytxt
              txt={'Full Name'}
              style={{
                alignSelf: 'flex-start',
                marginTop: hp('3'),
                color: colors.gray,
              }}
            />

            <FormInputField
              inputContainerStyle={{
                width: wp('80%'),
                backgroundColor: colors.cream,
              }}
              textInputStyle={{
                width: wp('70%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
            />

            <Mytxt
              txt={'Email'}
              style={{
                alignSelf: 'flex-start',
                marginTop: hp('1'),
                color: colors.gray,
              }}
            />
            <FormInputField
              inputContainerStyle={{
                width: wp('80%'),
                backgroundColor: colors.cream,
              }}
              textInputStyle={{
                width: wp('70%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
            />
            <FormInputField
              inputContainerStyle={{
                width: wp('80%'),
                marginTop: hp('3'),
                backgroundColor: colors.cream,
              }}
              textInputStyle={{
                width: wp('70%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Location"
            />
            <View>
              <Mytxt
                txt={'Alternate mobile number details'}
                style={{
                  alignSelf: 'flex-start',
                  marginVertical: hp('3'),
                  fontSize: wp('4.5'),
                  color: colors.black,
                }}
              />
            </View>
            <FormInputField
              inputContainerStyle={{
                width: wp('80%'),
                marginTop: hp('1'),
                backgroundColor: colors.cream,
              }}
              textInputStyle={{
                width: wp('70%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Mobile Number"
            />
            <View>
              <Mytxt
                txt={'This will help recover your account if needed'}
                style={{
                  fontSize: wp('3.2'),
                  color: colors.gray,
                  marginRight: wp('9'),
                }}
              />
            </View>
            <FormInputField
              inputContainerStyle={{
                width: wp('80%'),
                marginTop: hp('4'),
                backgroundColor: colors.cream,
              }}
              textInputStyle={{
                width: wp('70%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Hint name"
            />
            <View>
              <Mytxt
                txt={'Add a name that helps you identify alternate number'}
                style={{
                  fontSize: wp('3.2'),
                  color: colors.gray,
                  marginLeft: wp('3'),
                }}
              />
            </View>
            <SubmitBtn1
              style={{
                width: wp('80'),
                borderRadius: wp('0'),
                marginTop: hp('5'),
                borderColor: colors.gray,
                backgroundColor: colors.cream,
              }}
              label={'CHANGE PASSWORD'}
              txtStyle={{color: colors.black}}
            />
            <View style={{height: hp('20')}}></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.containerbottom}>
        <SubmitBtn
          // style={{width: wp('90'), borderRadius: wp('2'), marginTop: hp('5')}}
          label={'SAVE DETAILS'}
        />
      </View>
    </View>
  );
};

export default ManageAccount;
