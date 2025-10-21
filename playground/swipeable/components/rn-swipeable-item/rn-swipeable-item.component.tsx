import React, { memo } from 'react';
import { Text, View } from 'react-native';
import SwipeableItem from 'react-native-swipeable-item';

export const RNSwipeableItemComponent = memo(() => {
  //쓰레기 쓰지마셈
  return (
    <View style={{ borderWidth: 1 }}>
      <SwipeableItem
        renderUnderlayRight={() => {
          return (
            <View style={{ borderWidth: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Delete</Text>
            </View>
          );
        }}
        item={{ id: '1' }}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Swipe me!</Text>
        </View>
      </SwipeableItem>
    </View>
  );
});
