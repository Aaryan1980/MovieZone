import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function GenreChips({ genres = [] }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {genres.map((g, idx) => (
        <View style={styles.chip} key={`${g}-${idx}`}>
          <Text style={styles.chipText}>{g}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: 8 },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#eef',
    borderRadius: 16,
  },
  chipText: {
    color: '#223',
    fontSize: 12,
    fontWeight: '600',
  },
});


