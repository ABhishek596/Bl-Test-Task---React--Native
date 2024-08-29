import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
  Pressable,
  Alert,
  Text,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SubmitBtn,
  Mytxt,
  SimpleHeader,
  FormInputField,
} from '../../../constant/file';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import colors from '../../../constant/colors';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteAddress} from '../redux/slices/AddressSlice';

const SaveAddress = ({navigation}) => {
  const addressList = useSelector(state => state.address);
  const isFocused = useIsFocused();

  useEffect(() => {
    //console.log(addressList);
  }, [isFocused]);

  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      '' +
        item.city +
        ',' +
        item.state +
        ',' +
        item.pincode +
        ',type:' +
        item.type,
    );
    navigation.goBack();
  };

//console.log('adsads',addressList.data[0].name);
  return (
    <View style={styles.container}>
      <SimpleHeader
        name={'Address'}
        size={28}
        onPress={() => navigation.goBack()}
        borderBottomWidth={1}
      />
      <ScrollView style={styles.scroll}>
        <View style={styles.toptxt}>
          <Pressable onPress={() => navigation.navigate('Addresses')}>
            <Mytxt
              txt={'+ ADD NEW ADDRESS'}
              style={{
                alignSelf: 'flex-start',
                color: colors.primary,
                padding: wp('4'),
                fontSize: wp('4'),
              }}
            />
          </Pressable>
        </View>
        <View style={styles.maintop}>
          {/* <View style={{paddingBottom: hp('5%')}}></View> */}
          <Mytxt
            txt={'DEFAULT ADDRESS'}
            style={{
              alignSelf: 'flex-start',
              color: colors.black,
              // padding: wp('3'),
              fontSize: wp('4'),
              marginLeft: wp('4.5'),
              paddingTop: wp('3'),
              paddingBottom: wp('3'),
            }}
          />
          {/* {addressList.map((val)=>{//console.log(val.data.name)})} */}
        </View>
        {/* 
        <View style={styles.main}>
       
         
          <View style={{}}>
            
          </View>
        </View> */}
        <View style={styles.main}>
          <View
            style={{
              alignSelf: 'center',
              width: wp('90'),
              paddingBottom: wp('5'),
            }}>
            {/* <Mytxt
            txt={'Type of Address *'}
            style={{
              alignSelf: 'flex-start',
              color: colors.black,
              padding: wp('4'),
              fontSize: wp('3.5'),
            }}
          /> */}

            <View style={styles.homeaddress}>
              <Mytxt
                txt={'Pet Cummins'}
                style={{
                  alignSelf: 'flex-start',
                  color: colors.black,
                  // padding: wp('4'),
                  paddingTop: wp('4'),
                  paddingBottom: wp('4'),
                  fontSize: wp('3.5'),
                }}
              />
              <Mytxt
                txt={'Home'}
                style={{
                  alignSelf: 'flex-start',
                  color: colors.black,
                  // padding: wp('4'),
                  paddingTop: wp('4'),
                  paddingBottom: wp('4'),
                  fontSize: wp('3.5'),
                }}
              />
            </View>
            <Mytxt txt={'377/B ,Pearth'} style={styles.line} />
            <Mytxt txt={'Street waal G'} style={styles.line} />
            <Mytxt txt={'Pearth - 456789'} style={styles.line} />
            <Mytxt txt={'Dummy'} style={styles.line} />
            <Mytxt txt={'Mobile :'} style={styles.line} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderTopWidth: 0.5,
            borderTopColor: colors.gray,
            backgroundColor: colors.white,
            height: hp('6'),
            alignItems: 'center',
          }}>
          <View>
            <Pressable onPress={() => navigation.navigate('Addresses')}>
              <Mytxt txt={'EDIT'} style={styles.textinline} />
            </Pressable>
          </View>
          <View style={styles.middelview} />
          <View>
            <Pressable>
              <Mytxt txt={'REMOVE'} style={styles.textinline} />
            </Pressable>
          </View>
        </View>
        <View style={styles.maintop}>
          {/* <View style={{paddingBottom: hp('5%')}}></View> */}
          <Mytxt
            txt={'OTHER ADDRESSES'}
            style={{
              alignSelf: 'flex-start',
              color: colors.black,
              // padding: wp('3'),
              fontSize: wp('4'),
              marginLeft: wp('4.5'),
              paddingTop: wp('3'),
              paddingBottom: wp('3'),
            }}
          />
        </View>
        {/* <View style={{height: hp('1'), backgroundColor: colors.creame}} /> */}
        <View style={styles.main}>
          <View
            style={{
              alignSelf: 'center',
              width: wp('90'),
              paddingBottom: wp('3'),
            }}>
            <View style={styles.homeaddress}>
              <Mytxt
                txt={'Pet Cummins'}
                style={{
                  alignSelf: 'flex-start',
                  color: colors.black,
                  // padding: wp('4'),
                  paddingTop: wp('4'),
                  paddingBottom: wp('4'),
                  fontSize: wp('3.5'),
                }}
              />
              <Mytxt
                txt={'Office'}
                style={{
                  alignSelf: 'flex-start',
                  color: colors.black,
                  // padding: wp('4'),
                  paddingTop: wp('4'),
                  paddingBottom: wp('4'),
                  fontSize: wp('3.5'),
                }}
              />
            </View>
            {/* <Mytxt
              txt={'Type of Address *'}
              style={{
                alignSelf: 'flex-start',
                color: colors.black,
                // padding: wp('4'),
                fontSize: wp('3.5'),
              }}
            /> */}

            <View style={styles.j}>
              <Mytxt txt={'577/6A ,Pearth'} style={styles.line} />
              <Mytxt txt={'Pearth'} style={styles.line} />
              <Mytxt txt={'Pearth - 456789'} style={styles.line} />
            </View>
          </View>

          {/* <View
            style={{
              width: wp('90%'),
              borderBottomWidth: 0.5,
              borderBottomColor: colors.gray,
              alignSelf: 'center',
            }}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default SaveAddress;
