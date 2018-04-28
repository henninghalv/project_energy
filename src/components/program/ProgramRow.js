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
        this.props.addToFavorites(this.props.rowID);
	}

    renderType = () => {
        //TODO: Set the right paramters (not gender)
        if(this.state.data.type == 'workshop'){
            return <Image source={require('../../../assets/icons/Cogs-icon.png')} style={styles.imageIconStyles}/>
        }    
        else if(this.state.data.type == 'keynote'){
            return <Image source={require('../../../assets/icons/KeyNote-icon.png')} style={styles.imageIconStyles}/>
        }
        // else if(this.state.data.gender == 'refresh'){
        //     return <Image source={require('../../../assets/icons/Coffee-icon.png')} style={styles.imageIconStyles}/>
        // }
        // else if(this.state.data.gender == 'food'){
        //     return <Image source={require('../../../assets/icons/Utensils-icon.png')} style={styles.imageIconStyles}/>
        // }
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
                            <Text style={styles.programText}>
                                Title: {`${this.state.data.title}`} {"\n"}
                                Speaker: {`${this.state.data.speaker.firstname}`} {"\n"}
                                <FontAwesome>{Icons.clockO}</FontAwesome>
                                {` ${this.state.data.day} ` + `${this.state.data.timeslot} `}  {"\n"}
                                <FontAwesome>{Icons.mapMarker}</FontAwesome>
                                {`  ${this.state.data.location} `} 
                            </Text>
                            <View style={styles.favoriteIconWrapper}>
                                <TouchableOpacity onPress={this.onStarPress}>
                                    <Text style={styles.favoriteIcon}>
                                        {this.state.checked ? checkedStar : uncheckedStar}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {!isExpanded ? <Text> <FontAwesome> {Icons.angleDown} </FontAwesome> </Text> : null}
                    </View>
                    {isExpanded ? 
                    <View style={styles.centerArrow}>
                        <FadeInView duration={350} style={styles.infoText}>
                            <Text>{`${this.state.data.description}`}</Text>
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
        margin: 5,
        padding: 5,
        backgroundColor: '#ffffff',
        opacity: 0.8
    },
    
    centerArrow: {
        alignItems: 'center'
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
    
    programText:{
        flex: 3,
        lineHeight: 15,  //Set this to the same as font size
        fontSize: 15,
        fontFamily: 'RalewayMedium',
        marginHorizontal: 8,
        marginTop: 4
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

    infoText: {
        margin: 5
    },

    '@media (min-width: 0) and (max-width: 320)': {  //If the screen is smaller than 320px in width
        programText:{
          fontSize: 12,
        },
        programText: {
          fontSize: 12,
        },
        favoriteIcon: {
            fontSize: 26,
        },

      }
});

