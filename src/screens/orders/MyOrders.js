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
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SubmitBtn, Mytxt, SimpleHeader} from '../../constant/file';
import styles from './styles';
import colors from '../../constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MyOrders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SimpleHeader
        name={'Orders'}
        // size={28}
        onPress={() => navigation.goBack()}
        borderBottomWidth={1}
      />
      <ScrollView>
        <View style={styles.nowishlist}>
          <View style={styles.on}>
            <Image
              style={styles.stretch}
              source={require('../../../assets/images/Pngtree.png')}
            />
          </View>
          <Mytxt
            txt={`You haven't placed any order yet!`}
            style={{
              fontSize: hp('2.5'),
              fontWeight: '500',
              color: colors.black,
              alignSelf: 'center',
              
            }}
          />

          <Mytxt
            txt={
              'Order section is empty.After placing order, you can track them from here!'
            }
            style={{
              fontSize: hp('1.98'),
              fontWeight: '500',
              color: colors.gray,
              alignSelf: 'center',
              marginTop: hp('2'),
             
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrders;
