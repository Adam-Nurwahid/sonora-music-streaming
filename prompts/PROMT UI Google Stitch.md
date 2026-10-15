PROMT UI Google Stitch



**> Home Screen**

Design a desktop web UI for a music streaming platform called "Sonora".



Follow the attached DESIGN-spotify.md as the single source of truth for the design system: colors, typography, component styling, spacing, border radius, shadows, and elevation. Do not introduce any colors, fonts, or shapes outside that file. Do not use the Spotify logo or name; create an original "Sonora" wordmark in the accent green.



SCREEN: Home / Discover (1440px wide)



Layout:

\- Fixed left sidebar (#121212): wordmark at top, nav items (Home, Search, Your Library) with active = white weight 700, inactive = #b3b3b3 weight 400. Below it, a Library panel with pill filter chips (Playlists, Artists, Albums) and a list of 6 playlist rows (square cover thumbnail, title, subtitle).

\- Main content area (#181818 to #121212 subtle gradient at top): top bar with circular back/forward buttons, a pill search input (500px radius, icon on left), and a circular avatar on the right.

\- Greeting "Good evening" as section title (24px, 700), followed by a 2x4 grid of compact quick-access cards (cover art + title, hover shows a green circular play button).

\- Section "Made for you": a horizontal row of 5 album/playlist cards (#181818, 8px radius, square cover art, bold title, 2-line #b3b3b3 description). Hover state shows a floating green circular play button at the bottom right of the cover with a heavy shadow.

\- Section "Trending now": same card row with different content.

\- Section "Popular artists": a row of 5 cards with circular artist photos.

\- Fixed bottom now-playing bar: left = cover, track title, artist, heart icon; center = shuffle, previous, circular play/pause, next, repeat, plus a thin progress bar with timestamps; right = lyrics, queue, volume slider.



Style details:

\- Near-black immersive dark theme, content-first. The UI stays achromatic; all color comes from album art. Use varied, colorful placeholder cover art (abstract gradients, illustrated, or photographic) so the page feels alive.

\- Spotify-style green (#1ed760) ONLY for the play button, active states, and primary CTAs.

\- Pill buttons (9999px), circular play buttons (50%), uppercase button labels with 1.4px letter-spacing.

\- Compact, dense typography (10-24px), bold/regular weight contrast.

\- Heavy shadows (rgba(0,0,0,0.5) 0px 8px 24px) on elevated elements.



Use realistic sample content (original made-up artist names, track titles, and playlist names, a mix of pop, lo-fi, indie, and anime OST vibes).





**1. Playlist / Album Page**



Create the Playlist detail page using the same design system. Header with a large cover (232px), "PLAYLIST" label, huge bold title, creator + song count + duration. Below it, a sticky action row: large green circular play button, shuffle, heart, and a "..." menu. Then a dense track table: #, title (with cover thumbnail + artist), album, date added, duration. Highlight the currently playing row with a green title and an animated equalizer icon. The background header uses a soft gradient taken from the cover's dominant color, fading into #121212.



**2. Search Page**



Create the Search/Browse page. Pill search input is focused at the top. Below it, a "Browse all" grid of genre cards (rounded 8px, bold title top-left, tilted cover art at the bottom right, each card with a different saturated background color). Add a second state showing search results for "lofi": a Top Result card, a Songs list, and an Artists row.



**3. Now Playing / Lyrics (full screen)**



Create a full-screen Now Playing view with a large cover on the left, synced lyrics on the right (the active line is white and large, the others are dimmed #b3b3b3), with a background blurred from the cover colors darkened toward #121212. The playback controls are at the bottom.



**4. Mobile Version**



Adapt the Home screen to mobile (390px). Sidebar becomes a bottom tab bar (Home, Search, Library). Quick-access cards become a 2-column grid. A mini now-playing bar sits above the tab bar. Keep the same dark theme and pill/circle geometry.

