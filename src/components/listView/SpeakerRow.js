import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image} from 'react-native'; 

let src = require('./putin.jpeg');

const SpeakerRow = (props) => {
    return (
        <View>
            <Text >
                {`${props.name.first} ${props.name.last} ${props.nat}`}
            </Text>
            <Image source={{uri: props.picture.large}} style = {styles.SpeakerImage}/>
        </View>
    );
   }

   const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
    SpeakerImage: {
        height: 80,
        borderRadius: 40,
        width: 80
    }
   });

export default SpeakerRow;