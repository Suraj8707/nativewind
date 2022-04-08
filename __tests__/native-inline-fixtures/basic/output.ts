import { StyleSheet } from "react-native";
import { useTailwind } from "tailwindcss-react-native";
import { Text } from "react-native";
import { TailwindProvider } from "../../../src";
export function Test() {
  return (
    <TailwindProvider>
      <Text
        style={useTailwind("font-bold", {
          styles: __tailwindStyles,
          media: __tailwindMedia,
        })}
      >
        Hello world!
      </Text>
    </TailwindProvider>
  );
}

const __tailwindStyles = StyleSheet.create({
  "font-bold": {
    fontWeight: "700",
  },
});

const __tailwindMedia = {};