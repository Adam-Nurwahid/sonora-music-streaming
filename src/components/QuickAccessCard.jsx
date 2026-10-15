import React, { useState } from 'react';

/**
 * QuickAccessCard — horizontal card in the 2x4 grid on Home Screen
 * Props:
 *   - gradient: CSS gradient string for the colored thumbnail
 *   - icon: SVG path element(s) as a string (rendered via dangerouslySetInnerHTML)
 *   - title: Card label text
 *   - id: unique aria id
 */
export default function QuickAccessCard({ gradient, svgContent, title, id }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center overflow-hidden cursor-pointer transition-colors duration-200"
      style={{
        height: '64px',
        borderRadius: '6px',
        backgroundColor: hovered ? '#2a2a2a' : '#252525',
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colored Thumbnail */}
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: '64px',
          height: '64px',
          background: gradient,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>

      {/* Title */}
      <span
        className="flex-1 min-w-0 truncate"
        style={{
          padding: '0 1rem',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '20px',
          color: '#ffffff',
        }}
      >
        {title}
      </span>

      {/* Hover Play Button */}
      <div
        className="shrink-0 transition-all duration-200"
        style={{
          paddingRight: '1rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        }}
      >
        <button
          type="button"
          aria-label={`Play ${title}`}
          id={id}
          className="flex items-center justify-center rounded-full transition-transform"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#1ed760',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 8px 16px rgba(0,0,0,0.5)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '22px',
              color: '#000000',
              fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            play_arrow
          </span>
        </button>
      </div>
    </div>
  );
}
