import React, { Component } from 'react';  // This has to be imported in every component
import { StyleSheet, View, ListView, Text, Image} from 'react-native'; 


const ProgramRow = (props) => {
    return (
        <View>
            <Text >
                Gender: {`${props.gender}`} {"\n"}
                Username: {`${props.login.username}`} {"\n"}
                Password: {`${props.login.password}`}
            </Text>
            <Image source={{uri: props.picture.large}} style = {styles.ProgramImage}/>
        </View>
    );
   }

   const styles = StyleSheet.create({  // This is the React Native way to style. This is basically css.
    ProgramImage: {
        height: 80,
        borderRadius: 40,
        width: 80
    }
   });

export default ProgramRow;