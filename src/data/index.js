// Synchronous data accessors reading from local JSON. No networking.
// This enables instant rendering and works offline.

import home from '../../api_data/movies_home.json';
import upcoming from '../../api_data/movies_upcoming.json';
import genres from '../../api_data/genres.json';
import castMap from '../../api_data/cast_map.json';

export function loadHomeMovies() {
  return home;
}

export function loadUpcomingMovies() {
  return upcoming;
}

export function loadGenres() {
  return genres;
}

export function loadCastMap() {
  return castMap;
}


