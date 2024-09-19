import { Stack, Tabs } from "expo-router";
import { View, Image } from "react-native";
import { icons } from "@/constants"; // Asegúrate de que los íconos estén importados correctamente

const TabIcon = ({ focused, source }) => (
  <View>
    <View>
      <Image
        source={source}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? "white" : "gray", // Cambia el color si está enfocado
        }}
        resizeMode="contain"
      />
    </View>
  </View>
);

const Layout = () => {
  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray", // Color para íconos no seleccionados
          tabBarStyle: { backgroundColor: "#000" }, // Cambiar estilo del tab
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.chat} />
            ),
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.list} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.profile} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
