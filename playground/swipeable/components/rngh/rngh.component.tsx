import { memo, useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import Swipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type IRNGHSwipeableComponentProps = {
  childrenContainerWidth: number;
};

export const RNGHSwipeableComponent = memo<IRNGHSwipeableComponentProps>(({ childrenContainerWidth }) => {
  const SwipeableRef = useRef<SwipeableMethods>(null);

  const closeSwipeable = useCallback(() => {
    if (!SwipeableRef.current) {
      return;
    }
    SwipeableRef.current.close();
  }, []);
  const RightAction = memo(({ drag }: { drag: SharedValue<number> }) => {
    const styleAnimation = useAnimatedStyle(() => ({
      transform: [{ translateX: drag.value + childrenContainerWidth }],
    }));

    return (
      <Reanimated.View
        style={[styleAnimation, { width: childrenContainerWidth, paddingHorizontal: 4 }]}
        onTouchStart={closeSwipeable}>
        <Text style={{ backgroundColor: 'purple', height: '100%', borderRadius: 8, padding: 10 }}>Text</Text>
      </Reanimated.View>
    );
  });

  return (
    <Swipeable
      ref={SwipeableRef}
      containerStyle={{ width: '100%', paddingHorizontal: 4 }}
      friction={1}
      rightThreshold={childrenContainerWidth}
      overshootRight={false}
      renderRightActions={(_, drag) => {
        return <RightAction drag={drag} />;
      }}>
      <View
        style={{
          width: '100%',
          paddingVertical: 20,

          borderRadius: 8,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Right Action</Text>
      </View>
    </Swipeable>
  );
});
