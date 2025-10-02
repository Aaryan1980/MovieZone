import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { loadHomeMovies, loadCastMap } from '../src/data/index';
import { posters, backdrops } from '../src/data/assets';
import MovieItem from '../src/components/MovieItem';
import DetailModal from '../src/components/DetailModal';

const spacing = 12;

export default function Home() {
  const all = loadHomeMovies();
  const castMap = loadCastMap();
  const [filter, setFilter] = useState('all'); // all | anime | live
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const data = useMemo(() => {
    if (filter === 'anime') return all.filter(m => m.isAnime);
    if (filter === 'live') return all.filter(m => !m.isAnime);
    return all;
  }, [filter, all]);

  const onPressItem = (item) => {
    setSelected(item);
    setVisible(true);
  };

  const renderItem = ({ item }) => (
    <MovieItem item={item} posters={posters} backdrops={backdrops} onPress={onPressItem} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      <View style={styles.filters}>
        <FilterButton label="All" active={filter==='all'} onPress={() => setFilter('all')} />
        <FilterButton label="Anime" active={filter==='anime'} onPress={() => setFilter('anime')} />
        <FilterButton label="Live‑Action" active={filter==='live'} onPress={() => setFilter('live')} />
      </View>

      <FlatList
        data={data}
        keyExtractor={m => m.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: spacing }} />}
        contentContainerStyle={{ padding: spacing }}
      />

      <DetailModal
        visible={visible}
        onClose={() => setVisible(false)}
        item={selected}
        backdrops={backdrops}
        cast={selected ? (castMap[String(selected.id)] || []) : []}
      />
    </View>
  );
}

function FilterButton({ label, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.filterBtn, active && styles.filterActive]}>
      <Text style={[styles.filterText, active && styles.filterTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f9' },
  header: { fontSize: 24, fontWeight: '800', color: '#111', padding: spacing },
  filters: { flexDirection: 'row', gap: 8, paddingHorizontal: spacing, marginBottom: 4 },
  filterBtn: { paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#eef', borderRadius: 16 },
  filterActive: { backgroundColor: '#cddaff' },
  filterText: { color: '#334', fontWeight: '600' },
  filterTextActive: { color: '#112' },
});


