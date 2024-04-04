import React from 'react';
import {Text, StyleSheet, View, ViewStyle, TextStyle} from 'react-native';

interface Props {
  value: number;
  size?: number;
  customStyle?: {
    badge?: ViewStyle;
    badge_value?: TextStyle;
  };
}

export const Badge = ({value, size = 20, customStyle}: Props) => {
  return (
    <View
      style={[styles.badge, {width: size, height: size}, customStyle?.badge]}>
      <Text style={[styles.badge_value, customStyle?.badge_value]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  badge_value: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '800',
    color: 'white',
  },
});
