import { Redirect } from 'expo-router';

export default function Playground() {
  // return <PlaygroundScreen />;
  return <Redirect href="/playground/swipeable" />;
}
