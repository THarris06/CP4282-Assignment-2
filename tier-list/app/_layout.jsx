import { Stack, Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GameContext } from "../components/gameContext.jsx";
import { useState } from 'react';
import gameObject from "../assets/games.json";

export default function RootLayout() {

    const [gameData, setGameData] = useState(gameObject);

    return (
        <GameContext.Provider value={{gameData, setGameData}}>
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
        </GameContext.Provider>
    );
}
