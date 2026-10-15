import React, { useState } from 'react';

export default function NowPlayingBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [progress, setProgress] = useState(49);
  const [volume, setVolume] = useState(70);

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between"
      style={{
        height: '88px',
        backgroundColor: '#181818',
        padding: '0 1.5rem',
        borderTop: '1px solid #252525',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.6)',
      }}
    >
      {/* ── Left Section: Track Info (30%) ── */}
      <div className="flex items-center gap-4 w-[30%] min-w-0">
        <div
          className="rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#353534',
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '28px', color: '#ffffff' }}
          >
            album
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span
            className="truncate font-bold text-white hover:underline cursor-pointer"
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            Midnight Reverie
          </span>
          <span
            className="truncate hover:underline cursor-pointer"
            style={{ fontSize: '12px', lineHeight: '16px', color: '#b3b3b3' }}
          >
            Komorebi Sound
          </span>
        </div>
        <button
          type="button"
          aria-label="Save to Library"
          onClick={() => setIsLiked(!isLiked)}
          className="shrink-0 transition-transform hover:scale-110 ml-2"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            color: isLiked ? '#1ed760' : '#b3b3b3',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '20px',
              fontVariationSettings: isLiked
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20"
                : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20",
            }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* ── Center Section: Transport Controls & Progress (40%) ── */}
      <div className="flex flex-col items-center gap-1.5 w-[40%] max-w-[600px]">
        {/* Buttons */}
        <div className="flex items-center gap-6" style={{ color: '#b3b3b3' }}>
          <button
            type="button"
            aria-label="Shuffle"
            onClick={() => setIsShuffle(!isShuffle)}
            className="transition-colors"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isShuffle ? '#1ed760' : '#b3b3b3',
              padding: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              shuffle
            </span>
          </button>
          <button
            type="button"
            aria-label="Previous"
            className="hover:text-white transition-colors"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', padding: 0 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              skip_previous
            </span>
          </button>
          <button
            type="button"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md"
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#1ed760',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '24px',
                color: '#000000',
                fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="hover:text-white transition-colors"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', padding: 0 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              skip_next
            </span>
          </button>
          <button
            type="button"
            aria-label="Repeat"
            onClick={() => setIsRepeat(!isRepeat)}
            className="transition-colors"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isRepeat ? '#1ed760' : '#b3b3b3',
              padding: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              repeat
            </span>
          </button>
        </div>

        {/* Progress Timeline */}
        <div className="flex items-center gap-2 w-full text-xs" style={{ color: '#b3b3b3' }}>
          <span className="w-8 text-right font-mono text-[11px]">1:42</span>
          <div
            className="flex-1 h-1 rounded-full relative cursor-pointer group"
            style={{ backgroundColor: '#353534' }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.round((clickX / rect.width) * 100));
            }}
          >
            <div
              className="h-full rounded-full transition-colors group-hover:bg-[#1ed760]"
              style={{
                width: `${progress}%`,
                backgroundColor: '#ffffff',
              }}
            />
          </div>
          <span className="w-8 text-left font-mono text-[11px]">3:28</span>
        </div>
      </div>

      {/* ── Right Section: Audio & System Controls (30%) ── */}
      <div className="flex items-center justify-end gap-4 w-[30%]" style={{ color: '#b3b3b3' }}>
        <button
          type="button"
          aria-label="Lyrics"
          className="hover:text-white transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', padding: 0 }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            mic
          </span>
        </button>
        <button
          type="button"
          aria-label="Queue"
          className="hover:text-white transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', padding: 0 }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            queue_music
          </span>
        </button>
        <button
          type="button"
          aria-label="Connect to a device"
          className="hover:text-white transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', padding: 0 }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            devices
          </span>
        </button>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Mute"
            onClick={() => setVolume(volume === 0 ? 70 : 0)}
            className="hover:text-white transition-colors"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', padding: 0 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              {volume === 0 ? 'volume_off' : volume < 50 ? 'volume_down' : 'volume_up'}
            </span>
          </button>
          <div
            className="w-24 h-1 rounded-full relative cursor-pointer group"
            style={{ backgroundColor: '#353534' }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setVolume(Math.round((clickX / rect.width) * 100));
            }}
          >
            <div
              className="h-full rounded-full transition-colors group-hover:bg-[#1ed760]"
              style={{
                width: `${volume}%`,
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
