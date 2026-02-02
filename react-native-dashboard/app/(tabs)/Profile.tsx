import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function ProfileScreen() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === 'dark' ? '#333' : '#fff' }}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Profil utilisateur</Text>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Thème actuel : {theme}</Text>
      <Button title="Changer thème" onPress={toggleTheme} />
    </SafeAreaView>
  );
}
