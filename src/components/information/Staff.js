import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, Text } from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)

// You have to export the Component so that it can be used by other components, especially App.js
export default class Staff extends Component { // Remember to give the component the right name!
	render() {
		return (
			<View style={styles.viewStyles}>
                {/* Beautiful code goes here */}
                <Text style={styles.titleText}>Organizing Committee</Text>
                <Text style={styles.memberText}> 
                    Bruno G. Pollet, 
                    Anders Ødegård, 
                    Kristian E. Viky, 
                    Björn Wickman, 
                    Odne S. Burheim, 
                    Kristian M. Lien, 
                    Debbie Koreman van den Bergh, 
                    Anne Lise Berg, 
                    Vibeke Ann Pettersen, 
                    Fredrik Haugland, 
                    Ask Isben Lindal
                </Text>
                <Text style={styles.titleText}>Scientific Committee</Text>
                <Text style={styles.memberText}> 
                    Bruno G. Pollet, 
                    Magnus Thomassen, 
                    Federico Zenith, 
                    Frode Seland, 
                    Kristian M. Lien, 
                    Svein Sunde, 
                    Øystein Ulleberg, 
                    Volodymyr Yartys, 
                    Truls Norby, 
                    Jens Oluf Jensen, 
                    Hans Aage Hjuler, 
                    Björn Wickman
                </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
  viewStyles: {
      marginHorizontal: 5,
      marginVertical: 5,
      paddingHorizontal: 5,
      paddingVertical: 5,
  },

  titleText: {
    fontSize: 13,
    fontFamily: 'PatuaOne',
    paddingVertical: 3,
  },

  memberText: {
    fontSize: 11,
    fontFamily: 'RalewayMedium',
    marginBottom: 10,
  },
});