import {View, Text, StyleSheet, Button} from "react-native";
import { useRouter } from 'expo-router';

export default function home() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top 3 Video Games</Text>
            <Text style={styles.course}>CP4282 - Programming for Mobile Devices</Text>
            <Text style={styles.name}>Tyson Harris - 20183606</Text>
            <Button onPress={() => router.navigate('index')} title="Games"></Button>
        </View>
        )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9dce1",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
   title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    },
    name: {
      fontSize: 20,
      marginBottom: 10,
    },
    course: {
      fontSize: 20,
    },
});