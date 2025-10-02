import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "react-native-gesture-handler";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}
function Upcoming() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Upcoming</Text>
    </View>
  );
}

function Pending() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>More</Text>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name= "home"
        component= {home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./assets/home.jpg')}
              style={{ width: 30, height: 30 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./assets/coming.jpg')}
              style={{ width: 50, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Pending}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./assets/threeLine.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Settings1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Sett}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Sett() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No Settings Available</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="Settings" component={Settings1} />
      </Drawer.Navigator>
    </NavigationContainer>
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
