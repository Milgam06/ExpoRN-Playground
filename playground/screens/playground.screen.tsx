import { memo } from 'react';
import { Text, View } from 'react-native';

export const PlaygroundScreen = memo(() => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Playground</Text>
    </View>
  );
});
