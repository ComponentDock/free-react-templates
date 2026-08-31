# CalTile Implementation Guide & Tasks

## Overview

Recreation of ColorLib Calendar 20 under the new original name **CalTile**.

## Section Breakdown & Fidelity Plan

1. **Header / Navbar:**
   - App brand ("CalTile"), quick navigation links (Dashboard, Calendar, Schedule, Settings), and profile/notifications avatar.
2. **Hero / Summary Banner:**
   - Welcome greeting, quick stats (upcoming events, pending tasks), and "New Event" CTA button.
3. **Main Calendar Grid Section:**
   - Month & year header with prev/next navigation.
   - 7-column grid for days of the week and date cells with event count dots or pill badges.
4. **Daily Agenda / Events Panel:**
   - Detailed timeline/list of events for the selected date with time, title, category tags, and edit/delete actions.
5. **Footer:**
   - Copyright notice, quick links, and mandatory attribution link to `https://www.componentdock.com/` ("Component Dock").

## Design & Token Notes

- Brand primary: Indigo (`indigo-600`), neutral slate for clean enterprise productivity aesthetic.
- Fully responsive layout (grid stacks on mobile, side-by-side on desktop).
- Zero ColorLib mentions in app source.
