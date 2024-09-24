import { View, Text } from "react-native";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import { Google } from "@expo/config-plugins/build/ios";
import { icons } from "@/constants";
import GoogleTextInput from "@/components/GoogleTextInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Ride" snapPoints={["85%"]}>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">Desde</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">Hacia</Text>
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="transparent"
          handlePress={(location) => setDestinationLocation(location)}
        />
      </View>

      <CustomButton
        title="Encontrar Viaje"
        onPress={() => router.push("/(root)/confirm-ride")}
        className="mt-5"
      />
    </RideLayout>
  );
};

export default FindRide;
