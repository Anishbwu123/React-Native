import { createDrawerNavigator } from "@react-navigation/drawer"
import ProfileScreen from "./ProfileScreen";
 import MenuScreen from "./MenuScreen";
 import HelpScreen from "./HelpScreen";
 import { AntDesign,MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
import CustomDrawer from "./CustomDrawer";
const nav=createDrawerNavigator();

const DrawerNavigation = () => {
  return (

   <nav.Navigator drawerContent={props=><CustomDrawer {...props} />} screenOptions={{
    drawerLabelStyle:{marginLeft:-25,fontSize:15},
    drawerActiveBackgroundColor:'#7a020a',
    drawerActiveTintColor:'#fff',
    drawerInactiveTintColor:'#fff',
   }} >
    <nav.Screen name="Profile" component={ProfileScreen} options={{
      drawerIcon: () => <AntDesign name="profile" size={24} color='yellow' />
    }}/>
    <nav.Screen name="Menu" component={MenuScreen} options={{
      drawerIcon: () => <MaterialIcons name="menu-book" size={24} color='red' /> 
    }}/>
    <nav.Screen name="Help" component={HelpScreen} options={{
      drawerIcon: () => <FontAwesome5 name="hands-helping" size={24} color='green' />
    }}/>
   </nav.Navigator>
  )
}

export default DrawerNavigation

