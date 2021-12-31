import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Styles from './styles';

import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function App() {

  const [outputText, setOutputText] = useState(
    'Open up App.js to start working on your app!'
  );

  return (
    <PaperProvider>
      <View style={styles.container}>

        <Text> {outputText} </Text>

        <Button icon="camera" mode="contained" title='Change text' style={styles.button} onPress={() => setOutputText('Button pressed!')}>
          Press Me!
        </Button>

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: '#000000',
    fontWeight: 'bold',
    fontSize: 45,
    margin: 3,
  }
});


// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { name as appName } from './app.json';
// // import App from './src/App';
// import { Button } from 'react-native-paper';

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);