import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const App = () => (
   <SafeAreaView style={styles.container}>
     <View>
        <Text>Finance Tracking</Text>
     </View>
     <StatusBar style="auto"/>
   </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;
