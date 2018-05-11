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

export default class Sponsors extends Component { // Remember to give the component the right name!

	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.infoText}> Sponsors </Text>
                <View style={styles.sponsorsContainer}>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/ntnu.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/enersense.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/tronderenergi.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/ntnu_energy.png')} style={styles.pictureStyle} />
                    </View>
                </View>
                <Text style={styles.infoText}> Collaborators </Text>
                <View style={styles.sponsorsContainer}>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/eera.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/IAHE.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/mozees.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/chalmers.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/norsk_hydrogen.png')} style={styles.pictureStyle} />
                    </View>
                </View>
                {/* <Text style={styles.infoText}> Other </Text>
                <View style={styles.sponsorsContainer}>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/mozees.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/chalmers.png')} style={styles.pictureStyle} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source = {require('../../../assets/sponsors/norsk_hydrogen.png')} style={styles.pictureStyle} />
                    </View>
                </View> */}
			</View>
		);
	}
}

const styles = EStyleSheet.create({  // This is the React Native way to style. This is basically css.

    infoText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'PatuaOne',
    },

    sponsorsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        marginVertical: 5,
    },

    logoContainer: {
        alignItems: 'center',
        flex: 1,
        flexBasis: '50%',
    },

    pictureStyle: {
        width: 130,
        height: 90,
    },

    sponsorText: {
        fontSize: 12
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width

        infoText: {
            fontSize: 14,
        },
        
        pictureStyle: {
            width: 80,
            height: 60,
        },
      },

    '@media (min-width: 400) and (max-width: 1000)': { 

        infoText: {
            fontSize: 28,
        },

        pictureStyle: {
            width: 280,
            height: 200,
        },

    }
});