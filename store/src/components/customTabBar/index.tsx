import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons,  Octicons} from '@expo/vector-icons';

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {

    function isFocused(routeName: string) {
        return state.routes[state.index].name === routeName}

    const homeFocused = isFocused("Feed")
    const discoverFocused = isFocused("Discover")
    const sellFocused = isFocused("Sales")
    const inboxFocused = isFocused("Inbox")
    const userFocused = isFocused("User")

    return (
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Feed")}>
                <Ionicons
                    name={homeFocused ? "home" : "home-outline"}
                    size={22}
                    color={homeFocused ? "#000" : "#999"}
                />
                <Text style={[styles.tabLabel, { color: homeFocused ? "#000" : "#5f5f5f" }]}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Discover")}>
                <Ionicons
                    name={discoverFocused ? "search" : "search-outline"}
                    size={20}
                    color={discoverFocused ? "#000" : "#999"}
                />
                <Text style={[styles.tabLabel, { color: discoverFocused ? "#000" : "#5f5f5f" }]}>
                    Discover
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Sales")}>
                <Ionicons
                    name={sellFocused ? "pricetag" : "pricetag-outline"}
                    size={22}
                    color={sellFocused ? "#000" : "#999"}
                />
                <Text style={[styles.tabLabel, { color: sellFocused ? "#000" : "#5f5f5f" }]}>
                    Sell
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Inbox")}>
                <Ionicons
                    name={inboxFocused ? "mail" : "mail-outline"}
                    size={20}
                    color={inboxFocused ? "#000" : "#999"}
                />
                <Text style={[styles.tabLabel, { color: inboxFocused ? "#000" : "#5f5f5f" }]}>
                    Inbox
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("User")}>
                <Ionicons
                    name={userFocused ? "person" : "person-outline"}
                    size={20}
                    color={userFocused ? "#000" : "#999"}
                />
                <Text style={[styles.tabLabel, { color: userFocused ? "#000" : "#5f5f5f" }]}>
                    User
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    tabArea: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#eee'
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