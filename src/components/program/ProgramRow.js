import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, TouchableOpacity, Alert} from 'react-native'; 
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class ProgramRow extends Component {

    constructor(props) {
        super(props);
        
        this.icons = {     
            'up'    : null,
            'down'  : <FontAwesome> {Icons.angleDown} </FontAwesome>
        };

		this.state = {
            expanded: false,
            type: 'workshop',
            data: props
		}
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

        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];  
        }

        const isExpanded = this.state.expanded; 
        const type = this.renderType()
        return (
            <View style = {styles.wrapper}> 
                <TouchableOpacity onPress={this.onRowPress}>
                    <View style={styles.centerArrow}>
                        <View style={styles.rowStyle}>
                            {/* <FontAwesome style={styles.keynoteIcon}>{Icons.users}</FontAwesome> */}
                       
                            {/* <Image
                                source={require('../../../assets/icons/KeyNote-icon.png')}
                                style={styles.imageIconStyles}
                            /> */}
                        
                            {type}
                            <Text style={styles.programText}>
                                Title: {`${this.state.data.gender}`} {"\n"}
                                Speaker: {`${this.state.data.login.username}`} {"\n"}
                                <FontAwesome>{Icons.mapMarker}</FontAwesome>
                                {"  KA-ABC001  "}
                                <FontAwesome>{Icons.clockO}</FontAwesome>
                                {"  14:00 - 14:15  "}
                            </Text>
                            <View style={styles.favoriteIconWrapper}>
                                <TouchableOpacity onPress={this.onStarPress}>
                                    <Text style={styles.favoriteIcon}>
                                        <FontAwesome>{Icons.star}</FontAwesome>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                        <Text> {icon} </Text>
                    </View>
                    {isExpanded ? <View style={styles.centerArrow}>
                        <View>
                            <Text>Nulla sodales lectus neque, non lacinia nisi congue at. Aenean vitae augue a ante condimentum placerat. Vestibulum ut elit placerat, placerat dolor quis, pharetra leo. Donec nec egestas enim. Aliquam tincidunt tincidunt finibus. Pellentesque fringilla dapibus lorem at hendrerit. Donec ac justo elementum, pharetra quam ac, dignissim sapien. Nunc at nibh sit amet odio ultrices commodo. In hac habitasse platea dictumst. Donec rutrum odio sit amet urna interdum, eget elementum sapien egestas. </Text>
                        </View>
                        <Text> <FontAwesome> {Icons.angleUp} </FontAwesome> </Text>
                    </View> : null}
                </TouchableOpacity>
            </View>
            
        );
      } 
    }

   const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
    wrapper : {
        borderWidth: 0.3,
        margin: 10,
        padding: 15,
    },
    
    centerArrow: {
        alignItems: 'center'
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        paddingHorizontal: 5,
        //borderWidth: 0.3,
        marginVertical: 5,
        paddingVertical: 5,
    },

    outerView: {
        //alignItems: 'center', 
        borderWidth: 0.3
    },

    keynoteIcon: {
        fontSize: 80,
    },

    imageIconStyles: {
        width: 80,
        height: 80,
    },

    programImage: {
        //flex: 1,
        height: 70,
        borderRadius: 35,
        width: 70,
        marginHorizontal: 5,
    },

    programText:{
        flex: 3,
        lineHeight: 14,  //Set this to the same as font size
        fontSize: 14,
        fontFamily: 'RalewayMedium',
        marginHorizontal: 5,
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

    },

});

