import React, {useState} from 'react';
import {View, StyleSheet, Alert, Pressable} from 'react-native';
import Icons from '../../components/icons/Icons';
import {Mytxt} from '../../constant/file';
import colors from '../../constant/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Counter = () => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () =>{if (counter < 10){ setCounter(counter + 1);}}
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  
    return (
    <View style={styles.container}>
      <View style={styles.activity}>
        <Pressable onPress={decrementCounter}>
          <View style={styles.minus}>
            <Icons
              name={'minus'}
              iconType={'AntDesign'}
              size={14}
              color={colors.white}
            />
          </View>
        </Pressable>
        <View style={styles.value}>
          <Mytxt style={styles.increse} txt={counter} />
          {/* {counter} */}
        </View>
        <Pressable onPress={incrementCounter}>
          <View style={styles.plus}>
            <Icons
              name={'plus'}
              iconType={'AntDesign'}
              size={14}
              color={colors.white}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activity: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    // alignContent:'flex-start'
    // justifyContent
  },
  minus: {
    justifyContent: 'center',
    marginRight: wp('4'),
    backgroundColor: colors.black,
    padding: 1,
    borderRadius: 5,
  },
  plus: {
    justifyContent: 'center',
    backgroundColor: colors.black,
    padding: 1,
    borderRadius: 5,
    marginLeft: wp('4'),
  },
  increse:{
    color:colors.black
  }
});

export default Counter;
