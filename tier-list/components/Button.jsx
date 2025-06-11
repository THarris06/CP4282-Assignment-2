import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
    label: string;
    index: number;
    setGame: (index: number) => void;
    currentIndex: number;
};

export default function Button({ label, index, setGame, currentIndex }: Props) {
    const isActive = index === currentIndex;

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, isActive && styles.activeButton]} onPress={() => setGame(index)}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 8,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  activeButton: {
    backgroundColor: '#5558FA',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

