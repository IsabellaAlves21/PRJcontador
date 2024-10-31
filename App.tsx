import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
 
export default function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);
 
  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Contador</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          style={styles.switch}
        />
      </View>
 
      {/* Contador */}
      <View style={styles.counterContainer}>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={increment} />
          <Button title="-" onPress={decrement} disabled={count === 0} />
        </View>
        {count === 0 && <Text style={styles.warningText}>O número não pode ser menor que 0</Text>}
      </View>
 
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>By XPTO - Apps</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#a3d39c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  switch: {
    marginRight: 10,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  warningText: {
    color: 'red',
    marginTop: 10,
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#a3d39c',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  lightBackground: {
    backgroundColor: '#f5e0a3',
  },
});
 
 