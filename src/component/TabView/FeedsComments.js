import React from 'react';
import { View, Flex, ListView, Dimensions, BackAndroid, TouchableOpacity, Image, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
var REQUEST_URL_LIKE = 'http://139.59.61.15/Roraa/index.php/Service/Feed/Like';
import Toast from 'react-native-simple-toast';

class FeedsComments extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
  }

  _backAndroid = () => {
    if (this.props.navigation.state.routeName === "FeedsComments") {
      this.props.navigation.dispatch(NavigationActions.back());
      return true;
    }
  };

  // feedLike() {
  //   fetch(REQUEST_URL_LIKE, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "feed_id": 1,
  //       "user_id": 2,
  //     })
  //   }).then((response) => response.json())
  //   .then((responseData) => {
  //     //alert(JSON.stringify(responseData.code));
  //     if (responseData.code === 0) {
  //       Toast.show(responseData.response);
  //     } else {
  //       //  Toast.show("");
  //       // this.props.navigation.navigate('RouteView');
  //       Toast.show(responseData.response);
  //     }
  //
  //   })
  //   .done();
  // }

  render() {

    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <ScrollView>
          <View >
            <Image source={require('../../images/tomc.jpg')} style={styles.imagecontainer} />
          </View>
          {/*<View style={{ top: 210, left: 25, position: 'absolute' }}>*/}
            {/*<TouchableOpacity style={{*/}
              {/*backgroundColor: '#FD5A4C',*/}
              {/*width: 120,*/}
              {/*alignItems: 'center',*/}
              {/*justifyContent: 'center',*/}
              {/*height: 25,*/}
              {/*borderRadius: 5*/}
            {/*}} onPress={() => alert('Work in Progress')}>*/}
              {/*<Text style={{ color: 'white' }} >Technology</Text>*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}

          {/*<View>*/}
            {/*<View>*/}
              {/*<Text style={styles.dummy}>Dummy text of the printing and type editing</Text>*/}
            {/*</View>*/}
            {/*<View>*/}
              {/*<Text style={styles.dummytext}>You can now create, . You can also create tokens tha*/}
                {/*You can now create, . You can also create tokens tha*/}
                {/*You can now create, . You can also   create tokens thaYou can now create, . You can also create tokens tha*/}
                {/*You can now create, . You can also create tokens tha*/}
                {/*You can now create, . You can also create tokens tha*/}
                {/*You can now create, . You can also create tokens tha*/}
                {/*This way you can lock down access to your corporate VPN or other trusted machines.*/}
              {/*</Text>*/}
            {/*</View>*/}
          {/*</View>*/}
        </ScrollView>
        <View style={styles.addImageStyle} onPress={() => navigate('')}>
          <Entypo
            name='plus'
            size={30}
            color='white'
            style={styles.addButtonStyle}
          />
        </View>
        <View style={styles.footerStyle}>
          <View style={styles.footerLeft}>
            <Image source={require('../../images/tom.jpg')} style={styles.footerLeftImage} />
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Irfan Ahmad</Text>
          </View>
          <View style={styles.footerRight}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <SimpleLineIcons
                name='heart'
                size={26}
                color='red'
                onPress={() => this.feedLike()}
                style={styles.footerLeftImage}
              />
              <Text style={{ fontSize: 10, bottom: 5 }}>241</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Ionicons
                name='ios-planet-outline'
                size={33}
                color='#e4c40f'
                style={styles.footerLeftImage}
              />
              <Text style={{ fontSize: 10, bottom: 5 }}>241</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name='message-text-outline'
                size={26}
                color='#16f1d6'
                style={styles.footerLeftImage}
              />
              <Text style={{ fontSize: 10, bottom: 5 }}>241</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Entypo
                name='share'
                size={26}
                color='red'
                style={styles.footerLeftImage}
              />
              <Text style={{ fontSize: 10, alignItems: 'center', bottom: 5 }}>241</Text>
            </View>

          </View>
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

  },
  imagecontainer: {
    height: Dimensions.get('window').height / 2 - 70,
    width: Dimensions.get('window').width,
  },



  dummy: {
    alignItems: 'center',
    fontSize: 38,
    justifyContent: 'center',
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
  },
  dummytext: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    padding: 20,
    fontSize: 15,
  },
  footer: {
    width: Dimensions.get('window').width,
    backgroundColor: "transparent",
    bottom: 0,
    alignItems: 'center',
    height: 45,
    position: 'absolute'

  },
  leftfooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightfooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'white'
  },
  footerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20

  },
  footerRight: {
    flexDirection: 'row',
    right: 10,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'

  },
  footerLeftImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    top: 5
  },
  addImageStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 40,
    backgroundColor: '#FD5A4C',
    top: 576,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  addButtonStyle: {
  }
});

export default FeedsComments;
