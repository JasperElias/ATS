import Stack from "./NativeStackNavigator";
import AgilityScreen from "../screens/categories/agility/AgilityScreen";

function AgilityNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AgilityNavigator"
                component={AgilityScreen}
                options={{ headerShown: false, swipeEnabled: true }}
            />

        </Stack.Navigator>
    );
}

export default AgilityNavigator;