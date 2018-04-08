import React, { Component } from 'react';  // This has to be imported in every component
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)
import { LinearGradient } from 'expo';

// You have to export the Component so that it can be used by other components, especially App.js
export default class AppHeader extends Component { // Remember to give the component the right name!

	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}
	}
	
	onStarPress = () => {
		if(this.state.checked){
			this.setState({checked: false})
		}
		else{
			this.setState({checked: true})
		}
	}


	render() {
		const isChecked = this.state.checked;
		const checkedStar = <FontAwesome>{Icons.star}</FontAwesome>
		const uncheckedStar = <FontAwesome>{Icons.starO}</FontAwesome>

    const hiddenStar = 
      <View style={styles.hiddenIconWrapper}>
        <Text style={styles.hiddenIcon}>
          <FontAwesome>{Icons.star}</FontAwesome>
        </Text>
      </View>
    const star =
      <View style={styles.favoriteIconWrapper}>
        <TouchableOpacity onPress={this.onStarPress}>
          <Text style={styles.favoriteIcon}>
            {isChecked ? checkedStar : uncheckedStar}
          </Text>
        </TouchableOpacity>
      </View>
		return (
			//TODO: Fix this, now there is an invisible star that aligns the header
			<LinearGradient colors={['forestgreen', 'rgb(80,182,100)']} style={styles.viewStyles}>
        {hiddenStar}
				<Text style={styles.textStyles}>{this.props.headerText}</Text>
				{this.props.isProgramTab ? star : hiddenStar}
			</LinearGradient>
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
  	fontFamily: 'RobotoMono',
	  textAlign: 'center',
    color: 'whitesmoke',
		marginVertical: 4,
	},
	
  favoriteIconWrapper: {
	  justifyContent:'center',
    alignItems: 'center',
  },

  favoriteIcon: {
	  fontSize: 28,
    color: 'white',
    padding: 5,
	},
  
  hiddenIcon: {
		fontSize: 28,
		opacity: 0
	}

});