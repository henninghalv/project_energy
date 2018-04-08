import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image, Platform} from 'react-native';
import SpeakerPanel from './SpeakerPanel';

let src = require('./putin.jpeg');

var Accordion = require('react-native-accordion-met');

const SpeakerRow = (props) => {
    return (
        <View>
            <SpeakerPanel title = {`${props.name.first} ${props.name.last} \n` } imagesource = {{uri: props.picture.large}} expanded = {false}>
                <Text>This speakers nationailty is: {props.nat} {'\n'}And some more info here</Text>
            </SpeakerPanel>
        </View>
    );
   }

   const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
   
   });

export default SpeakerRow;