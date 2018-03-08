import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native'; 

// This component is used to push the content of the app below the status bar of the phone
export default class StatusBarPusher extends Component { 
	render() {
		return (
			<View style={styles.viewStyles}/>
		);
	}
}
const styles = StyleSheet.create({  
  viewStyles: {
      height: 20,
      backgroundColor: 'forestgreen'
  }
});