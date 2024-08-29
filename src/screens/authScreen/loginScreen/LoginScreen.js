import React, {useState} from 'react';
import {
  View,
  Pressable,
} from 'react-native';
import {
  FormInputField,
  MyButton,
  Mytxt,
  SimpleHeader,
  SubmitBtn,
} from '../../../constant/file';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../constant/colors';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const LoginScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const mySubmitData = async () => {
    if (email === '') {
      alert('Please enter email');
    } else if (password === '') {
      alert('Please enter password');
    } else {
      setLoading(true);
      
      try {
        const storedData = await AsyncStorage.getItem('userData');
        const parsedData = storedData ? JSON.parse(storedData) : null;

        if (parsedData && parsedData.email === email && parsedData.password === password) {
          alert('Login successful');
          navigation.navigate('BottomNevigator'); 
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        //console.log('Error retrieving data from AsyncStorage:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <SimpleHeader
          size={28}
          onPress={() => navigation.goBack()}
          borderBottomWidth={1}
          name={'Login'}
        />
        <View style={styles.containermain}>
          <View>
            <Mytxt txt={'Existing Customer'} style={styles.title} />
          </View>

          <View style={styles.textd}>
            <Mytxt txt={'Your Email'} style={styles.passwordtxt} />
          </View>

          <View>
            <FormInputField
              placeholder="Email"
              inputContainerStyle={{
                backgroundColor: 'colors.cream',
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: 'colors.cream',
              }}
              keyboardType="email-address"
              textInputStyle={{fontSize: 14}}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>

          <View>
            <Mytxt txt={'Password'} style={styles.passwordtxt} />
          </View>

          <View>
            <FormInputField
              placeholder="Password"
              inputContainerStyle={{
                backgroundColor: 'colors.cream',
                borderWidth: 0,
                height: hp('6%'),
              }}
              containerStyle={{
                backgroundColor: 'colors.cream',
              }}
              keyboardType="default"
              textInputStyle={{fontSize: 14}}
              value={password}
              onChangeText={password => {
                setPassword(password);
              }}
              secureTextEntry
            />
          </View>

          <View style={styles.flexone}>
            <View>
              
            </View>
            <Pressable>
              <Mytxt style={styles.textb} txt={'Forgot Password'} />
            </Pressable>
          </View>

          <View style={styles.buttonstyle}>
            <SubmitBtn
              label="LogIn"
              onPress={() => mySubmitData()}
            />
          </View>
          <View style={styles.lasttext}>
            <Mytxt style={styles.textc} txt={'New Customer?'} />
          </View>
          <View style={styles.secondbuttonstyle}>
            <MyButton
              title="Create account"
              txtcolor={colors.black}
              h={45}
              w={'100%'}
              bgColor={colors.cream}
              fontSize={16}
              bw={1}
              radius={10}
              borderColor={colors.process}
              onPress={() => navigation.navigate('SignupScreen')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
