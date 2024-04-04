import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  children: React.ReactNode;
  scrollview?: boolean;
}

export const PageTemplate = ({
  children,
  scrollview = true,
}: Props): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {scrollview ? (
        <ScrollView
          contentContainerStyle={backgroundStyle}
          contentInsetAdjustmentBehavior="automatic">
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};
