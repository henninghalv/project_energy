import React, { Component } from 'react';  
import { StyleSheet, View, Text } from 'react-native';
import BusInfo from './BusInfo'
import Sponsors from './Sponsors'

export default class InformationView extends Component { 
	render() {
		return (
			<View style={styles.viewStyles}>
        <Text style={styles.textStyles}> Hydrogen Fuel Cell Conferance 2018</Text>
        {/* <BusInfo />
        <Sponsors /> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  viewStyles: {
      // Here you can write styles for the different components, in this case the View
  },
  textStyles: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',

  }
});