import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, TouchableWithoutFeedback, Alert, TouchableOpacity, LayoutAnimation} from 'react-native'; 
import FontAwesome, { Icons } from 'react-native-fontawesome';

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
            duration: 300, 
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

    renderType = () => {
        //TODO: Set the right paramters (not gender)
        if(this.state.data.gender == 'female'){
            return <Image source={require('../../../assets/icons/Cogs-icon.png')} style={styles.imageIconStyles}/>
        }    
        else if(this.state.data.gender == 'male'){
            return <Image source={require('../../../assets/icons/KeyNote-icon.png')} style={styles.imageIconStyles}/>
        }
        else if(this.state.data.gender == 'refresh'){
            return <Image source={require('../../../assets/icons/Coffee-icon.png')} style={styles.imageIconStyles}/>
        }
        else if(this.state.data.gender == 'food'){
            return <Image source={require('../../../assets/icons/Utensils-icon.png')} style={styles.imageIconStyles}/>
        }

        
    }
    render () { 

        const isExpanded = this.state.expanded; 
        const type = this.renderType()
        return (
            <View style = {styles.wrapper}> 
                <TouchableOpacity onPress={this.onRowPress} activeOpacity={1.0}>
                    <View>
                    <View style={styles.centerArrow}>
                        <View style={styles.rowStyle}>
                            {/* <FontAwesome style={styles.keynoteIcon}>{Icons.users}</FontAwesome> */}
                       
                            {/* <Image
                                source={require('../../../assets/icons/KeyNote-icon.png')}
                                style={styles.imageIconStyles}
                            /> */}
                        
                            <Image source= {{uri:this.state.data.picture.large}} style= {styles.pictureStyle} />
                            <Text style={styles.programText}>
                                Speaker: {`${this.state.data.name.first} ${this.state.data.name.last}`} {"\n"}
                                Nationality: {`${this.state.data.nat}`}  {"\n"}
                                Workplace: {`${this.state.data.workplace}`}
                            </Text>
                        </View>
                        {!isExpanded ? <Text> <FontAwesome> {Icons.angleDown} </FontAwesome> </Text> : null}
                    </View>
                    {isExpanded ? <View style={styles.centerArrow}>
                        <View style={styles.infoText}>
                            <Text>Nulla sodales lectus neque, non lacinia nisi congue at. Aenean vitae augue a ante condimentum placerat. Vestibulum ut elit placerat, placerat dolor quis, pharetra leo. Donec nec egestas enim. Aliquam tincidunt tincidunt finibus. Pellentesque fringilla dapibus lorem at hendrerit. Donec ac justo elementum, pharetra quam ac, dignissim sapien. Nunc at nibh sit amet odio ultrices commodo. In hac habitasse platea dictumst. Donec rutrum odio sit amet urna interdum, eget elementum sapien egestas. </Text>
                        </View>
                        <Text> <FontAwesome> {Icons.angleUp} </FontAwesome> </Text>
                    </View> : null}
                    </View>
                </TouchableOpacity>
            </View>
            
        );
      } 
    }

   const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
    wrapper : {
        borderWidth: 0.3,
        margin: 8,
        padding: 5,
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
    pictureStyle: {
        width: 60,
        height: 60,
        borderRadius: 30
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
        fontSize: 28,
        color: 'black',
        padding: 5,
    },

    infoText: {
        margin: 5,
    }
});

/*
const SpeakerRow = (props) => {
    return (
        <View>
            <SpeakerPanel 
                title = {`${props.name.first} ${props.name.last} (${props.nat}) \n` } 
                info = {props.info}
                imagesource = {{uri: props.picture.large}} 
                expanded = {false}>
            </SpeakerPanel>
        </View>
    );
   }
*/
