import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, Text } from 'react-native'; // This is where you import the components you would like to use (e.g. View, Text, Button...)

// You have to export the Component so that it can be used by other components, especially App.js
export default class Faq extends Component { // Remember to give the component the right name!
	render() {
		return (
			<View style={styles.viewStyles}>
        <View style={styles.questionBox}>
          <Text style={styles.question}>Q: What is this app?</Text>
          <Text style={styles.answer}>A: This app contains the official program for the Internatioal Hydrogen and Fuel Cell Conference 2018 in Trondheim, Norway.</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.question}>Q: What can this app do?</Text>
          <Text style={styles.answer}>A: You can browse the conference program, mark your favorites, view information about each keynote and more!</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.question}>Q: How do I favorite an event?</Text>
          <Text style={styles.answer}>A: To favorite an event, simple click the green star icon that corresponds with your chosen event.</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.question}>Q: Can I view only my favorite events?</Text>
          <Text style={styles.answer}>A: Yes, click the white star icon in the top right corner of the "program" tab.</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.question}>Q: Can the app notify me of approaching events?</Text>
          <Text style={styles.answer}>A: If you mark an event as a favorite, you will be notified fifteen (15) minutes before it starts.</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.question}>Q: Can I filter the program for each day?</Text>
          <Text style={styles.answer}>A: Yes, you can click the "monday" or "tuesday" buttons under the "program" tab to view event only for given day.</Text>
        </View>
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

  questionBox: {

  },

  question: {
    fontSize: 13,
    fontFamily: 'PatuaOne',
    paddingVertical: 3,
  },

  answer: {
    fontSize: 11,
    fontFamily: 'RalewayMedium',
    marginBottom: 10,
  },
});