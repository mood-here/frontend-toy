import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoungeScreen from './screens/LoungeScreen';
import UploadScreen from './screens/UploadScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#000',
              borderTopWidth: 0,
            },
            tabBarIcon: ({ color, size }) => {
              let iconName = '' as any;
              if (route.name === 'lounge') {
                iconName = 'ios-apps-outline';
              } else iconName = 'ios-code-slash-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="lounge" component={LoungeScreen} />
          <Tab.Screen name="upload" component={UploadScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
