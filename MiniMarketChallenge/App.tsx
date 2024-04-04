import React from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/state-manager/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
