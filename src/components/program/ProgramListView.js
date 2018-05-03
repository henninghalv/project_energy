import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
import EStyleSheet from 'react-native-extended-stylesheet';
import {Constants, Permissions, Notifications} from 'expo'
import ProgramRow from './ProgramRow';
import data from './ProgramData';  

// You have to export the Component so that it can be used by other components, especially App.js


export default class ProgramListView extends Component { // Remember to give the component the right name!

	constructor (props) { 
    super (props); 
    
    let ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 

    this.state = {
      dataSource: ds.cloneWithRows(data),  
      mondayEnabled: false, 
      tuesdayEnabled: false,
      favoriteEnabled: false,  //This row is favorited
      favoritesEnabled: false,  //The "View favorites" star is checked
      favorites: this.getFromStorage('favorites'),  //List of row ID's
      notifications: this.getFromStorage('notifications'),  //Get mapping of notifications to favorites
      isLoading: true,
    }; 
  }

  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (Constants.isDevice && result.status === 'granted') {
      console.log('Notification permissions granted.')
    }
  }

  // Runs when data is finished loading from AsyncStorage
  doneLoading = () => {
    console.log("Running done loading...")
    this.setState({isLoading: false}, console.log("Done Loading!"))
  }

  // Setup local noticiations
  enableNotification = (title, body, timestamp, childId) => {
    let localNotification = {
      title: title,
      body: body, // (string) — body text of the notification.
      ios: { // (optional) (object) — notification configuration specific to iOS.
        sound: true // (optional) (boolean) — if true, play a sound. Default: false.
      },
    android: // (optional) (object) — notification configuration specific to Android.
      {
        sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
        //icon (optional) (string) — URL of icon to display in notification drawer.
        color: 'forestgreen', //(optional) (string) — color of the notification icon in notification drawer.
        priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
        sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
        vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
        // link (optional) (string) — external link to open when notification is selected.
      }
    };
    
    let t = new Date();  // Create a new date that is now
    console.log("NOW:   " + Date.now())
    console.log("EVENT:   " + timestamp)
    let secondsUntilNotify = (timestamp - Date.now()) / 1000;
    console.log(secondsUntilNotify)
    if(secondsUntilNotify > 0){
      t.setSeconds(secondsUntilNotify);  
      const schedulingOptions = {
          time: t, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
          // repeat: 'minute'
        };
        
      Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
        .then((id) => {
          let newNotifications = this.state.notifications;
          newNotifications.push({'rowId': childId, 'notificationId': id})
          console.log("NEW NOTIFICATIONS:   " + newNotifications)
          this.saveToStorage('notifications', newNotifications)
          this.setState({notifications: newNotifications})
        });
    }
    else {
      //TODO: Handle event been
      console.log("Event has passed!")
    }
    
  }

  disableNotification = (childId) => {
    //TODO: Disable notification based on id
    console.log("DISABLING NOTIFICATION>>>")
    this.state.notifications.forEach(notification => {
      console.log("Notification.rowId:   " + notification.rowId)
      console.log("ChildId:   " + childId)
      console.log(notification.rowId == childId)
      if(notification.rowId == childId){
        console.log("Disable notification:   " + notification.rowId)
        Notifications.dismissNotificationAsync(notification.notificationId)
        this.saveToStorage('notifications', this.state.notifications.filter(e => e.rowId !== childId))
        this.setState({notifications: this.state.notifications.filter(e => e.rowId !== childId)})
      }
    });
  }

  // Save values to AsyncStorage
  async saveToStorage(name, value){
    console.log("SAVE>>> name: " + name + " array: " + value);
    try {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }
  // Get value from AsyncStorage
  async getFromStorage(name){
    try {
      await AsyncStorage.getItem(name).then((value) => {
        if(value != null){
          this.setState({[name]: JSON.parse(value)}, this.doneLoading);
        }
        else{
          this.setState({[name]: []}, this.doneLoading);
        }
      }).done();
    }
    catch (error) {
      console.log("Error retrieving data " + error);
    }
  }

  toggleFavorites = (title, location, timestamp, childId) => {
    if(!this.state.favorites.includes(childId)){  // If not a favorite, add to favorites
      this.addFavorite(title, location, timestamp, childId)
    }
    else{  // If a favorite, remove it
      this.removeFavorite(childId);
    }
  }

  addFavorite = (title, location, timestamp, childId) => {
    let newFavorites = this.state.favorites;
      newFavorites.push(childId)
      try{
        this.saveToStorage('favorites', newFavorites)
        this.setState({favorites: newFavorites})
        this.enableNotification("Conference alert!", "Your favorited event: " + title + " starts in 15 minutes at: " + location, timestamp, childId) 
      }  
      catch (error) {
        console.log("Error retrieving data" + error)
      }
  }

  removeFavorite = (childId) => {
    let newFavorites = this.state.favorites.filter(e => e !== childId)
      try {
        this.saveToStorage('favorites', newFavorites)
        this.setState({favorites: newFavorites})
        this.disableNotification(childId)
      }
      catch (error) {
        console.log("Error retrieving data" + error);
      }
  }
  
  reRenderListView(){
    this.setState({
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !==
      r2 }).cloneWithRows(data)  
    });
  }

  toggleMondayFilter = () => {
    {this.state.tuesdayEnabled ? this.setState({tuesdayEnabled: !this.state.tuesdayEnabled}) : null}
    this.setState({mondayEnabled: !this.state.mondayEnabled})
    this.reRenderListView()
  }

  toggleTuesdayFilter = () => {
    {this.state.mondayEnabled ? this.setState({mondayEnabled: !this.state.mondayEnabled}) : null}
    this.setState({tuesdayEnabled: !this.state.tuesdayEnabled})
    this.reRenderListView()
  }

  scrollToTop = () => {
    this.listViewRef.getScrollResponder().scrollTo({x: 0, y: 0, animated: true})
  }

  rowGetter = (data, rowID, isFavorite) => {
    return <ProgramRow {...data} rowID={rowID} toggleFavorites={this.toggleFavorites} isFavorite={isFavorite}/>
  }

  renderRow = (data, sectionID, rowID) => {
    //TODO: Extract to several methods ?
    isFavorite = this.state.favorites.includes(rowID)
    if(this.state.favoritesEnabled){
      if(isFavorite){
        if(this.state.mondayEnabled && !this.state.tuesdayEnabled){
          return data.day == "Monday" ? this.rowGetter(data, rowID, isFavorite) : null
        }
        else if(!this.state.mondayEnabled && this.state.tuesdayEnabled){
          return data.day == "Tuesday" ? this.rowGetter(data, rowID, isFavorite) : null
        }
        else{
          return this.rowGetter(data, rowID, isFavorite)
        }
      }
      //If no:
      else{
        return null
      }
    }
    else{
      if(this.state.mondayEnabled && !this.state.tuesdayEnabled){
        return data.day == "Monday" ? this.rowGetter(data, rowID, isFavorite) : null
      }
      else if(!this.state.mondayEnabled && this.state.tuesdayEnabled){
        return data.day == "Tuesday" ? this.rowGetter(data, rowID, isFavorite) : null
      }
      else{
        return this.rowGetter(data, rowID, isFavorite)
      }
    }
  }

  render () { 
    return ( 
      <ImageBackground
        source={require('../../../assets/img/banner-done.png')}
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
      >
        <View style={styles.daySelectContainer}>
          <TouchableOpacity style={this.state.mondayEnabled ? styles.daySelectButtonSelected : styles.daySelectButtonDeSelected} onPress={this.toggleMondayFilter}>
            <Text style={this.state.mondayEnabled ? styles.buttonTextSelected : styles.buttonTextDeSelected}> MONDAY </Text> 
          </TouchableOpacity>
          <TouchableOpacity style={this.state.tuesdayEnabled ? styles.daySelectButtonSelected : styles.daySelectButtonDeSelected} onPress={this.toggleTuesdayFilter}>
            <Text style={this.state.tuesdayEnabled ? styles.buttonTextSelected : styles.buttonTextDeSelected}> TUESDAY </Text>
          </TouchableOpacity>
        </View>
        {this.state.isLoading ? <Text style={styles.loadingText}> Loading... </Text> : 
        <ListView 
          ref={(c) => {this.listViewRef = c}}
          style = {styles.container}
          dataSource = { this.state.dataSource } 
          renderRow = {this.renderRow}  
        />
        }
      </ImageBackground>
    ); 
  } 
}

const styles = EStyleSheet.create({  // This is the React Native way to style. This is basically css.
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
  daySelectButtonSelected: {
    borderWidth: 0.8,
    marginHorizontal: 2,
    marginTop: 5,
    paddingHorizontal: 28,
    paddingVertical: 5,
    backgroundColor: '#2a2d22',
    opacity: 0.8
  },
  daySelectButtonDeSelected: {
    borderWidth: 0.8,
    marginHorizontal: 2,
    marginTop: 5,
    paddingHorizontal: 28,
    paddingVertical: 5,
    backgroundColor: 'white',
    opacity: 0.8
  },
  buttonTextSelected: {
    fontSize: 24,
    fontFamily: 'PatuaOne',
    color: 'white',
  },
  buttonTextDeSelected: {
    fontSize: 24,
    fontFamily: 'PatuaOne',
    color: '#2a2d22',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'PatuaOne',
    color: '#2a2d22',
  },
  '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
    buttonTextSelected:{
      fontSize: 18,
    },
    buttonTextDeSelected: {
      fontSize: 18,
    }
  }
});
