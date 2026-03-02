

## Plan: Mobile Sidebar Menu, Explore Page, and Settings Page

### 1. Wire up mobile hamburger menu in `Navbar.tsx`
- Import `Sheet`, `SheetContent`, `SheetTrigger`, `SheetTitle` from `ui/sheet`
- Wrap the hamburger `<button>` with `SheetTrigger`, render `SheetContent side="left"` containing the same nav links as the desktop Sidebar (Home, Explore, Trending, Library, History, Liked + Browse section)
- Include Voidstream logo at top and footer at bottom
- Links use `<Link>` and close the sheet on tap via controlled `open` state

### 2. Create `/explore` — Explore Channels page (`src/pages/Explore.tsx`)
- Grid of channel cards with avatar, name, subscriber count, and a Subscribe button
- Category filter pills at top (All, Gaming, Music, Tech, Movies, etc.)
- Uses mock channel data inline
- Includes `Navbar` at top

### 3. Create `/settings` — Settings page (`src/pages/Settings.tsx`)
- Sections: Account, Notifications preferences, Appearance (theme toggle placeholder), Privacy
- Simple form-like layout with toggle switches and inputs
- Wire the Settings button on the Profile page to link to `/settings`
- Includes `Navbar` at top

### 4. Update routing in `App.tsx`
- Add routes for `/explore` and `/settings`

### 5. Update navigation links
- Sidebar "Explore" button links to `/explore`
- Profile page Settings icon links to `/settings`
- Mobile sheet nav links to `/explore` as well

