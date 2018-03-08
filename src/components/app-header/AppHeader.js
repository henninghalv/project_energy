import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, Text } from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)

// You have to export the Component so that it can be used by other components, especially App.js
export default class AppHeader extends Component { // Remember to give the component the right name!
	render() {
		return (
			<View style={styles.viewStyles}>
				<Text style={styles.textStyles}>{this.props.headerText}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  viewStyles: {
      // Here you can write styles for the different components, in this case the View
      backgroundColor: 'forestgreen'
  },
  textStyles: {
	fontSize: 36,
    fontFamily: 'PatuaOne',
	textAlign: 'center',
	color: 'whitesmoke'
  }

});