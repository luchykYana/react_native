import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item: {id, name, username}}) => {
    return (
        <View style={[styles.user]}>
            <Text style={[styles.userText]}>{id}. {name} {username}</Text>
        </View>
    );
};
export default User;

let styles = StyleSheet.create({
    user: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
        backgroundColor: 'dodgerblue',
        margin: 5,
        padding: 5,
    },
    userText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
});