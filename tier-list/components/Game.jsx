import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./Button.jsx";

export default function Game({ gameData, image, setGame, currentIndex }) {

    const getTitleFontSize = () => {
        if (gameData.title.length > 25) return 18;
        return 22;
      };

  return (
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: getTitleFontSize() }]}>
          Title: {gameData.title}
        </Text>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>Release Year: {gameData.year}</Text>
        <Text style={styles.text}>Developer: {gameData.developer}</Text>

        <View style={styles.buttonsRow}>
          <Button label="#1" setGame={setGame} index={0} currentIndex={currentIndex} />
          <Button label="#2" setGame={setGame} index={1} currentIndex={currentIndex} />
          <Button label="#3" setGame={setGame} index={2} currentIndex={currentIndex} />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
  image: {
    width: 320,
    height: 240,
    borderRadius: 8,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 24,
  },
});
