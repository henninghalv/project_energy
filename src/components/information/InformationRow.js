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


    constructor(props) {
        super(props);

        //This activates use of animations on android
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
          }
        
		this.state = {
            expanded: false,
            header: this.props.header,
            content: this.props.content,
            icon: this.props.icon
		}
    }

    componentWillUpdate(){
        const config = {
            duration: 200,
            update: {
                type: 'easeInEaseOut'
            }
        }
        LayoutAnimation.configureNext(config)
    }

    onRowPress = () => {
        this.setState({expanded: !this.state.expanded})
    }

	render() {
		return (
			<View style={styles.wrapper}>
                <TouchableOpacity onPress={this.onRowPress} activeOpacity={1.0}>
                    <View style={styles.centerArrow}>
                        <View style={styles.rowStyle}>
                            <FontAwesome style={styles.icon}>{this.state.icon}</FontAwesome>
                            <Text style={styles.rowTitleText}> {this.state.header} </Text>
                        </View>
                        {!this.state.expanded ? <Text style={styles.arrow}> <FontAwesome> {Icons.angleDown} </FontAwesome> </Text> : null}

                    </View>
                    {this.state.expanded ? 
                    <View style={styles.centerArrow}>
                        <FadeInView duration={350} style={styles.infoTextWrapper}>
                            {this.state.content}
                        </FadeInView>
                        <Text> <FontAwesome> {Icons.angleUp} </FontAwesome> </Text>
                    </View> : null}
                </TouchableOpacity>
			</View>
		);
	}
}

const styles = EStyleSheet.create({  // This is the React Native way to style. This is basically css.
    wrapper : {
        borderWidth: 0.3,
        borderRadius: 3,
        margin: 5,
        padding: 5,
        backgroundColor: '#ffffff',
        opacity: 0.9,
    },
    
    centerArrow: {
        alignItems: 'center',    
    },

    arrow: {
        lineHeight: 10,
    },

    icon: {
        fontSize: 34
    },

    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        marginVertical: 5,
    },

    rowTitleText: {
        fontSize: 34,
        fontFamily: 'PatuaOne',
    },

    infoTextWrapper: {
        margin: 5
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
        programText:{
          fontSize: 12,
          lineHeight: 12,  //Set this to the same as font size
        },
        favoriteIcon: {
            fontSize: 26,
        },

      },

      '@media (min-width: 400) and (max-width: 1000)': {  //If the screen is smaller than 320px in width
        programText:{
          fontSize: 20,
          lineHeight: 20,  //Set this to the same as font size
        },

        favoriteIcon: {
            fontSize: 40,
        },

        keynoteIcon: {
            fontSize: 100,
        },
    
        imageIconStyles: {
            width: 80,
            height: 80,
        },

        infoTextWrapper: {
            margin: 10,
        },

        infoText: {
            fontSize: 18
        }

      }
});