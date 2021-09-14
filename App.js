import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import UserDetails from "./screens/UserDetails.screen";

let StackNavigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
            </StackNavigator.Navigator>
        </NavigationContainer>

        // <View style={styles.container}>
        //     <StatusBar style="auto"/>
        //     <Users/>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
