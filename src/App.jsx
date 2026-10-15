import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HomeScreen from './components/HomeScreen';
import NowPlayingBar from './components/NowPlayingBar';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-[#e5e2e1] antialiased select-none font-sans">
      {/* ── Left Sidebar (288px fixed) ── */}
      <Sidebar />

      {/* ── Main Content Area (offset left by sidebar width) ── */}
      <div style={{ paddingLeft: '288px' }}>
        <TopBar />
        <HomeScreen />
      </div>

      {/* ── Bottom Persistent Now Playing Bar ── */}
      <NowPlayingBar />
    </div>
  );
}
