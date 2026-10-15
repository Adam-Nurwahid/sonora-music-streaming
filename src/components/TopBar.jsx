import React from 'react';

export default function TopBar() {
  return (
    <header
      className="fixed z-20 flex items-center justify-between"
      style={{
        top: 0,
        left: '288px',
        right: 0,
        height: '64px',
        backgroundColor: 'rgba(18,18,18,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '0 1.5rem',
        boxShadow: '0 1px 8px rgba(0,0,0,0.4)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* ── Left: Navigation + Search ── */}
      <div className="flex items-center gap-4">
        {/* Back / Forward Buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Go back"
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#0e0e0e',
              color: '#b3b3b3',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.backgroundColor = '#272727';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b3b3b3';
              e.currentTarget.style.backgroundColor = '#0e0e0e';
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
          </button>
          <button
            type="button"
            aria-label="Go forward"
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#0e0e0e',
              color: '#b3b3b3',
              border: 'none',
              cursor: 'not-allowed',
              opacity: 0.4,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', width: '480px' }}>
          <span
            className="material-symbols-outlined"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '20px',
              color: '#b3b3b3',
              pointerEvents: 'none',
            }}
          >
            search
          </span>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            style={{
              width: '100%',
              height: '48px',
              paddingLeft: '48px',
              paddingRight: '1rem',
              backgroundColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: '9999px',
              border: 'none',
              outline: 'none',
              fontSize: '14px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
              lineHeight: '20px',
              boxShadow: '0px 1px 0px #121212, inset 0px 0px 0px 1px #4d4d4d',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = '#252525';
              e.target.style.boxShadow = '0px 0px 0px 2px #ffffff, 0px 0px 0px 3px #000000';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = '#1f1f1f';
              e.target.style.boxShadow = '0px 1px 0px #121212, inset 0px 0px 0px 1px #4d4d4d';
            }}
          />
        </div>
      </div>

      {/* ── Right: Premium Button + Profile ── */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-full transition-colors"
          style={{
            height: '32px',
            padding: '0 12px',
            backgroundColor: '#252525',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'DM Sans, sans-serif',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#272727'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#252525'}
        >
          Explore Premium
        </button>

        {/* Profile Avatar */}
        <button
          type="button"
          aria-label="Profile"
          className="flex items-center justify-center transition-opacity"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #1ed760, #006e2c)',
              fontSize: '14px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            U
          </div>
        </button>
      </div>
    </header>
  );
}
