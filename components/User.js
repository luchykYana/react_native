import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const User = ({item, nav: {navigate}}) => {

    let onPress = () => {
        navigate('UserDetails', {data: item});
    }

    return (
        <View style={styles.user}>
            <Text style={[styles.userText]}>{item.id}. {item.name} {item.username}</Text>
            <Button title={'user details'} onPress={onPress}/>
        </View>
    );
};
export default User;

const styles = StyleSheet.create({
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