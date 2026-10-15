import React from 'react';
import QuickAccessCard from './QuickAccessCard';
import MediaCard from './MediaCard';
import ArtistCard from './ArtistCard';

const quickAccessItems = [
  {
    id: 'quick-daily-mix-1',
    title: 'Daily Mix 1',
    gradient: 'linear-gradient(135deg, #ff5e3a 0%, #ff2a6d 50%, #05d9e8 100%)',
    svgContent: '<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>',
  },
  {
    id: 'quick-tokyo-city-pop',
    title: 'Midnight Tokyo City Pop',
    gradient: 'linear-gradient(45deg, #2b1055 0%, #7597de 50%, #ff007f 100%)',
    svgContent: '<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>',
  },
  {
    id: 'quick-anime-epic-ost',
    title: 'Anime Epic OSTs & Themes',
    gradient: 'linear-gradient(225deg, #ff0844 0%, #ffb199 50%, #480048 100%)',
    svgContent: '<path d="M13 10V3L4 14h7v7l9-11h-7z"></path>',
  },
  {
    id: 'quick-discover-weekly',
    title: 'Discover Weekly',
    gradient: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 50%, #43e97b 100%)',
    svgContent: '<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>',
  },
  {
    id: 'quick-indie-drift',
    title: 'Indie Drift & Coffeehouse',
    gradient: 'linear-gradient(135deg, #533885 0%, #9f6a42 50%, #2b1055 100%)',
    svgContent: '<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"></path>',
  },
  {
    id: 'quick-deep-focus',
    title: 'Deep Focus Instrumental',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    svgContent: '<circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="3"></circle>',
  },
  {
    id: 'quick-hyperpop-bass',
    title: 'Hyperpop & Future Bass',
    gradient: 'linear-gradient(45deg, #f12711 0%, #f5af19 50%, #d838bb 100%)',
    svgContent: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
  },
  {
    id: 'quick-release-radar',
    title: 'Release Radar',
    gradient: 'linear-gradient(225deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    svgContent: '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
  },
];

const madeForYouItems = [
  {
    id: 'made-lofi-rain',
    title: 'Lofi Rain Study',
    description: 'Gentle beats to relax and focus. With Nymano, Kupla, idealism.',
    gradient: 'linear-gradient(45deg, #141e30 0%, #243b55 100%)',
    svgContent: '<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path>',
  },
  {
    id: 'made-synthwave-horizons',
    title: 'Synthwave Horizons',
    description: 'Retrofuturistic synthesizer journeys through neon skylines.',
    gradient: 'linear-gradient(135deg, #8a2387 0%, #e94057 50%, #f27121 100%)',
    svgContent: '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>',
  },
  {
    id: 'made-chillhop-essentials',
    title: 'Chillhop Essentials',
    description: 'Fresh laidback instrumental hip-hop and jazzy textures.',
    gradient: 'linear-gradient(45deg, #11998e 0%, #38ef7d 100%)',
    svgContent: '<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>',
  },
  {
    id: 'made-tokyo-after-hours',
    title: 'Tokyo After Hours',
    description: 'Neo-soul and contemporary Japanese city groove selections.',
    gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    svgContent: '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>',
  },
  {
    id: 'made-acoustic-solitude',
    title: 'Acoustic Solitude',
    description: 'Intimate fingerstyle guitars and soothing ambient melodies.',
    gradient: 'linear-gradient(225deg, #4b1248 0%, #f0c27b 50%, #4b1248 100%)',
    svgContent: '<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>',
  },
];

const trendingItems = [
  {
    id: 'trend-neon-starlight',
    title: 'Neon Starlight',
    description: 'Luna Mirage • 2024 Album • 12 tracks',
    gradient: 'linear-gradient(45deg, #654ea3 0%, #eaafc8 100%)',
    svgContent: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
  },
  {
    id: 'trend-subterranean-echoes',
    title: 'Subterranean Echoes',
    description: 'The Velvet Rift • Synth Rock',
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #24243e 100%)',
    svgContent: '<path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>',
  },
  {
    id: 'trend-ghibli-piano',
    title: 'Ghibli Piano Reverie',
    description: 'Yuki Takahashi • Instrumental Solo',
    gradient: 'linear-gradient(225deg, #00b09b 0%, #96c93d 100%)',
    svgContent: '<path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>',
  },
  {
    id: 'trend-solaris-eclipse',
    title: 'Solaris Eclipse',
    description: 'Kaelen Drake • Electronic Ambient',
    gradient: 'linear-gradient(45deg, #000428 0%, #004e92 50%, #283c86 100%)',
    svgContent: '<circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>',
  },
  {
    id: 'trend-midnight-shinjuku',
    title: 'Midnight in Shinjuku',
    description: 'Haruka Sato • City Pop EP',
    gradient: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
    svgContent: '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>',
  },
];

