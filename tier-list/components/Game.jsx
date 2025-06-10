import { Text, View, Image } from "react-native";

export default function Game( {gameData, image}) {

    return (
        <>
            <Text>Title: {gameData.title}</Text>
            <Text>Year: {gameData.year}</Text>
            <Image source={image}/>
        </>
    )
}