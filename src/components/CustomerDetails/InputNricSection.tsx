import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DarkButton } from "../Layout/Buttons/DarkButton";
import { InputWithLabel } from "../Layout/InputWithLabel";
import { AppText } from "../Layout/AppText";
import { SecondaryButton } from "../Layout/Buttons/SecondaryButton";
import { size, color, fontSize } from "../../common/styles";

const styles = StyleSheet.create({
  scanButtonWrapper: {
    marginTop: size(4),
    marginBottom: size(6)
  },
  horizontalRule: {
    borderBottomColor: color("grey", 30),
    marginHorizontal: -size(3),
    borderBottomWidth: 1
  },
  orWrapper: {
    position: "absolute",
    top: -fontSize(0),
    alignSelf: "center",
    backgroundColor: color("grey", 0),
    padding: size(1)
  },
  orText: {
    fontSize: fontSize(-1),
    fontFamily: "brand-bold"
  },
  inputAndButtonWrapper: {
    marginTop: size(6),
    flexDirection: "row",
    alignItems: "flex-end"
  },
  inputWrapper: {
    flex: 1,
    marginRight: size(1)
  }
});

interface InputNricSection {
  openCamera: () => void;
  nricInput: string;
  setNricInput: (nric: string) => void;
  submitNric: () => void;
}

export const InputNricSection: FunctionComponent<InputNricSection> = ({
  openCamera,
  nricInput,
  setNricInput,
  submitNric
}) => {
  return (
    <>
      <View style={styles.scanButtonWrapper}>
        <DarkButton
          fullWidth={true}
          text="Scan customer's NRIC"
          icon={
            <Feather name="maximize" size={size(2)} color={color("grey", 0)} />
          }
          onPress={openCamera}
        />
      </View>
      <View style={{ position: "relative" }}>
        <View style={styles.horizontalRule} />
        <View style={styles.orWrapper}>
          <AppText style={styles.orText}>OR</AppText>
        </View>
      </View>
      <View style={styles.inputAndButtonWrapper}>
        <View style={styles.inputWrapper}>
          <InputWithLabel
            label="Enter NRIC number"
            value={nricInput}
            onChange={({ nativeEvent: { text } }) => setNricInput(text)}
            onSubmitEditing={submitNric}
          />
        </View>
        <SecondaryButton text="Check" onPress={submitNric} />
      </View>
    </>
  );
};
