import React, { useState } from 'react';

/**
 * MediaCard — rectangular card for albums / playlists in 5-column grids
 * Props:
 *   - title: Title of the album / playlist
 *   - description: Short description or meta string
 *   - gradient: Gradient background for artwork
 *   - svgContent: Inner SVG artwork paths
 *   - id: Unique element id for testing/interaction
 */
export default function MediaCard({ title, description, gradient, svgContent, id }) {
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
      {/* Artwork Container */}
      <div
        className="relative w-full aspect-square rounded-md overflow-hidden flex items-center justify-center shadow-lg"
        style={{
          background: gradient,
          boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <svg
          className="w-20 h-20 transition-transform duration-500"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />

        {/* Hover / Active Floating Green Play Button */}
        <button
          type="button"
          id={id}
          aria-label={`Play ${title}`}
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
        {title}
      </h3>
      <p
        className="mt-1 line-clamp-2 leading-relaxed"
        style={{ fontSize: '14px', lineHeight: '20px', color: '#b3b3b3' }}
      >
        {description}
      </p>
    </div>
  );
}
