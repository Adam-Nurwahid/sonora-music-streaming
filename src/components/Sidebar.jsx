import React, { useState } from 'react';

const navItems = [
  { icon: 'home', label: 'Home', path: 'home', active: true },
  { icon: 'search', label: 'Search', path: 'search', active: false },
  { icon: 'local_library', label: 'Your Library', path: 'your-library', active: false },
];

const libraryFilters = ['Playlists', 'Artists', 'Albums'];

const playlists = [
  { icon: 'music_note', name: 'Lo-Fi Beats to Relax', meta: 'Playlist • Sonora Curators' },
  { icon: 'waves', name: 'Ambient Soundscapes', meta: 'Playlist • Sonora Curators' },
  { icon: 'code', name: 'Deep Focus & Code', meta: 'Playlist • Instrumental' },
  { icon: 'nightlight', name: 'Midnight Chillout', meta: 'Playlist • Sonora Curators' },
  { icon: 'equalizer', name: 'Electronic Pulse', meta: 'Playlist • Synth & Bass' },
  { icon: 'piano', name: 'Acoustic Mornings', meta: 'Playlist • Acoustic Harmony' },
];

export default function Sidebar() {
  const [activeFilter, setActiveFilter] = useState('Playlists');
  const [activeNav, setActiveNav] = useState('home');

  return (
    <aside
      className="fixed left-0 top-0 z-30 flex flex-col gap-2"
      style={{
        bottom: '88px',
        width: '288px',
        padding: '1rem',
        backgroundColor: '#121212',
      }}
    >
      {/* ── Logo + Navigation Block ── */}
      <div
        className="flex flex-col gap-4 rounded-2xl p-4 shrink-0"
        style={{ backgroundColor: '#181818' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1ed760" />
            <path
              d="M8 20c4-2 8-3 14-1"
              stroke="#000"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M8 16c5-3 10-3 16 0"
              stroke="#000"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M8 12c6-4 12-3 16 0"
              stroke="#000"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="font-bold tracking-tight text-white"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.005em' }}
          >
            Sonora
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveNav(item.path); }}
              className="flex items-center gap-4 px-2 py-1 rounded-full transition-colors duration-150"
              style={{
                color: activeNav === item.path ? '#ffffff' : '#b3b3b3',
                fontWeight: activeNav === item.path ? 700 : 400,
                fontSize: '14px',
                lineHeight: '18px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { if (activeNav !== item.path) e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { if (activeNav !== item.path) e.currentTarget.style.color = '#b3b3b3'; }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '24px',
                  fontVariationSettings: activeNav === item.path
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* ── Library Block ── */}
      <div
        className="flex flex-col flex-1 min-h-0 rounded-2xl p-4"
        style={{ backgroundColor: '#181818' }}
      >
        {/* Library Header */}
        <div className="flex items-center justify-between mb-4" style={{ color: '#b3b3b3' }}>
          <div
            className="flex items-center gap-2 cursor-pointer transition-colors"
            style={{ color: '#ffffff' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>bookmarks</span>
            <span style={{ fontWeight: 700, fontSize: '16px', lineHeight: '22px', color: '#ffffff' }}>
              Playlists
            </span>
          </div>
          <button
            type="button"
            className="rounded-full flex items-center justify-center transition-colors"
            style={{ padding: '4px', color: '#b3b3b3', background: 'transparent', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.backgroundColor = '#252525';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b3b3b3';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Add playlist"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto shrink-0 pb-1">
          {libraryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className="rounded-full shrink-0 transition-colors"
              style={{
                height: '32px',
                padding: '0 12px',
                fontSize: '14px',
                fontWeight: activeFilter === filter ? 700 : 400,
                lineHeight: '20px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeFilter === filter ? '#ffffff' : '#252525',
                color: activeFilter === filter ? '#121212' : '#ffffff',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Playlist Items */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-1 pr-1">
          {playlists.map((pl) => (
            <a
              key={pl.name}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-4 rounded-2xl transition-colors group"
              style={{ padding: '6px', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#272727'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Thumbnail */}
              <div
                className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: '#2a2a2a' }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '22px', color: '#b3b3b3' }}
                >
                  {pl.icon}
                </span>
              </div>
              {/* Text */}
              <div className="flex flex-col min-w-0 flex-1">
                <span
                  className="truncate"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#ffffff' }}
                >
                  {pl.name}
                </span>
                <span
                  className="truncate"
                  style={{ fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: '#b3b3b3' }}
                >
                  {pl.meta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
