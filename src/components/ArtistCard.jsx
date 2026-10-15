import React, { useState } from 'react';

/**
 * ArtistCard — circular artist card in 5-column grid
 * Props:
 *   - name: Artist name
 *   - role: Subtitle (defaults to 'Artist')
 *   - gradient: Gradient background for circular avatar
 *   - id: Unique id for testing/interaction
 */
export default function ArtistCard({ name, role = 'Artist', gradient, id }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group rounded-lg p-4 flex flex-col cursor-pointer relative shadow-sm transition-all duration-300"
      style={{
        backgroundColor: hovered ? '#272727' : '#181818',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circular Avatar Container */}
      <div
        className="relative w-full aspect-square rounded-full overflow-hidden flex items-center justify-center shadow-md"
        style={{
          background: gradient,
          boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
        }}
      >
        <svg
          className="w-24 h-24 text-white/40 transition-transform duration-500"
          style={{
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        </svg>

        {/* Hover / Active Floating Green Play Button */}
        <button
          type="button"
          id={id}
          aria-label={`Play ${name}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="absolute right-2 bottom-2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-out"
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#1ed760',
            border: 'none',
            boxShadow: '0px 8px 16px rgba(0,0,0,0.6)',
            opacity: hovered || isPlaying ? 1 : 0,
            transform: hovered || isPlaying ? 'translateY(0)' : 'translateY(8px)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '28px',
              color: '#000000',
              fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 28",
            }}
          >
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>

      {/* Details */}
      <h3
        className="truncate font-bold text-white mt-3.5"
        style={{ fontSize: '16px', lineHeight: '22px' }}
      >
        {name}
      </h3>
      <p
        className="mt-1"
        style={{ fontSize: '14px', lineHeight: '20px', color: '#b3b3b3' }}
      >
        {role}
      </p>
    </div>
  );
}
