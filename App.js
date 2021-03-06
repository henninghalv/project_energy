import React, { Component } from 'react';  // This import has to be in every component
import { StyleSheet, Text, View, Dimensions, Button, Image, TouchableOpacity, Alert } from 'react-native';  //This is where you import the components from react-native which you want to use (e.g. View, Button, ...)
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Font, AppLoading } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons';

import StatusBarPusher from './src/components/status-bar-pusher/StatusBarPusher';
import AppHeader from './src/components/app-header/AppHeader';
import SpeakerListView from './src/components/speakers/SpeakerListView';
import ProgramListView from './src/components/program/ProgramListView';
import InformationView from './src/components/information/InformationView';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({}); // always call EStyleSheet.build() even if you don't use global variables!


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class App extends Component {  // This is where you name the component and export it for use. This also has to be in every component.

  FirstRoute = () => 
    <View style={[ styles.container, { backgroundColor: 'whitesmoke' } ]}>
      <AppHeader headerText='PROGRAM' isProgramTab={true} toggleFavorites={this.toggleFavorites}/>
      <ProgramListView  ref={(ref) => { this.programListViewRef = ref; }} favoritesEnabled={this.state.favoritesEnabled}/>
    </View>;

  SecondRoute = () =>
    <View style={[ styles.container, { backgroundColor: 'whitesmoke' } ]}>
      <AppHeader headerText='SPEAKERS'/>
      <SpeakerListView ref={(ref) => { this.speakerListViewRef = ref; }}/>
    </View>;

  ThirdRoute = () => 
    <View style={[ styles.container, { backgroundColor: 'whitesmoke' } ]}>
      <AppHeader headerText='INFORMATION'/>
      <InformationView ref={(ref) => { this.informationRef = ref; }}/>
    </View>;

  toggleFavorites = () => {
    this.setState({favoritesEnabled: !this.state.favoritesEnabled})
    this.programListViewRef.setState({favoritesEnabled: !this.programListViewRef.state.favoritesEnabled})
    this.programListViewRef.reRenderListView();
  }

  state = {
    fontLoaded: false,
    favoritesEnabled: false,
    index: 0,
    //This is where you name your routes/tabs and pass props like icons.
    routes: [
      { key: 'first', title: 'Program', icon: <FontAwesome>{Icons.calendarO}</FontAwesome>},
      { key: 'second', title: 'Speakers', icon: <FontAwesome>{Icons.userCircle}</FontAwesome>},  // Here you decide the title of the tab and the icon
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

  scrollToTop = () => {
    if(this.state.index == 0){
      this.programListViewRef.scrollToTop()
    }
    else if(this.state.index == 1){
      this.speakerListViewRef.scrollToTop()
    }
    else{
      this.informationRef.scrollToTop()
    }
  }
  
  _handleIndexChange = index => this.setState({ index });
 
  _renderFooter = (props) => {
      return (
          <TabBar
            style={styles.tabs}
            indicatorStyle={styles.tabIndicatorStyle}
            onTabPress={() => this.scrollToTop()}
            labelStyle={styles.tabLabelStyle}
            renderIcon={this._renderIcon(props)}
            {...props} 
          />
      )
  } 
                           
                            
  // Tells the nav bar the order which the tabs should appear
  _renderScene = SceneMap({
    first: this.FirstRoute,
    second: this.SecondRoute,
    third: this.ThirdRoute,
  });

  _renderIcon = (props) => ({ route, index }) => {
    return <Text>{route.icon}</Text>
  }

  render() {  // Every component needs a render method that returns the JSX you want to display
    if (!this.state.fontLoaded) {
      return <AppLoading />;  // render some progress indicator
    }
    return (
      <View style={styles.container}>
        <StatusBarPusher/>
          <TabViewAnimated
            navigationState={this.state}
            renderScene={this._renderScene}
            renderFooter={this._renderFooter}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          />
      </View>
    );
  }
}

const win = Dimensions.get('window');  // Gets the device window for reference
const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  container: {
    flex: 1
  },
  tabs: {  // Styles for the tab boxes
    backgroundColor: 'whitesmoke',
    borderTopWidth: 0.2,
  },
  tabLabelStyle: {  // Styles for the tabs label text
    color: '#2a2d22',
    fontFamily: 'PatuaOne',
    fontSize: 12
  },
  tabIndicatorStyle: {  // Styles for the current tab indicator
    backgroundColor: '#018440',  // This sets the indicator color
    height: 3,  // Sets the height of the indicator
    borderRadius: 15,
  },
});