const popularArtists = [
  {
    id: 'artist-komorebi-sound',
    name: 'Komorebi Sound',
    role: 'Artist',
    gradient: 'linear-gradient(45deg, #3a6186 0%, #89253e 100%)',
  },
  {
    id: 'artist-luna-mirage',
    name: 'Luna Mirage',
    role: 'Artist',
    gradient: 'linear-gradient(225deg, #ff416c 0%, #ff4b2b 100%)',
  },
  {
    id: 'artist-kenjiro-waves',
    name: 'Kenjiro & The Waves',
    role: 'Artist',
    gradient: 'linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)',
  },
  {
    id: 'artist-astral-cascade',
    name: 'Astral Cascade',
    role: 'Artist',
    gradient: 'linear-gradient(45deg, #134e5e 0%, #71b280 100%)',
  },
  {
    id: 'artist-aethelgard',
    name: 'Aethelgard Symphony',
    role: 'Artist',
    gradient: 'linear-gradient(225deg, #2c3e50 0%, #bdc3c7 50%, #2c3e50 100%)',
  },
];

export default function HomeScreen() {
  return (
    <main
      className="relative min-h-screen w-full"
      style={{
        paddingTop: '64px',
        paddingBottom: '104px',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        background: 'linear-gradient(180deg, #1e1e1e 0%, #121212 380px)',
      }}
    >
      <div className="flex flex-col w-full pb-12 pt-4">
        {/* ── Section 1: Greeting & Quick Access Cards ── */}
        <section className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between">
            <h1
              className="text-white font-bold tracking-normal"
              style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.01em' }}
            >
              Good evening
            </h1>
          </div>
          {/* 2x4 Quick Access Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickAccessItems.map((item) => (
              <QuickAccessCard
                key={item.id}
                id={item.id}
                title={item.title}
                gradient={item.gradient}
                svgContent={item.svgContent}
              />
            ))}
          </div>
        </section>

        {/* ── Section 2: 'Made for you' Row ── */}
        <section className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between">
            <h2
              className="text-white font-bold tracking-normal hover:underline cursor-pointer"
              style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.01em' }}
            >
              Made for you
            </h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-bold text-xs uppercase transition-colors"
              style={{ color: '#b3b3b3', letterSpacing: '1.4px', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Show all
            </a>
          </div>
          {/* 5 Card Media Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {madeForYouItems.map((item) => (
              <MediaCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                gradient={item.gradient}
                svgContent={item.svgContent}
              />
            ))}
          </div>
        </section>

        {/* ── Section 3: 'Trending now' Row ── */}
        <section className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between">
            <h2
              className="text-white font-bold tracking-normal hover:underline cursor-pointer"
              style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.01em' }}
            >
              Trending now
            </h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-bold text-xs uppercase transition-colors"
              style={{ color: '#b3b3b3', letterSpacing: '1.4px', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Show all
            </a>
          </div>
          {/* 5 Card Media Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {trendingItems.map((item) => (
              <MediaCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                gradient={item.gradient}
                svgContent={item.svgContent}
              />
            ))}
          </div>
        </section>

        {/* ── Section 4: 'Popular artists' Row ── */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2
              className="text-white font-bold tracking-normal hover:underline cursor-pointer"
              style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.01em' }}
            >
              Popular artists
            </h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-bold text-xs uppercase transition-colors"
              style={{ color: '#b3b3b3', letterSpacing: '1.4px', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Show all
            </a>
          </div>
          {/* 5 Artist Circular Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {popularArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                role={artist.role}
                gradient={artist.gradient}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
