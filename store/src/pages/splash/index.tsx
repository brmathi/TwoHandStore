import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { BebasNeue_400Regular, useFonts } from '@expo-google-fonts/bebas-neue';

type Props={
    navigation: StackNavigationProp<any>
}

export default function Splash({navigation} : Props){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login");
        }, 3000);
    }, []);

    const [fontsLoaded] = useFonts({
    BebasNeue_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>2handStore</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0051',
    },

    text: {
        fontSize: 42,
        color: '#ffff',
        fontFamily: 'BebasNeue_400Regular'
    }
})