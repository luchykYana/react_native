import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserDetails = ({route: {params: {data}}}) => {
    return (
        <View>
            <Text>{data.name} - {data.email}</Text>
        </View>
    );
};
export default UserDetails;

let styles = StyleSheet.create({});