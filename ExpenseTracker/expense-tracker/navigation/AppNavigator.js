import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { StatusBar } from "react-native";
import ManageExpenses from "../screens/ManageExpenses";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
          <Tab.Navigator>
            <Tab.Screen name="RecentExpenses" component={RecentExpenses} />
            <Tab.Screen name="AllExpenses" component={AllExpenses} />
          </Tab.Navigator>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
