import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, Platform} from 'react-native';
import SpeakerPanel from './SpeakerPanel';

let src = require('./putin.jpeg');

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

   const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
   
   });

export default SpeakerRow;