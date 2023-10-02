import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
const Stack = createStackNavigator();

const StackNavigation=()=>{
    return(
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;