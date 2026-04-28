import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Civic from "./assets/Civic.jpg"



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fast and Furious</Text>
      <Image style={styles.Civic}
        source={Civic} width={280} height={240}
      />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
