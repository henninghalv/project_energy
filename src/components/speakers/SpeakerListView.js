import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, ImageBackground} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
import SpeakerRow from './SpeakerRow';
import data from './SpeakerData';

// You have to export the Component so that it can be used by other components, especially App.js
export default class SpeakerListView extends Component { // Remember to give the component the right name!
	constructor (props) { 
    super (props); 

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 }); 

    this.state = { 
      dataSource: ds.cloneWithRows(data), 
    }; 
  } 

  scrollToTop = () => {
    this.listViewRef.getScrollResponder().scrollTo({x: 0, y: 0, animated: true})
  }

  render () { 
    return ( 
      <ImageBackground
      source={require('../../../assets/inspo/Banner-30opa.png')}
      imageStyle={{resizeMode: 'cover'}}
      style={styles.backgroundImage}
      >
      <ListView 
        ref={(c) => {this.listViewRef = c}}
        style = {styles.container}
        dataSource = { this.state.dataSource } 
        renderRow = {(data) => <SpeakerRow {...data} />}  
      /> 
      </ImageBackground>
    ); 
  } 
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  container: {
    flex: 1,
    paddingLeft: 5,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
},
});
