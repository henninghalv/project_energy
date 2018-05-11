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

export default class ProgramRow extends Component {

    constructor(props) {
        super(props);

        //This activates use of animations on android
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
          }
        
		this.state = {
            expanded: false,
            type: 'none',
            checked: this.props.isFavorite,
            data: props
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

    onStarPress = () => {
        this.setState({checked: !this.state.checked});
        this.props.toggleFavorites(this.state.data.title, this.state.data.location, this.state.data.timestamp, this.props.rowID, );
	}

    renderType = () => {
        //TODO: Set the right paramters (not gender)
        if(this.state.data.type == 'workshop'){
            return <Image source={require('../../../assets/icons/Cogs-icon.png')} style={styles.imageIconStyles}/>
        }    
        else if(this.state.data.type == 'keynote'){
            return <Image source={require('../../../assets/icons/KeyNote-icon.png')} style={styles.imageIconStyles}/>
        }
        else if(this.state.data.type == 'refresh'){
            return <Image source={require('../../../assets/icons/Coffee-icon.png')} style={styles.imageIconStyles}/>
        }
        else if(this.state.data.type == 'food'){
            return <Image source={require('../../../assets/icons/Utensils-icon.png')} style={styles.imageIconStyles}/>
        }
        else if(this.state.data.type == 'info'){
            return <Image source={require('../../../assets/icons/Info-icon.png')} style={styles.imageIconStyles}/>
        }
    }

    render () { 

		const checkedStar = <FontAwesome>{Icons.star}</FontAwesome>
		const uncheckedStar = <FontAwesome>{Icons.starO}</FontAwesome>


        const isExpanded = this.state.expanded; 
        const type = this.renderType()
        return (
            <View style = {styles.wrapper}> 
                <TouchableOpacity onPress={this.onRowPress} activeOpacity={1.0}>
                    <View style={styles.centerArrow}>
                        <View style={styles.rowStyle}>
                            {type}
                            <View style={styles.textBoxContainer}>
                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.bookmark}</FontAwesome>
                                    <Text style={[styles.programText, {fontWeight: 'bold'}]}>{`${this.state.data.title}`}</Text>
                                </View>
                                {this.state.data.speaker != undefined ?
                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.userCircleO}</FontAwesome>
                                    <Text style={styles.programText}>
                                        {`${this.state.data.speaker.title} `}
                                        {`${this.state.data.speaker.firstname} `}
                                        {`${this.state.data.speaker.lastname}`}
                                    </Text>
                                </View>
                                :
                                null
                                }

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.clockO}</FontAwesome>
                                    <Text style={styles.programText}>{`${this.state.data.day}`} {`${this.state.data.timeslot}`}</Text>
                                </View>

                                <View style={styles.textBox}>
                                    <FontAwesome style={styles.smallIcons}>{Icons.mapMarker}</FontAwesome>
                                    <Text style={styles.programText}>{`${this.state.data.location}`}</Text>
                                </View>
                            </View>

                            <View style={styles.favoriteIconWrapper}>
                                <TouchableOpacity onPress={this.onStarPress}>
                                    <Text style={styles.favoriteIcon}>
                                        {this.state.checked ? checkedStar : uncheckedStar}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* {!isExpanded && this.state.data.description != "" ? <Text style={styles.arrow}> <FontAwesome> {Icons.angleDown} </FontAwesome> </Text> : null} */}

                    </View>
                    {/* {isExpanded && this.state.data.description != "" ? 
                    <View style={styles.centerArrow}>
                        <FadeInView duration={350} style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{`${this.state.data.description}`}</Text>
                        </FadeInView>
                        <Text> <FontAwesome> {Icons.angleUp} </FontAwesome> </Text>
                    </View> : null} */}
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
        lineHeight: 10,
    },

    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        marginVertical: 5,
    },

    keynoteIcon: {
        fontSize: 80,
    },

    imageIconStyles: {
        width: 60,
        height: 60,
    },

    iconsWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
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
        maxWidth: '95%'
    },

    programText: {
        fontFamily: 'RalewayMedium',
        lineHeight: 15,  //Set this to the same as font size
        fontSize: 15,
        marginLeft: 10,
    },

    favoriteIconWrapper: {
        justifyContent:'center',
        alignItems: 'center',
    },
  
    favoriteIcon: {
        fontSize: 32,
        color: 'forestgreen',
        padding: 5,
    },

    infoTextWrapper: {
        margin: 10
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
        programText:{
          fontSize: 10,
          lineHeight: 10,  //Set this to the same as font size
        },

        favoriteIcon: {
            fontSize: 26,
        },

        smallIcons: {
            fontSize: 11,
        },

        textBox: {
            maxWidth: '90%'
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
        },

        textBox: {
            maxWidth: '100%'
        },

      }
});

