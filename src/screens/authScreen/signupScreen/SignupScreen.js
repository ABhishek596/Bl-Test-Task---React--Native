import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {
  FormInputField,
  SubmitBtn,
  Mytxt,
  SimpleHeader,
} from '../../../constant/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const mySubmitData = async () => {
    if (email === '') {
      alert('Please enter email');
    } else if (password === '') {
      alert('Please enter password');
    }  else if (first_name === '') {
      alert('Please enter first name');
    } else if (last_name === '') {
      alert('Please enter last name');
    } else if (phone === '') {
      alert('Please enter Phone number');
    } else {
      setLoading(true);

      try {
        const userData = {
          email,
          password,
          first_name,
          last_name,
          phone,
        };

        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        alert('Registration successful!');

        navigation.navigate('LoginScreen');

      } catch (error) {
        console.error('Error saving data', error);
        alert('Failed to save data');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <SimpleHeader
          size={28}
          onPress={() => navigation.goBack()}
          borderBottomWidth={1}
          name={'Sign Up'}
        />
        <ScrollView style={styles.responsivebox}>
          <View style={styles.bottom}>
            <View style={styles.toptext}>
              <Mytxt style={styles.txtHighlight} txt={'New Customer'} />
            </View>

            <View style={styles.resister}>
              <FormInputField
                placeholder="First Name"
                inputContainerStyle={{
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  height: hp('6%'),
                }}
                containerStyle={{
                  backgroundColor: colors.cream,
                  marginTop: hp('4%'),
                }}
                textInputStyle={{fontSize: wp('4')}}
                onChangeText={setFirst_name}
                value={first_name}
              />
              <FormInputField
                placeholder="Last Name"
                inputContainerStyle={{
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  height: hp('6%'),
                }}
                containerStyle={{
                  backgroundColor: colors.cream,
                  marginTop: hp('1%'),
                }}
                textInputStyle={{fontSize: wp('4')}}
                onChangeText={setLast_name}
                value={last_name}
              />
              <FormInputField
                placeholder="Email"
                inputContainerStyle={{
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  height: hp('7%'),
                }}
                containerStyle={{
                  backgroundColor: colors.cream,
                  marginTop: hp('1%'),
                }}
                textInputStyle={{fontSize: wp('4')}}
                onChangeText={setEmail}
                value={email}
              />
              <FormInputField
                placeholder="Password"
                inputContainerStyle={{
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  height: hp('7%'),
                }}
                containerStyle={{
                  backgroundColor: colors.cream,
                  marginTop: hp('1%'),
                }}
                textInputStyle={{fontSize: wp('4')}}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
              <FormInputField
                placeholder="Phone"
                inputContainerStyle={{
                  backgroundColor: colors.cream,
                  borderWidth: 0,
                  height: hp('6%'),
                }}
                containerStyle={{
                  backgroundColor: colors.cream,
                  marginTop: hp('1%'),
                }}
                textInputStyle={{fontSize: wp('4')}}
                onChangeText={setPhone}
                value={phone}
              />
          
              <View style={styles.MyButton}>
                <SubmitBtn
                  label="Create account"
                  onPress={mySubmitData}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.endtxt}>
          <Mytxt
            txt={'Terms of Use and Privacy Policy'}
            style={{fontSize: wp('4'), color: colors.black, alignSelf: 'center'}}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
