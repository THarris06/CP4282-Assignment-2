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
        marginHorizontal: 5,
    },
    button: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#333',
    },
    activeButton: {
        backgroundColor: '#5558FA',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
