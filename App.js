import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Common, Home, Observer, Synoptic } from './components/views';
import { Ionicons } from 'react-native-vector-icons'


const Tab = createBottomTabNavigator();

export default function App() {

  const options = {
    headerShown: false
  }
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Observer') {
              iconName = focused ? 'eye-sharp' : 'eye-outline';
            } else if (route.name === 'Synoptic') {
              iconName = focused ? 'thunderstorm' : 'thunderstorm-outline';
            } else if (route.name === 'Common') {
              iconName = focused ? 'earth' : 'earth-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#BFA130',
          inactiveTintColor: '#2C17B1',
        }}
      >
        <Tab.Screen options={options} name="Home" component={Home} />
        <Tab.Screen options={options} name="Observer" component={Observer} />
        <Tab.Screen options={options} name="Synoptic" component={Synoptic} />
        <Tab.Screen options={options} name="Common" component={Common} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
