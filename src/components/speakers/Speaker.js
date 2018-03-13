import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, ListView, Image} from 'react-native'; //Remember to import the right components!

let src = require('./putin.jpeg')

export default class Speaker extends Component { //Remember to give the class the right name!
	render() {
		return (
			<View>
				<Image source={src}/>
				<Text> {this.props.description} </Text>  
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