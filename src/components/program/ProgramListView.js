import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
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
      <ListView 
        style = {styles.container}
        dataSource = { this.state.dataSource } 
        renderRow = {(data) => <ProgramRow {...data} />}  
      /> 
    ); 
  } 
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  container: {
    flex: 1,
    paddingLeft: 5,
    backgroundColor: 'whitesmoke',
  },
});
