import { Stack, Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Games',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="games" color={color} />
                }}
            />
            <Tabs.Screen
                name="updateGame"
                options={{
                    title: 'Update Game',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="adjust" color={color} />
                }}
            />
        </Tabs>
    );
}
