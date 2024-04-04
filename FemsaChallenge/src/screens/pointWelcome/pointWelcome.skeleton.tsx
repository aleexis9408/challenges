import React from 'react';
import {View} from 'react-native';
import {styles} from './pointWelcome.styleSheet';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const Skeleton = () => {
  return (
    <View testID="skeleton" style={styles.container}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item height={'15%'} marginBottom={20} />
          <SkeletonPlaceholder.Item height={'60%'} marginBottom={20} />
          <SkeletonPlaceholder.Item height={'20%'} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
