import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5, Feather, MaterialIcons, FontAwesome6, Octicons} from '@expo/vector-icons';

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
    return (
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} activeOpacity={1} >
                <Octicons
                    name="home"
                    style={{fontSize: 22}}
                />

                <Text style={styles.tabLabel}>Home</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} activeOpacity={1}>
                <FontAwesome6
                    name="magnifying-glass"
                    style={{fontSize: 20}}
                />

                <Text style={styles.tabLabel}>Discover</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} activeOpacity={1}>
                <MaterialIcons 
                    name="sell"
                    style={{fontSize: 22}}
                />

                <Text style={styles.tabLabel}>Sell</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} activeOpacity={1}>
                <Octicons 
                    name="inbox"
                    style={{fontSize: 20}}
                />

                <Text style={styles.tabLabel}>Inbox</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} activeOpacity={1}>
                <FontAwesome5
                    name="user"
                    style={{fontSize: 20}}
                />

                <Text style={styles.tabLabel}>User</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabArea: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around'
    },

    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    tabLabel:{
        fontSize: 12,
        marginTop: 3,
    }
})