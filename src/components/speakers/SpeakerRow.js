import React, { Component, Easing, Animated } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, TouchableWithoutFeedback, Alert, TouchableOpacity, LayoutAnimation} from 'react-native'; 
import FontAwesome, { Icons } from 'react-native-fontawesome';
import FadeInView from 'react-native-fade-in-view';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome';
export default class SpeakerRow extends Component {

    constructor(props) {
        super(props);
        // Rekkefølge Keynote
        // Prof. Odne S. Burheim
        // Bjørn Simonsen
        // Dr Kerry-Ann Adamson
        // Dr Steffen Møller-Holst 
        // Shanna D. Knights
        // Prof. Daniel Hissel
        // Prof. Gregory Jerkiewicz
        // Prof. Vladimir Molkov
		this.state = {
            expanded: false,
            type: 'workshop',
            data: props,
            images: [
                require('../../../assets/img/speakers/odne_burheim.jpg'),
                require('../../../assets/img/speakers/bjorn_simonsen.jpg'),
                require('../../../assets/img/speakers/kerry_ann.jpg'),
                require('../../../assets/img/speakers/steffen_press.jpg'),
                require('../../../assets/img/speakers/shanna_d.jpg'),
                require('../../../assets/img/speakers/daniel_hissel.jpg'),
                require('../../../assets/img/speakers/jerkiewicz.jpg'),
                require('../../../assets/img/speakers/vladimir_molkov.jpg'),
            ]
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
                                    <Image source={this.state.images[this.state.data.picture]} style={styles.pictureStyle} />
                                :
                                    <Image source={require('../../../assets/icons/User-icon.png')} style={styles.imageIconStyles}/>
                                }
                            </View>

                            <View style={styles.textBoxContainer}>
                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.userCircleO}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.name.title}`} {`${this.state.data.name.first}`} {`${this.state.data.name.last}`}</Text>
                                </View>

                                {/* <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.suitcase}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.position}`}</Text>
                                </View> */}

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.building}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.workplace}`}</Text>
                                </View>

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.globe}</FontAwesome>
                                    <Text style={styles.speakerText}>{`${this.state.data.nationality}`}</Text>
                                </View>
                            </View>

                        </View>
                        {!isExpanded && this.state.data.info != ""? 
                        <View style={styles.centerArrow}>
                            <Text style={styles.arrow}> 
                                <FontAwesome> {Icons.angleDown} </FontAwesome> 
                            </Text> 
                        </View>
                        : null}
                    </View>
                    {isExpanded && this.state.data.info != "" ? <View style={styles.centerArrow}>
                        <FadeInView duration={350} style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{this.state.data.info}</Text>
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

    imageIconStyles: {
        width: 58,
        height: 58,
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
        flex: 3,
        marginLeft: 3,
        justifyContent: 'center',
    },

    textBox: {
        flexDirection: 'row',
        marginVertical: 1,
        marginLeft: 10,
        maxWidth: '85%',
    },

    speakerText: {
        fontFamily: 'RalewayMedium',
        lineHeight: 15,  //Set this to the same as font size
        fontSize: 15,
        marginLeft: 10,
    },

    infoTextWrapper: {
        margin: 10
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
        speakerText:{
          fontSize: 10,
          lineHeight: 10,  //Set this to the same as font size
        },

        favoriteIcon: {
            fontSize: 26,
        },

        speakerIcon: {
            fontSize: 50,
        },

        smallIcons: {
            fontSize: 11,
        },

        textBox: {
            maxWidth: '80%'
        },

      },

      '@media (min-width: 400) and (max-width: 1000)': {  //If the screen is smaller than 320px in width
        speakerText:{
          fontSize: 20,
          lineHeight: 20,  //Set this to the same as font size
        },

        imageIconStyles: {
            width: 78,
            height: 78,
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

        textBox: {
            maxWidth: '100%'
        },

      }
    
});


