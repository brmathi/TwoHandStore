import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../pages/user";
import Sales from "../pages/sales";
import Inbox from "../pages/inbox";
import Feed from "../pages/feed";
import Discover from "../pages/discover";
import CustomTabBar from "../components/customTabBar";

const Tab = createBottomTabNavigator()

export default function BottomRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}

            tabBar={props=><CustomTabBar{...props}/>}
        >
            <Tab.Screen 
                name="User"
                component={User}
            />

            <Tab.Screen 
                name="Sales"
                component={Sales}
            />  

            <Tab.Screen 
                name="Inbox"
                component={Inbox}
            />

            <Tab.Screen 
                name="Feed"
                component={Feed}
            />

            <Tab.Screen 
                name="Discover"
                component={Discover}
            />
        </Tab.Navigator>
    )
}