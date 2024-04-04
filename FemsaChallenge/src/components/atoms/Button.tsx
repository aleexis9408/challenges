import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {typography} from '../../theme/default';

interface Props {
  text: string;
  hadleOnPress(): void;
  customStyle?: {
    button?: StyleProp<ViewStyle>;
    button_text?: StyleProp<TextStyle>;
  };
  testID?: string;
}

export const Button = ({text, hadleOnPress, customStyle, testID}: Props) => {
  return (
    <TouchableOpacity
      testID={testID ?? 'Button'}
      style={[styles.button, customStyle?.button]}
      onPress={hadleOnPress}>
      <Text style={[styles.button_text, customStyle?.button_text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#334FFA',
    width: '100%',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.lg,
    lineHeight: 21,
  },
});
