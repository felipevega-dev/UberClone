import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/rides" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/chat" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
