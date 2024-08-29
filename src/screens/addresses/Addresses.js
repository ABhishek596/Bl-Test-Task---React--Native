import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  ImageBackground,
  Alert,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useRoute} from '@react-navigation/native';
import {
  SubmitBtn,
  Mytxt,
  SimpleHeader,
  FormInputField,
} from '../../constant/file';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import colors from '../../constant/colors';
import {useDispatch, useSelector} from 'react-redux';
import {addAddress, updateAddress} from '../../redux/slices/AddressSlice';
import uuid from 'react-native-uuid';

const Addresses = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBoxc, setToggleCheckBoxc] = useState(false);
  const [toggleCheckBoxd, setToggleCheckBoxd] = useState(false);
  const [toggleCheckBoxe, setToggleCheckBoxe] = useState(false);

  

  const route = useRoute();
  const [type, setType] = useState(
    // route.params.type == 'edit'
    //   ? route.params.data.type == 'Home'
    //     ? 1
    //     : 2
    //   : 1,
    1
  );

  const dispatch = useDispatch();
  const [name, setName] =
    useState();
    // route.params.type == 'edit' ? route.params.data.name : '',
  const [mobile, setMobile] =
    useState();
    // route.params.type == 'edit' ? route.params.data.mobile : '',
  const [state, setState] =
    useState();
    // route.params.type == 'edit' ? route.params.data.state : '',
  const [pincode, setPincode] =
    useState();
    // route.params.type == 'edit' ? route.params.data.pincode : '',
  const [address, setAddress] =
    useState();
    // route.params.type == 'edit' ? route.params.data.address : '',
  const [locality, setLocality] =
    useState();
    // route.params.type == 'edit' ? route.params.data.locality : '',
  const [city, setCity] =
    useState();
    // route.params.type == 'edit' ? route.params.data.city : '',

  return (
    <View style={styles.container}>
      <View style={styles.containertop}>
        <SimpleHeader
          name={'Address'}
          size={28}
          onPress={() => navigation.goBack()}
          borderBottomWidth={1}
        />
        <View style={styles.toptxt}>
          <Mytxt
            txt={'ADD NEW ADDRESS'}
            style={{
              alignSelf: 'flex-start',
              color: colors.black,
              padding: wp('4'),
              fontSize: wp('4'),
            }}
          />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.main}>
            <FormInputField
              inputContainerStyle={{
                width: wp('90%'),
                backgroundColor: colors.cream,
                borderWidth: 0,
                marginTop: hp('7%'),
              }}
              textInputStyle={{
                width: wp('85%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Name *"
              value={name}
              onChangeText={txt => setName(txt)}
            />
            <View style={{paddingBottom: hp('5%')}}>
              <FormInputField
                inputContainerStyle={{
                  width: wp('90%'),
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  marginTop: hp('5%'),
                  // paddingBottom:hp('3')
                }}
                textInputStyle={{
                  width: wp('85%'),
                  alignSelf: 'center',
                  marginRight: wp('5'),
                }}
                placeholder="Mobile *"
                value={mobile}
                onChangeText={txt => setMobile(txt)}
              />
            </View>
          </View>

          <View style={styles.main}>
            <FormInputField
              inputContainerStyle={{
                width: wp('90%'),
                backgroundColor: colors.cream,
                borderWidth: 0,
                marginTop: hp('7%'),
              }}
              textInputStyle={{
                width: wp('85%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="State *"
              value={state}
              onChangeText={txt => setState(txt)}
            />

            <FormInputField
              inputContainerStyle={{
                width: wp('90%'),
                backgroundColor: colors.cream,
                borderWidth: 0,
                marginTop: hp('5%'),
                // paddingBottom:hp('3')
              }}
              textInputStyle={{
                width: wp('85%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Pincode *"
              value={pincode}
              onChangeText={txt => setPincode(txt)}
            />
            <FormInputField
              inputContainerStyle={{
                width: wp('90%'),
                backgroundColor: colors.cream,
                borderWidth: 0,
                marginTop: hp('5%'),
                // paddingBottom:hp('3')
              }}
              textInputStyle={{
                width: wp('85%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Address(House No, Building, Street, Area) *"
              value={address}
              onChangeText={txt => setAddress(txt)}
            />
            <FormInputField
              inputContainerStyle={{
                width: wp('90%'),
                backgroundColor: colors.cream,
                borderWidth: 0,
                marginTop: hp('5%'),
                // paddingBottom:hp('3')
              }}
              textInputStyle={{
                width: wp('85%'),
                alignSelf: 'center',
                marginRight: wp('5'),
              }}
              placeholder="Locality/Town *"
              value={locality}
              onChangeText={txt => setLocality(txt)}
            />
            <View style={{paddingBottom: hp('5%')}}>
              <FormInputField
                inputContainerStyle={{
                  width: wp('90%'),
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  marginTop: hp('5%'),
                  // paddingBottom:hp('3')
                }}
                textInputStyle={{
                  width: wp('85%'),
                  alignSelf: 'center',
                  marginRight: wp('5'),
                }}
                placeholder="City/Distric *"
                value={city}
                onChangeText={txt => setCity(txt)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Mytxt
              txt={'Type of Address *'}
              style={{
                alignSelf: 'flex-start',
                color: colors.black,
                padding: wp('4'),
                fontSize: wp('3.5'),
              }}
            />
            {/* <View style={styles.checkBox}>
              <View>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
              <View>
                <Mytxt txt={'Home'} style={styles.lasttxt} />
              </View>
              <View style={styles.checkBox2}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox1}
                  onValueChange={newValue => setToggleCheckBox1(newValue)}
                />
              </View>
              <View>
                <Mytxt txt={'Office'} style={styles.lasttxt} />
              </View>
            </View> */}
            <View style={styles.typeView}>
              <TouchableOpacity
                style={[
                  styles.typeBtn,
                  {
                    borderWidth: 0.5,
                    borderColor: type == 1 ? 'orange' : 'black',
                  },
                ]}
                onPress={() => {
                  setType(1);
                }}>
                <Image
                  source={
                    type == 1
                      ? require('../../../assets/images/radio_2.png')
                      : require('../../../assets/images/radio_1.png')
                  }
                  style={styles.radio}
                />
                <Text style={styles.radioText}>{'Home'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.typeBtn,
                  {
                    borderWidth: 0.5,
                    borderColor: type == 2 ? 'orange' : 'black',
                  },
                ]}
                onPress={() => {
                  setType(2);
                }}>
                <Image
                  source={
                    type == 2
                      ? require('../../../assets/images/radio_2.png')
                      : require('../../../assets/images/radio_1.png')
                  }
                  style={styles.radio}
                />
                <Text style={styles.radioText}>{'Office'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.j}>
              <Mytxt
                txt={'Is your office open on weekends?'}
                style={styles.line}
              />
            </View>
            <View style={styles.checkBox}>
              <View>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBoxc}
                  onValueChange={newValue => setToggleCheckBoxc(newValue)}
                />
              </View>
              <View>
                <Mytxt txt={'Open on Saturday'} style={styles.lasttxt} />
              </View>
            </View>
            <View style={styles.checkBox}>
              <View>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBoxd}
                  onValueChange={newValue => setToggleCheckBoxd(newValue)}
                />
              </View>
              <View>
                <Mytxt txt={'Open on Sunday'} style={styles.lasttxt} />
              </View>
            </View>
            <View
              style={{
                width: wp('90%'),
                borderBottomWidth: 0.5,
                borderBottomColor: colors.gray,
                alignSelf: 'center',
              }}
            />
            <View style={styles.lastcheckBox}>
              <View>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBoxe}
                  onValueChange={newValue => setToggleCheckBoxe(newValue)}
                />
              </View>
              <View>
                <Mytxt
                  txt={'Make this as my default address'}
                  style={styles.lasttxt}
                />
              </View>
            </View>
          </View>
          <View style={{height: hp('1'), backgroundColor: colors.creame}} />
        </ScrollView>
      </View>
      <View style={styles.containerbottom}>
        <View style={styles.cancle}>
          <Pressable onPress={() => navigation.navigate('SaveAddress')}>
            <Mytxt txt={'CANCLE'} style={styles.cancledone} />
          </Pressable>
        </View>
        <View style={styles.save}>
          <Pressable 
          // onPress={() => navigation.navigate('SaveAddress')}
          onPress={()=>{
            dispatch(
              addAddress({
                name: name,
                mobile: mobile,
                address:address,
                state: state,
                city: city,
                pincode: pincode,
                locality:locality,
                type: type == 1 ? 'Home' : 'office',
                id: uuid.v4(),
              }),
              navigation.navigate('SaveAddress'),
            );
          }}
          >
            <Mytxt txt={'SAVE'} style={styles.savedone} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Addresses;
