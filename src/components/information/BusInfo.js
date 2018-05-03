import React, { Component } from 'react';  // This has to be imported in every component
import { 
    StyleSheet,
    View, 
    ListView, 
    Text, 
    Image, 
    TouchableOpacity, 
    Alert, 
    LayoutAnimation, 
    Animated, 
    PanResponder, 
    UIManager, 
    Platform, 
    TouchableWithoutFeedback } from 'react-native'; 
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import FadeInView from 'react-native-fade-in-view';

export default class BusInfo extends Component { // Remember to give the component the right name!

	render() {
		return (
			<View style={styles.container}>
               <Text style={styles.infoText}> The Bus will arrive shortly... </Text>
			</View>
		);
	}
}

const styles = EStyleSheet.create({  // This is the React Native way to style. This is basically css.
    infoText: {
        fontSize: 18
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width

      },

    '@media (min-width: 400) and (max-width: 1000)': {  //If the screen is smaller than 320px in width

    }
});