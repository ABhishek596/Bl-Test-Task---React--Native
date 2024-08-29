import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SubmitBtn, Mytxt} from '../../../constant/file';
import styles from './styles';
import colors from '../../../constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const NoFevouriteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.nowishlist}>
        <View style={styles.on}>
          <SimpleLineIcons
            name="handbag"
            size={80}
            style={{
              color: colors.black,
              alignSelf: 'center',
              bottom: hp('5'),
              // marginBottom: hp('2.5%'),
            }}
          />
        </View>
        <Mytxt
          txt={'No favourite'}
          style={{
            fontSize: hp('4'),
            fontWeight: '500',
            color: colors.black,
            alignSelf: 'center',
            // padding: 8,
          }}
        />
        <Mytxt
          txt={'items yet.'}
          style={{
            fontSize: hp('4'),
            fontWeight: '500',
            color: colors.black,
            alignSelf: 'center',
            // padding: 8,
          }}
        />
        <Mytxt
          txt={'Add your favourite products and easily'}
          style={{
            fontSize: hp('2'),
            fontWeight: '500',
            color: colors.gray,
            alignSelf: 'center',
            marginTop: hp('2'),
            // padding: 8,
          }}
        />
        <Mytxt
          txt={'browse them here.'}
          style={{
            fontSize: hp('2'),
            fontWeight: '500',
            color: colors.gray,
            alignSelf: 'center',
            // padding: 8,
          }}
        />
      </View>
    </View>
  );
};

export default NoFevouriteScreen;
