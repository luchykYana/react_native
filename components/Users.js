import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getUsers} from "../services/user.api.service";
import User from "./User";

const Users = ({navigation}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])

    return (
        <View style={styles.base}>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item} nav={navigation}/>}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    );
};
export default Users;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        height: '100%'
    }
});