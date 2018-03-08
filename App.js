import React, { Component } from 'react';  // This import has to be in every component
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';  //This is where you import the components from react-native which you want to use (e.g. View, Button, ...)
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Speaker from './src/components/speakers/Speaker';  //This is an example of a importing a component we have written.
import Program from './src/components/program/Program';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
 
const FirstRoute = () => 
  <View style={[ styles.container, { backgroundColor: '#ff4081' } ]}>
    <Speaker 
      //source='/home/robert/Documents/project_energy/src/components/speakers/putin.jpeg'
      description='This is Valdimir Putin, he is president in Russia.' />
  </View>;
const SecondRoute = () => 
<View style={[ styles.container, { backgroundColor: '#673ab7' } ]}>
  <Program/>
</View>
;

let numberOne = '1';
let numberTwo = '2';
let numberThree = '3';


export default class App extends Component {  // This is where you name the component and export it for use. This also has to be in every component.

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
 
  _renderHeader = props => <TabBar {...props} />;
 
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });


  render() {  // Every component needs a render method that returns the JSX you want to display


    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />

      // <View style={styles.container}>
      //   <Text style={styles.text}>This is the App.js</Text>
      //   {/* 
      //     This is how to comment inside the return function
      //     Below is a typical usage of a component we created (Speaker)
      //     The prop speakerNumber is passed to give each speaker-component individuallity
      //   */}
      //   <Speaker style={styles.speaker} id='speaker-one' speakerNumber = {numberOne}/>
      //   <Speaker style={styles.speaker} id='speaker-two' speakerNumber = {numberTwo}/>
      //   <Speaker style={styles.speaker} id='speaker-three' speakerNumber = {numberThree}/>
      //   <Text style={styles.text}>Merry Christmas!</Text>
      //   <Program/>
      // </View>
    );
  }
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
    // width: '100%',
    // backgroundColor: 'green',  // Used ugly colors to make things clear and visible
    flex: 1,
  },
  text: {
    color: 'white',
  },
});
