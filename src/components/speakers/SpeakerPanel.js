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
            info        : props.info,
            expanded    : false,
            animation   : new Animated.Value(80)
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
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                            <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                                <Image source={this.state.imagesource} style = {styles.SpeakerImage}/>
                                <Text style={styles.title}>{this.state.title}</Text>
                                <Image style={styles.buttonImage} source={icon}></Image>
                            </View>
                            {this.state.expanded ? <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                                {this.props.children}
                                <Text style={styles.infoText}>{this.state.info}</Text>
                        </View> : null}
                    </TouchableOpacity>
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
        margin:8,
        overflow:'hidden',
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 2,
        color   :'#2a2f43',
        fontWeight:'bold',
        fontSize: 18,
        margin: 15
    },
    infoText : {
        fontSize: 18,
    },
    button      : {
        display: 'flex',
        //alignItems: 'center',
    },
    buttonImage : {
        marginTop: 20,
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    },
    SpeakerImage: {
        height: 60,
        borderRadius: 30,
        width: 60
    },
});

export default SpeakerPanel;