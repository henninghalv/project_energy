import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, Button, Alert} from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)

// You have to export the Component so that it can be used by other components, especially App.js
export default class Program extends Component { // Remember to give the component the right name!
	render() {
		return (
            <Button style={styles.button} 
                title = "Press me!"
                onPress = {onPressButton}
                accessabilityLable = "Heisan"
                color = "black">  
            </Button>
		);
	}
}

const onPressButton = () => {Alert.alert("Hei")}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
    viewStyles: {
      // Here you can write styles for the different components, in this case the View
  }
});