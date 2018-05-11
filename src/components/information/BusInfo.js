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
    TouchableWithoutFeedback,
    Linking } from 'react-native'; 
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import FadeInView from 'react-native-fade-in-view';

export default class BusInfo extends Component { // Remember to give the component the right name!

	render() {
		return (
			<View style={styles.container}>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Address</Text>
                    <Text style={styles.infoText}>The conference is held at NTNU Campus Kalvskinnet, which lies in Sverres Gate 12.</Text>
                    <Text style={{color: 'forestgreen'}}
                        onPress={() => Linking.openURL('https://goo.gl/maps/8fTzrpsfuNr')}>
                        Click to open address in Google Maps
                    </Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Local Bus</Text>
                    <Text style={styles.infoText}>Take bus 5, 8, 10, 11, 18, 63 to Kongens Gate (K1 or K2), or bus 3, 4, 5, 6, 7, 8, 9, 11, 19, 22, 38, 46 to Prinsen Kinosenter. </Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Bus From the Airport</Text>
                    <Text style={styles.infoText}>Both the buses from the airport stops at Kongens Gate and Prinsen Kinosenter.</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Directions from Kongens Gate</Text>
                    <Text style={{color: 'forestgreen'}}
                        onPress={() => Linking.openURL('https://goo.gl/maps/QxvWH5H2GWU2')}>
                        Click to open location in Google Maps
                    </Text>
                    <Image source={require('../../../assets/img/map-kongens-sverres.png')} style={styles.imageMap}/>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Directions from Prinsen Kinosenter</Text>
                    <Text style={{color: 'forestgreen'}}
                        onPress={() => Linking.openURL('https://goo.gl/maps/etj7rFMDSPk')}>
                        Click to open location in Google Maps
                    </Text>
                    <Image source={require('../../../assets/img/map-prinsen-sverres.png')} style={styles.imageMap}/>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Locate the Rooms</Text>
                    <Text style={styles.infoText}>Once you have reached Sverres Gate 12 and Kalvskinnet, you will have to locate the rooms of the conferance. You can download an app called Mazemap in the appstores, or use it directly in the browser to do just that. Provided is a link to the locations in Mazemap, and a screenshot.</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Auditorium KA TBA001, Floor -1</Text>
                    <Text style={{color: 'forestgreen'}}
                        onPress={() => Linking.openURL('http://bit.ly/2jA5qln')}>
                        Click to open location in Mazemap
                    </Text>
                    <Image source={require('../../../assets/img/auditorium.png')} style={styles.imageMap}/>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.subTitle}>Lecture Room A237, Floor 2</Text>
                    <Text style={{color: 'forestgreen'}}
                        onPress={() => Linking.openURL('http://bit.ly/2jK1sXI')}>
                        Click to open location in Mazemap
                    </Text>
                    <Image source={require('../../../assets/img/lecture.png')} style={styles.imageMap}/>
                </View>
			</View>
		);
	}
}

const styles = EStyleSheet.create({  // This is the React Native way to style. This is basically css.

    container: {
        marginHorizontal: 5,
        marginVertical: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },

    infoBox: {
        marginVertical: 5,
    },

    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    infoText: {
        fontSize: 14,
    },

    imageMap: {
        resizeMode: 'contain',
        width: '100%',
        height: 200,
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
        imageMap: {
            height: 150
        },
    },

    '@media (min-width: 400) and (max-width: 1000)': {  //If the screen is smaller than 320px in width
        imageMap: {
            height: 500,
        },

        subTitle: {
            fontSize: 22,
            fontWeight: 'bold',
        },
    
        infoText: {
            fontSize: 20,
        },
        
    }
});