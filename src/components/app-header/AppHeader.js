import React, { Component } from 'react';  // This has to be imported in every component
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)

// You have to export the Component so that it can be used by other components, especially App.js
export default class AppHeader extends Component { // Remember to give the component the right name!
	render() {
		return (
			<View style={styles.viewStyles}>
				<View style={styles.hiddenIconWrapper}>
					<Text style={styles.hiddenIcon}>
						<FontAwesome>{Icons.star}</FontAwesome>
					</Text>
				</View>
				<Text style={styles.textStyles}>{this.props.headerText}</Text>
				<View style={styles.favoriteIconWrapper}>
					<TouchableOpacity>
						<Text style={styles.favoriteIcon}>
							<FontAwesome>{Icons.star}</FontAwesome>
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  viewStyles: {
      // Here you can write styles for the different components, in this case the View
	  backgroundColor: 'forestgreen',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
  },
  textStyles: {
		fontSize: 36,
  	fontFamily: 'PatuaOne',
		textAlign: 'center',
		color: 'whitesmoke',
	},
	favoriteIconWrapper: {
		justifyContent:'center',
		alignItems: 'center'
	},
  favoriteIcon: {
	  fontSize: 28,
		color: 'white',
	},
	hiddenIcon: {
		fontSize: 28,
		opacity: 0
	}

});