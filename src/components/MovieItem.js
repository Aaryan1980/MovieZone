import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RatingBadge from './RatingBadge';
import GenreChips from './GenreChips';

export default function MovieItem({ item, posters, backdrops, onPress }) {
  const posterSource = posters[item.posterKey];
  return (
    <TouchableOpacity onPress={() => onPress && onPress(item)} style={styles.row} activeOpacity={0.8}>
      <Image source={posterSource} style={styles.poster} resizeMode="cover" />
      <View style={styles.right}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{item.year}</Text>
          <Text style={styles.dot}>·</Text>
          <RatingBadge rating={item.rating} />
        </View>
        <View style={{ height: 28 }}>
          <GenreChips genres={item.genre?.slice(0, 3) || []} />
        </View>
        <Text style={styles.overview} numberOfLines={2}>{item.overview}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 12,
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  poster: {
    width: 84,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
    marginBottom: 6,
  },
  meta: {
    color: '#333',
    fontSize: 12,
  },
  dot: {
    color: '#888',
    fontSize: 12,
  },
  overview: {
    color: '#444',
    fontSize: 13,
  },
});


