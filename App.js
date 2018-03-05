import React, { Component } from 'react';  // This import has to be in every component
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';  //This is where you import the components from react-native which you want to use (e.g. View, Button, ...)
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Font, AppLoading } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons';
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
    fontLoaded: false,
    index: 0,
    routes: [
      { key: 'first', title: 'Speakers', icon: <FontAwesome>{Icons.userCircle}</FontAwesome>},  // Here you decide the title of the tab and the icon
      { key: 'second', title: 'Program', icon: <FontAwesome>{Icons.calendarO}</FontAwesome>},
      { key: 'third', title: 'Info', icon: <FontAwesome>{Icons.infoCircle}</FontAwesome>},
    ],
  };

  // This method runs as soon as the component has been loaded
  async componentDidMount(){
    // This is where you load custom fonts. You can see a clear pattern.
    await Expo.Font.loadAsync({
      RalewayMedium: require('./assets/fonts/Raleway/Raleway-Medium.ttf'),
      RobotoMono: require('./assets/fonts/Roboto_Mono/RobotoMono-Medium.ttf'),
      PatuaOne: require('./assets/fonts/Patua_One/PatuaOne-Regular.ttf'),
      FontAwesome: require('./assets/fonts/FontAwesome.ttf'),
    }); 
    this.setState({ fontLoaded: true });
  }
  
  _handleIndexChange = index => this.setState({ index });
 
  _renderFooter = props => <TabBar
                             style={styles.tabs} 
                             indicatorStyle={styles.tabIndicatorStyle} 
                             labelStyle={styles.tabLabelStyle}
                             renderIcon={this._renderIcon(props)}
                             {...props} 
                            />;
 
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });


  _renderIcon = (props) => ({ route, index }) => {
    return <Text>{route.icon}</Text>
  }

  render() {  // Every component needs a render method that returns the JSX you want to display
    if (!this.state.fontLoaded) {
      return <AppLoading />;  // render some progress indicator
    }
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
    fontFamily: 'PatuaOne',
  },
  tabIndicatorStyle: {  // Styles for the current tab indicator
    backgroundColor: '#018440',  // This sets the indicator color
    height: 3,  // Sets the height of the indicator
    borderRadius: 15,
  }
});
