import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HelpScreen from './HelpScreen'
import MenuScreen from './MenuScreen'
import ProfileScreen from './ProfileScreen'
import { Entypo, MaterialCommunityIcons,Feather } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            activeColor='#527cf7'
            inactiveColor='#dce4fa'
            barStyle={{ backgroundColor: 'grey' }}
        >
            <Tab.Screen name="Menu" component={MenuScreen} options={{
                tabBarIcon:<Entypo name="menu" size={24} color="black" />
            }} />

            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
            }} />

            <Tab.Screen name="Help" component={HelpScreen} options={{
                tabBarIcon: () =><Feather name="help-circle" size={24} color="black" />
            }} />


        </Tab.Navigator>
    )
}
export default BottomTabNavigation;