import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
//import Row from './Row';

// You have to export the Component so that it can be used by other components, especially App.js
export default class ListViewDemo extends Component { // Remember to give the component the right name!
	constructor (props) { 

    super (props); 

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 }); 

    this.state = { 
      dataSource: ds.cloneWithRows(['IngWild', 'RobBeast', 'sHredmaster']) 
    }; 
  } 

  render () { 
    return ( 
      <ListView 
        style = {styles.container}
        dataSource = { this.state.dataSource } 
        renderRow = { (rowData) => <Text style={styles.rowStyle}>  
          { rowData } </Text> } // Her setter vi inn Roberts kode for en row
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      /> 
    ); 
  } 
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  rowStyle: {
    color: 'forestgreen',
    fontSize: 30,
  },
  container: {
    flex: 1,
    //marginTop: 60,
    backgroundColor: 'whitesmoke',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
