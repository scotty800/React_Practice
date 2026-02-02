import { Stack } from "expo-router";
import { ThemeProvider } from "../app/(tabs)/context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
