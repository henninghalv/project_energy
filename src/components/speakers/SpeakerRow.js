import React, { Component, Easing, Animated } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, TouchableWithoutFeedback, Alert, TouchableOpacity, LayoutAnimation} from 'react-native'; 
import FontAwesome, { Icons } from 'react-native-fontawesome';
import FadeInView from 'react-native-fade-in-view';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome';
export default class SpeakerRow extends Component {

    constructor(props) {
        super(props);
        
		this.state = {
            expanded: false,
            type: 'workshop',
            data: props
		}
	}

    componentWillUpdate() {
        const config = {
            duration: 200, 
            update: {
                type: 'easeInEaseOut'
            }
        }
        LayoutAnimation.configureNext(config)
    }


    onRowPress = () => {
        if(this.state.expanded){
            this.setState({expanded: false})
        }
        else{
            this.setState({expanded: true})
        }
    }

    
    render () { 

        const isExpanded = this.state.expanded; 
        return (
            <View style = {styles.wrapper}> 
                <TouchableOpacity onPress={this.onRowPress} activeOpacity={1.0}>
                    <View >
                        <View style={styles.rowStyle}>
                            <View style={styles.imageWrapper}>
                                {this.state.data.picture != undefined ?
                                    <Image source= {{uri:this.state.data.picture.large}} style={styles.pictureStyle} />
                                :
                                    <FontAwesome style={styles.speakerIcon}>{Icons.userCircle}</FontAwesome>
                                }
                            </View>

                            <View style={styles.textBoxContainer}>
                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.userCircleO}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.name.title}`} {`${this.state.data.name.first}`} {`${this.state.data.name.last}`}</Text>
                                </View>

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.suitcase}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.position}`}</Text>
                                </View>

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.globe}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.nat}`}</Text>
                                </View>

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.building}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.workplace}`}</Text>
                                </View>
                            </View>

                        </View>
                        {!isExpanded ? 
                        <View style={styles.centerArrow}>
                            <Text style={styles.arrow}> 
                                <FontAwesome> {Icons.angleDown} </FontAwesome> 
                            </Text> 
                        </View>
                        : null}
                    </View>
                    {isExpanded ? <View style={styles.centerArrow}>
                        <FadeInView duration={350} style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>Nulla sodales lectus neque, non lacinia nisi congue at. Aenean vitae augue a ante condimentum placerat. Vestibulum ut elit placerat, placerat dolor quis, pharetra leo. Donec nec egestas enim. Aliquam tincidunt tincidunt finibus. Pellentesque fringilla dapibus lorem at hendrerit. Donec ac justo elementum, pharetra quam ac, dignissim sapien. Nunc at nibh sit amet odio ultrices commodo.</Text>
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
        opacity: 0.9
    },

    centerArrow: {
        alignItems: 'center',
    },

    arrow: {
        lineHeight: 9,
    },

    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5,
    },

    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 5,
    },

    pictureStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    speakerIcon: {
        fontSize: 60,
    },

    iconsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    }, 

    smallIcons: {
        width: 15,
        textAlign: 'center',
    },
    
    textBoxContainer: {
        marginLeft: 3,
    },

    textBox: {
        flexDirection: 'row',
        marginVertical: 1,
        marginLeft: 10,
    },

    speakerText: {
        fontFamily: 'RalewayMedium',
        lineHeight: 15,  //Set this to the same as font size
        fontSize: 15,
        marginLeft: 10,
    },

    infoTextWrapper: {
        margin: 5
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
        speakerText:{
          fontSize: 12,
          lineHeight: 12,  //Set this to the same as font size
        },
        favoriteIcon: {
            fontSize: 26,
        },

      },

      '@media (min-width: 400) and (max-width: 1000)': {  //If the screen is smaller than 320px in width
        speakerText:{
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
        },

        pictureStyle: {
            width: 80,
            height: 80,
            borderRadius: 40,
        },

      }
    
});


