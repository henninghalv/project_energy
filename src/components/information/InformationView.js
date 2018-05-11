import React, { Component } from 'react';  
import { StyleSheet, View, Text, ImageBackground, ListView , Image} from 'react-native';
import BusInfo from './BusInfo';
import Sponsors from './Sponsors';
import Faq from './Faq';
import Staff from './Staff';
import InformationRow from './InformationRow';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class InformationView extends Component {
 
  scrollToTop = () => {
    this.scrollViewRef.scrollTo({x: 0, y: 0, animated: true})
  }

	render() {
		return (
      <ImageBackground
        source={require('../../../assets/img/banner-done.png')}
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
      >
        <ScrollView ref={(c) => {this.scrollViewRef = c}} style={styles.scrollView}>
          <InformationRow icon={Icons.bus} header='Arrival' content={<BusInfo/>}/>
          <InformationRow icon={Icons.question} header='Help' content={<Faq/>}/>
          <InformationRow icon={Icons.handshakeO} header='Partners' content={<Sponsors/>}/>
          <InformationRow icon={Icons.users} header='Staff' content={<Staff/>}/>
        </ScrollView>
      </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 5,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  pictureStyle: {
    width: 100,
    height: 100,
  }, 

  logoStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 70
  },

  titleText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'PatuaOne',
    color: '#2a2d22',
  },

  textStyles: {
    textAlign: 'center',
  }

});