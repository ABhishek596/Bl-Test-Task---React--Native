import React, {useState} from 'react';
import {
  Alert,
  Image,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {SubmitBtn, Mytxt} from '../../constant/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constant/colors';
import {data} from '../../json/data';

const VirtualizedList = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //  backgroundColor: '#fff',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: hp('39')}}>
        {data.map(val => {
          return (
            <View
              style={{
                width: wp('95'),
                height: wp('75'),
                marginTop: hp('2%'),
                marginLeft: 5,
              }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {val.data.map(val => {
                  return (
                    <View
                      style={{
                        marginRight: wp('4'),
                      }}>
                      <View
                        style={{
                          width: wp('45%'),
                          height: hp('30%'),
                        }}>
                        <Pressable
                          onPress={() =>
                            navigation.navigate('NormalPageNevigator', {
                              screen: 'ProductDetails',
                              params: {data: val},
                            })
                          }>
                          <Image
                            source={{
                              uri:
                                val.thumbnail ||
                                'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                            }}
                            style={{
                              width: wp('45%'),
                              height: hp('30%'),
                            }}
                            resizeMode="cover"
                          />
                        </Pressable>
                      </View>
                      <Mytxt
                        txt={val.title}
                        style={{
                          fontSize: hp('2'),
                          fontWeight: '700',
                          color: colors.black,
                          alignSelf: 'flex-start',
                        }}
                      />
                      <Mytxt
                        txt={val.description.slice(0, 20)}
                        style={{
                          fontSize: hp('1.5'),
                          fontWeight: '500',
                          color: colors.gray,
                          alignSelf: 'flex-start',
                        }}
                      />
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

export default VirtualizedList;
