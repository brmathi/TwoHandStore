import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/login'
import BottomRoutes from './bottom.routes'
import Splash from '../pages/splash'
import Produto from '../pages/feed/produto/produto'
import { StackScreen } from 'react-native-screens'

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}
            }}
        >
            <Stack.Screen
                name="Splash"
                component={Splash}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />

            <Stack.Screen
                name="Produto"
                component={Produto}
            />

        </Stack.Navigator>
    )
}