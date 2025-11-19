import { PropsWithChildren } from "react";
import { View, StatusBar, useColorScheme, Platform, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function AppTemplate(props: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {props.children}
      </KeyboardAvoidingView>

      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
    </View>
  );
}
export default AppTemplate;
