import React from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import {SafeAreaView, StyleSheet} from 'react-native';
import 'moment/locale/es';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
