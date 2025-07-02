import {View, Text, StyleSheet} from "react-native";

export default function home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top 3 Video Games</Text>
            <Text style={styles.course}>CP4282 - Programming for Mobile Devices</Text>
            <Text style={styles.name}>Tyson Harris - 20183606</Text>
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