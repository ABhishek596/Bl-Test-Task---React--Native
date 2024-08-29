import React from 'react';
import {
  Image,
  View,
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
import {SubmitBtn, Mytxt, SubmitBtn1} from '../../constant/file';

const data = [
  {
    title: 'My orders',
    des: 'View order history,',
    iconType: 'Feather',
    iconName: 'box',
  },
  {
    title: 'Payments & Currencies',
    des: 'View balance and saved payments methods',
    iconType: 'FontAwesome',
    iconName: 'money',
  },
  {
    title: 'Manage Account',
    des: 'Your account details & save addresses',
    iconType: 'Feather',
    iconName: 'edit',
  },
  {
    title: 'Address Details',
    des: 'Your account details & save addresses',
    iconType: 'Ionicons',
    iconName: 'location-outline',
  },
  {
    title: 'My Bags',
    des: 'Your most item in begs',
    iconType: 'Feather',
    iconName: 'shopping-bag',
  },
  {
    title: 'Whishlist',
    des: 'Your most items loves styles',
    iconType: 'MaterialCommunityIcons',
    iconName: 'cards-heart-outline',
  },
];
const data1 = [
  {
    title: 'FAQs',
  },
  {
    title: 'TERM OF USE',
  },
  {
    title: 'PRIVACY POLICY',
  },
];

const ProfileScreen = ({navigation}) => {
 

  //console.log('ssssssssss');
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={{backgroundColor: colors.white, width: wp('100')}}>
        <Mytxt
          txt={'Profile'}
          style={{
            fontSize: hp('3'),
            fontWight: '600',
            margin: wp('3'),
            alignSelf: 'flex-start',
            color: colors.black,
          }}
        />
      </View>

      <ScrollView style={{flex:1}}>
        <View style={{backgroundColor: colors.white, width: wp('100')}}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: wp('1'),
              width: wp('95'),
              alignSelf: 'center',
              flexDirection: 'row',
              borderColor: colors.inputBorderColor,
              alignItems: 'center',
              paddingTop: hp('1'),
              paddingBottom: hp('1'),
              paddingLeft: hp('1'),
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
              style={{
                height: wp('25'),
                width: wp('25'),
                borderRadius: wp('1'),
              }}
            />
            <View style={{marginLeft: wp('5')}}>
              <Mytxt
                txt={'Kelly Portman'}
                style={{
                  fontSize: hp('3.2'),
                  alignSelf: 'flex-start',
                  fontWight: '700',
                  color: colors.black,
                }}
              />
              <Mytxt
                txt={'kellyportman@gmail.com'}
                style={{
                  fontSize: hp('2'),
                  alignSelf: 'flex-start',
                  fontWight: '700',
                  color: colors.gray,
                }}
              />
            </View>
            <View style={{position: 'absolute', right: wp('2'), top: wp('2')}}>
              <Icons
                name={'edit'}
                iconType={'MaterialIcons'}
                size={25}
                style={{color: colors.primary}}
                ></Icons>
              
            </View>
          </View>

          <View style={{marginTop: hp('5')}} />
          
          {data.map((val, i) => {
           
            return (
              <TouchableOpacity
              
                >
                <View
                  style={{
                    width: wp('95'),
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.inputBorderColor,
                  }}>
                  <View
                    style={{
                      width: wp('85'),
                      flexDirection: 'row',
                      alignItems: 'center',
                      height: hp('8'),
                      marginLeft: wp('2'),
                    }}>
                    <Icons
                      name={val.iconName}
                      iconType={val.iconType}
                      size={33}
                      style={{color: colors.gray}}
                    />
                    <View style={{marginLeft: wp('5')}}>
                      <Mytxt
                        txt={val.title}
                        style={{
                          fontSize: hp('2'),
                          alignSelf: 'flex-start',
                          fontWight: '700',
                          color: colors.black,
                        }}
                      />
                      <Mytxt
                        txt={val.des}
                        style={{
                          fontSize: hp('1.5'),
                          alignSelf: 'flex-start',
                          fontWight: '700',
                          color: colors.gray,
                        }}
                      />
                    </View>
                  </View>

                  <Icons
                    name={'arrow-forward-ios'}
                    iconType={'MaterialIcons'}
                    size={25}
                    style={{marginRight: wp('2'), color: colors.gray}}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            width: wp('100'),
            marginTop: hp('5'),
          }}>
          {data1.map((val, i) => {
            return (
              <View
                style={{
                  width: wp('80'),
                  alignSelf: 'center',
                  paddingTop: hp('1'),
                  paddingBottom: hp('1'),
                }}>
                <Mytxt
                  txt={val.title}
                  style={{
                    fontSize: hp('2.5'),
                    alignSelf: 'flex-start',
                    fontWight: '700',
                    color: colors.gray,
                  }}
                />
              </View>
            );
          })}
          <SubmitBtn1
            style={{width: wp('90'), borderRadius: wp('2'), marginTop: hp('5')}}
            label={'LOG OUT'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
