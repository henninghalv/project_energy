import {StyleSheet,Text,View,Image,TouchableHighlight,Animated, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';  

class SpeakerPanel extends Component{
    constructor(props){
        super(props);

        this.icons = {     
            'up'    : require('../../../assets/arrows/Arrowhead.png'),
            'down'  : require('../../../assets/arrows/Arrowhead-Down.png')
        };

        this.state = {    
            title       : props.title,
            imagesource : props.imagesource,
            expanded    : false,
            animation   : new Animated.Value(50)
        };
    }

    toggle(){
    let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded 
    });

    this.state.animation.setValue(initialValue);  
    Animated.spring(    
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start(); 
        
    }

    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];  
        }

        return ( 
            <Animated.View style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.container} >
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                            <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                                <Image source={this.state.imagesource} style = {styles.SpeakerImage}/>
                                <Text style={styles.title}>{this.state.title}</Text>
                                <Image
                                    style={styles.buttonImage}
                                    source={icon}
                                ></Image>
                            </View>
                    </TouchableOpacity>
                    {this.state.expanded ? <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}
                        <Text>This speakers nationailty is: {this.props.nat} {'\n'}And some more info here</Text>
                    </View> : null}
                    
                </View>
            </Animated.View>
        );
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }
}



var styles = StyleSheet.create({
    container   : {
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    },
    SpeakerImage: {
        height: 40,
        borderRadius: 20,
        width: 40
    },
});

export default SpeakerPanel;