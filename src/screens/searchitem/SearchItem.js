// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   Text,
//   Alert,
//   TextInput,
//   Switch,
//   TouchableOpacity,
//   Pressable,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// // import {FormInputField, SubmitBtn} from '../../../constant/file';
// import {
//   FormInputField,
//   MyButton,
//   Mytxt,
//   SimpleHeader,
//   SubmitBtn,
// } from '../../../constant/file';
// import colors from '../../../constant/colors';
// import styles from './styles';
// import axios from 'axios';
// const SearchItem = () => {
//   return (
//     <View>
//       <Text>RRR</Text>
//     </View>
//   );
// }

// export default SearchItem;

// // Searching using Search Bar Filter in React Native List View
// // https://aboutreact.com/react-native-search-bar-filter-on-listview/

// // import React in our code
// import React, { useState, useEffect } from 'react';

// // import all the components we are going to use
// import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
// import { SearchBar } from 'react-native-elements';

// const SearchItem = () => {
//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({ item }) => {
//     return (
//       // Flat List Item
//       <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//         {item.id}
//         {'.'}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

//   const getItem = (item) => {
//     // Function for click on an item
//     alert('Id : ' + item.id + ' Title : ' + item.title);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <SearchBar
//           round
//           searchIcon={{ size: 24 }}
//           onChangeText={(text) => searchFilterFunction(text)}
//           onClear={(text) => searchFilterFunction('')}
//           placeholder="Type Here..."
//           value={search}
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10,
//   },
// });

// export default SearchItem;

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
// import Header from '../../components/header/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchItem = ({navigation}) => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  //console.log('resultredux', JSON.stringify(products));

  const flattenArray = data => {
    let result = [];

    const flatten = item => {
      result.push(item);

      if (item.hasOwnProperty('data') && Array.isArray(item.data)) {
        item.data.forEach(flatten);
      }
    };

    if (Array.isArray(data)) {
      data.forEach(flatten);
    }

    return result;
  };

  // // Usage
  // const productData = {
  //   // ... JSON data ...
  // };

  const flattenedArray = flattenArray(products.product.data);
  //console.log('resultreduxhghhghgghghghghghgh', JSON.stringify(flattenedArray));

  const [oldData, setOldData] = useState(flattenedArray);
  //console.log('oldData', JSON.stringify(oldData));
  const [searchedList, setSearchedList] = useState(oldData);
  
  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchedList(newData);
    //console.log('filterData', JSON.stringify(newData));
  };

  return (
    <View style={styles.container}>
      {/* <Header title={'Search Items'} /> */}
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/search.png')}
            style={styles.icon}
          />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder="Search items here..."
            style={styles.input}
          />
        </View>

        {search !== '' && (
          <TouchableOpacity
            style={[
              styles.icon,
              {justifyContent: 'center', alignItems: 'center'},
            ]}
            onPress={() => {
              setSearch('');
              filterData('');
            }}>
            <Image
              source={require('../../../assets/images/clear.png')}
              style={[styles.icon, {width: 16, height: 16}]}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop: 50, flex: 1}}>
        <FlatList
          data={searchedList}
          renderItem={({item, index}) => {
            //console.log(item.uri);
            return (
              <TouchableOpacity
                // activeOpacity={1}
                style={styles.productItem}
                onPress={() => navigation.navigate('NormalPageNevigator', {
                  screen: 'ProductDetails',
                  params: { data: item },
                })}
                // onPress={() => {
                //   navigation.navigate('ProductDetail', {data: item});
                // }}
              >
                <Image source={{uri: item.uri}} style={styles.itemImage} />
                <View>
                  <Text style={styles.name}>
                    {item.title}
                    {/* {item.title.length > 25
                      ? item.title.substring(0, 25) + '...'
                      : item.title} */}
                  </Text>
                  <Text style={styles.desc}>{item.des}</Text>
                  <Text style={styles.price}>{'$' + item.prize}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{height: hp('2')}}></View>
      </View>
    </View>
  );
};

export default SearchItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    top: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
  },
  input: {width: '80%', marginLeft: 10},
  productItem: {
    width: Dimensions.get('window').width,
    height: hp('18'),
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
  },
});
