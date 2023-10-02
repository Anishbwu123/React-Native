import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
// import Web from './Component/WebViewComponent/Web';
import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorageEx from './Component/AsyncStorageComponent/AsyncStorageEx';
// import DrawerNavigation from './Component/Navigation/DrawerNavigation';
// import Web from './Component/WebViewComponent/Web';
// import ImagePickerExample from './Component/ImagePick/ImagePickerExample';
// import CameraScreen from './Component/Camera/CameraScreen';
// import Location1 from './Component/MapLocation/Location1';
// import SignUpLogin from './Component/FireBaseIntegration/SignUpLogin';
import Shared from './Component/SharedComponent/Shared';
// import Pick from './Component/Picker/Pick';
// import SwitchComponent from './Component/ModalComponent/SwitchComponent';




// import Platform1 from './Component/Platformcheck/Platform1';
// import ProgressBarComponent from './Component/ProgressBar/ProgressBarComponent';
// import DateTime from './Component/DateTimePicker/DateTime';
// import ModalCore from './Component/ModalComponent/ModalCore'
// import ModalForm from './Component/ModalComponent/ModalForm';
// import ToastAndroid from './Component/ToastAndroidComponent/ToastAndroid';
// import Refresh from './Component/RefreshControl/Refresh';
// import Phone from './Component/ModalComponent/PhoneBackground/Phone';


// import Phone from './Component/ModalComponent/PhoneBackground/Phone';

export default function App() {
  return (
   <View style={{flex:1.,justifyContent:'center',alignItems:'center'}}>
    <Shared/>
   </View>
    // <NavigationContainer>
    //   <StackNavigation/>
    //   <DrawerNavigation/>
    //    </NavigationContainer>
      
    
  
    
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
