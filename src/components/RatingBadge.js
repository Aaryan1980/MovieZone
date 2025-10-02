import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RatingBadge({ rating }) {
  const value = Number(rating || 0);
  const text = value > 0 ? value.toFixed(1) : 'NR';
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#ffd666',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#3b2e02',
    fontWeight: '700',
    fontSize: 12,
  },
});


