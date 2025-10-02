import React from 'react';
import { Modal, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import GenreChips from './GenreChips';

export default function DetailModal({ visible, onClose, item, backdrops, cast = [] }) {
  if (!item) return null;
  const backdropSrc = backdrops[item.backdropKey];
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image source={backdropSrc} style={styles.backdrop} resizeMode="cover" />
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <GenreChips genres={item.genre || []} />
          <Text style={styles.meta}>{item.year} · {item.runtime}m</Text>
          <Text style={styles.overview}>{item.overview}</Text>
          <Text style={styles.section}>Cast</Text>
          {cast.map((c, idx) => (
            <Text key={idx} style={styles.cast}>{c.name} — {c.role}</Text>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  backdrop: { width: '100%', height: 180, backgroundColor: '#ddd' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: { fontSize: 18, fontWeight: '800', color: '#111', flex: 1, marginRight: 12 },
  close: { color: '#007aff', fontWeight: '700' },
  content: { padding: 12, gap: 10 },
  meta: { color: '#333' },
  overview: { color: '#222', lineHeight: 20 },
  section: { marginTop: 10, fontWeight: '700', color: '#111' },
  cast: { color: '#333' },
});


