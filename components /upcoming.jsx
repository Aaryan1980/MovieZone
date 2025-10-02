import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { loadUpcomingMovies } from '../src/data/index';
import { posters, backdrops } from '../src/data/assets';
import MovieItem from '../src/components/MovieItem';
import RatingBadge from '../src/components/RatingBadge';

const spacing = 12;

export default function Upcoming() {
  const all = loadUpcomingMovies();
  const [filter, setFilter] = useState('all');

  const data = useMemo(() => {
    if (filter === 'anime') return all.filter(m => m.isAnime);
    if (filter === 'live') return all.filter(m => !m.isAnime);
    return all;
  }, [filter, all]);

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#fff', borderRadius: 10 }}>
      <MovieItem item={item} posters={posters} backdrops={backdrops} />
      <View style={styles.badgeRow}>
        <Text style={styles.coming}>Coming {formatMonthYear(item.releaseDate)}</Text>
        <RatingBadge rating={item.rating} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming</Text>
      <FlatList
        data={data}
        keyExtractor={m => m.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: spacing }} />}
        contentContainerStyle={{ padding: spacing }}
      />
    </View>
  );
}

function formatMonthYear(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const month = d.toLocaleString('en-US', { month: 'short' });
  return `${month} ${d.getFullYear()}`;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f9' },
  header: { fontSize: 24, fontWeight: '800', color: '#111', padding: spacing },
  badgeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingBottom: 12 },
  coming: { color: '#334', fontWeight: '600' },
});


