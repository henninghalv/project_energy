import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, ImageBackground, TouchableOpacity,} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
import ProgramRow from './ProgramRow';
import data from './ProgramData';
import realData from './RealProgramData';

// You have to export the Component so that it can be used by other components, especially App.js
export default class ProgramListView extends Component { // Remember to give the component the right name!
	constructor (props) { 
    super (props); 

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 

    
    this.state = { 
      dataSource: ds.cloneWithRows(realData), 
    }; 

  } 

  printDataSource(){
    console.log(this.state.dataSource)
  }

  render () { 
    return ( 
      <ImageBackground
        source={require('../../../assets/inspo/Banner-30opa.png')}
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
      >
        <View style={styles.daySelectContainer}>
          <TouchableOpacity style={styles.daySelectButton} onPress={this.printDataSource()}>
            <Text style={styles.buttonText}> MONDAY </Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.daySelectButton}>
            <Text style={styles.buttonText}> TUESDAY </Text>
          </TouchableOpacity>
        </View>
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
  daySelectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  daySelectButton: {
    borderWidth: 0.8,
    marginHorizontal: 2,
    marginTop: 5,
    paddingHorizontal: 28,
    paddingVertical: 5,
    backgroundColor: 'white',
    opacity: 0.8
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'PatuaOne',
    color: '#2a2d22',
  }
});
