import { Text } from "react-native";
import CustomButton from "@/components/CustomButton";

const Payment = () => {
  const openPaymentSheet = async () => {};
  return (
    <>
      <CustomButton
        title="Confirmar Viaje"
        className="my-5"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
