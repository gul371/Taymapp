import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const prayers = [
  { id: '1', name: 'Fajr', time: '5:30 AM' },
  { id: '2', name: 'Dhuhr', time: '1:00 PM' },
  { id: '3', name: 'Asr', time: '4:30 PM' },
  { id: '4', name: 'Maghrib', time: '6:30 PM' },
  { id: '5', name: 'Isha', time: '8:00 PM' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={prayers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    color: '#666666',
  },
});
