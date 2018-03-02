import React, { Component } from 'react';  // This import has to be in every component
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';  //This is where you import the components from react-native which you want to use (e.g. View, Button, ...)
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Speaker from './src/components/speakers/Speaker';  //This is an example of a importing a component we have written.
import Program from './src/components/program/Program';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
 
const FirstRoute = () => <View style={[ styles.container, { backgroundColor: 'whitesmoke' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: 'whitesmoke' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'whitesmoke' } ]} />;

let numberOne = '1';
let numberTwo = '2';
let numberThree = '3';


export default class App extends Component {  // This is where you name the component and export it for use. This also has to be in every component.

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Speakers' },
      { key: 'second', title: 'Program' },
      { key: 'third', title: 'Info' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
 
  _renderFooter = props => <TabBar
                             style={styles.tabs} 
                             indicatorStyle={styles.tabIndicatorStyle} 
                             labelStyle={styles.tabLabelStyle}
                             {...props} 
                            />;
 
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });


  render() {  // Every component needs a render method that returns the JSX you want to display


    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  container: {
    flex: 1,
  },
  tabs: {  // Styles for the tab boxes
    backgroundColor: '#e6e6ec',
  },
  tabLabelStyle: {  // Styles for the tabs label text
    color: '#2a2d22',
  },
  tabIndicatorStyle: {  // Styles for the current tab indicator
    backgroundColor: '#018440',  // This sets the indicator color
    height: 3,  // Sets the height of the indicator
    borderRadius: 15,
  }
});
