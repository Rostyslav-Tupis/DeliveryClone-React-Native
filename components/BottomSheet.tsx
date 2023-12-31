import React, { useMemo, forwardRef, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ display: "none" }}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colors.lighGrey, borderRadius: 0 }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inActiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHead}>Your location</Text>
        <Link href={"/(modal)/location-search"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subHead}>Your location</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    margin: 16,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
  },
  toggle: {
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
    flexDirection: "row",
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 4,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  toggleInactive: {
    padding: 4,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inActiveText: {
    color: Colors.primary,
  },
  subHead: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});

export default BottomSheet;
