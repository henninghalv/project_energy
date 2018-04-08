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
    render () { 

        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];  
        }

        const isExpanded = this.state.expanded; 
        return (
            <View style={styles.outerView}>
                <TouchableOpacity onPress={this.onRowPress}>
                    <View style={styles.centerArrow}>
                        <View style={styles.rowStyle}>
                            {/* <FontAwesome style={styles.keynoteIcon}>{Icons.users}</FontAwesome> */}
                            <Image
                                source={require('../../../assets/icons/KeyNote-icon.png')}
                                style={styles.imageIconStyles}
                            />
                            <Text style={styles.programText}>
                                Title: {`${this.state.data.gender}`} {"\n"}
                                Lead by: {`${this.state.data.login.username}`} {"\n"}
                                Type: {`${this.state.data.login.password}`}
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
                            <Image source={{uri: this.state.data.picture.large}} style = {styles.programImage}/>
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
        fontSize: 42,
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

});

