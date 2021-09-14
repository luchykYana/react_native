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


// "expo": "~42.0.1",
//     "expo-status-bar": "~1.0.4",
//     "react": "16.13.1",
//     "react-dom": "16.13.1",
//     "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
//     "react-native-web": "~0.13.12",
//     "@react-navigation/native": "^6.0.2",
//     "@react-navigation/stack": "^6.0.7",
//     "react-native-screens": "^3.7.2",
//     "react-native-safe-area-context": "^3.3.2"
