import { memo } from 'react';
import { View } from 'react-native';
import { RNGHSwipeableComponent } from '../components';

export const SwipeableScreen = memo(() => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RNGHSwipeableComponent childrenContainerWidth={100} />
      {/* <RNSwipeableItemComponent /> */}
    </View>
  );
});
