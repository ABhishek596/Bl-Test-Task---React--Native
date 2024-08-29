import React, {useState} from 'react';
import {
  Alert,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constant/colors';
import {SubmitBtn, Mytxt} from '../../constant/file';

const CategoriesView = props => {
  const {navigation, route} = props;
  const data = route?.params?.data;
  //console.log('pppppppppppppppppppppppppppppp', route);
  //console.log('secondscreenvaldata', data);

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Products', {data: item.data})}>
        <View
          style={{
            //   height: wp('75'),
            // width: wp('46.5'),
            // borderRadius: wp('20'),
            // alignSelf: 'center',
            //   marginRight: wp('3'),
            // borderWidth:2,
            marginBottom: hp('1'),
          }}>
          <View
            style={{
              height: wp('55'),
              width: wp('46.5'),
              backgroundColor: colors.inputBorderColor,
              // borderRadius: wp('20'),
              // alignSelf: 'center',
              // marginTop: hp('2'),
            }}>
            <Image
              source={{
                uri:
                  item.uri ||
                  'https://images.unsplash.com/photo-1548615599-fb490ae62817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
              style={{
                height: wp('55'),
                width: wp('46.5'),
                // borderRadius: wp('20'),
                // alignSelf: 'center',
                // marginTop: hp('2'),
              }}
              resizeMode="cover"
            />
          </View>
          <Mytxt
            txt={item.title}
            style={{
              fontSize: hp('2'),
              fontWeight: '700',
              color: colors.black,
              alignSelf: 'flex-start',
            }}
          />
          <Mytxt
            txt={item.des}
            style={{
              fontSize: hp('1.5'),
              fontWeight: '500',
              color: colors.gray,
              alignSelf: 'flex-start',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
        keyExtractor={item => item.title}
        // contentContainerStyle={{justifyContent:'space-between', alignItems:'center'}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        style={{width: wp('95'), alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
};

export default CategoriesView;
