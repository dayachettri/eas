import { StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';

export default function TabOneScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.google.com' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
