import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
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
      favorites: [],  //List of row ID's
      isLoading: true,
    }; 
  }

  async componentWillMount () {
    console.log("COMPONENT WILL MOUNT")
    try {
      await AsyncStorage.getItem("favorites").then((value) => {
        console.log("Async: " + value)
        if (value != null) {
          console.log("SETTING STATE")
          this.setState({"favorites": JSON.parse(value)}, this.setState({isLoading: false}));
        }
      }).done();
    }
    catch (error) {
      console.log("Error retrieving data " + error);
    }
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT")
    this.reRenderListView();
  }

  async saveValue(value){
    try {
      await AsyncStorage.setItem("favorites", JSON.stringify(value));
      console.log(value)
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async getValue(){
    try {
      AsyncStorage.getItem("favorites").then((value) => {
        console.log(value)
        this.setState({"favorites": JSON.parse(value)});
      }).done();

    }
    catch (error) {
      console.log("Error retrieving data " + error);
    }
  }

  addToFavorites = (childId) => {
    if(!this.state.favorites.includes(childId)){
      console.log("Adds row " + childId + " to favorites")
      let newFavorites = this.state.favorites;
      newFavorites.push(childId)
      try{
        console.log("New favorites: " +newFavorites)
        this.saveValue(newFavorites)
        this.setState({'favorites': newFavorites})
        this.getValue()
      }  
      catch (error) {
        console.log("Error retrieving data" + error)
      }
    }
    else{
      let newFavorites = this.state.favorites.filter(e => e !== childId)
      try {
        this.saveValue(newFavorites)
        this.setState({favorites: newFavorites})
        console.log("New favorites: " +newFavorites)
        
      }
      catch (error) {
        console.log("Error retrieving data" + error);
      }
    }
  }
  
  reRenderListView(){
    console.log("ReRender...")
    this.setState({
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !==
      r2 }).cloneWithRows(data)  
    });
  }

  toggleMondayFilter = () => {
    console.log("Monday pushed")
    this.setState({mondayEnabled: !this.state.mondayEnabled})
    console.log("Monday enabled:   " + this.state.mondayEnabled)
    this.reRenderListView()
  }

  toggleTuesdayFilter = () => {
    console.log("Tuesday pushed")
    this.setState({tuesdayEnabled: !this.state.tuesdayEnabled})
    console.log("Tuesday enabled:   " + this.state.tuesdayEnabled)
    this.reRenderListView()
    console.log(this.state.favorites)
  }

  enableFavoriteFilter = () => {
    console.log("Favorite pushed")
    this.setState({favoritesEnabled: !this.state.favoritesEnabled})
    console.log(this.state.favorites)
  }

  rowGetter = (data, rowID, isFavorite) => {
    return <ProgramRow {...data} rowID={rowID} addToFavorites={this.addToFavorites} isFavorite={isFavorite}/>
  }

  renderRow = (data, sectionID, rowID) => {
    //TODO: Extract to several methods ?
    console.log("HER ER VI: " + this.state.favorites)
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
        {this.state.isLoading ? <Text> Loading... </Text> : 
        <ListView 
          style = {styles.container}
          dataSource = { this.state.dataSource } 
          renderRow = {this.renderRow}  
        />
        }
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
  daySelectButtonDeSelected: {
    borderWidth: 0.8,
    marginHorizontal: 2,
    marginTop: 5,
    paddingHorizontal: 28,
    paddingVertical: 5,
    backgroundColor: 'white',
    opacity: 0.8
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
  buttonTextDeSelected: {
    fontSize: 24,
    fontFamily: 'PatuaOne',
    color: '#2a2d22',
  },
  buttonTextSelected: {
    fontSize: 24,
    fontFamily: 'PatuaOne',
    color: 'white',
  }
});
