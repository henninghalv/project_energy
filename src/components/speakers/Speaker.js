import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native'; //Remember to import the right components!

export default class Speaker extends Component { //Remember to give the class the right name!
	render() {
		return (
			<View style={styles.speaker}>
			{/* 
          Props are the parameters passed to this component when they are used/created. See App.js.
        */}
				<Text style={styles.text}>This is Speaker-Component number {this.props.speakerNumber}</Text>  
			</View>
		);
	}
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  speaker: {
		width: '80%',
		height: 100,
		backgroundColor: 'red',  //Used ugly colors to make things clear and visible
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
	},
	text: {
		marginHorizontal: 40,
		color: 'white',
	}
});