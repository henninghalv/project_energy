import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, ImageBackground} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
import ProgramRow from './ProgramRow';
import data from './ProgramData';

// You have to export the Component so that it can be used by other components, especially App.js
export default class ProgramListView extends Component { // Remember to give the component the right name!
	constructor (props) { 
    super (props); 

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 }); 

    this.state = { 
      dataSource: ds.cloneWithRows(data), 
    }; 
  } 


  render () { 
    return ( 
      <ImageBackground
        source={require('../../../assets/inspo/Banner-30opa.png')}
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
      >
        <ListView 
          style = {styles.container}
          dataSource = { this.state.dataSource } 
          renderRow = {(data) => <ProgramRow {...data} />}  
        /> 
      </ImageBackground>
    ); 
  } 
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
},
});
