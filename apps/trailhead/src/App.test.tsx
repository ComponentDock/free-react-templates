import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { categoryColumns, footerCredit, popularHeading } from './data'

describe('App', () => {
  it('composes every section and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Trailhead — Hiking Blog')
    // Header
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Homepage/ }).length).toBeGreaterThan(0)
    // Hero slider shows the first slide title
    expect(
      screen.getByRole('heading', {
        name: 'The 20 Biggest Hiking Trails You Can Walk In 2019',
      }),
    ).toBeInTheDocument()
    // Featured strip (3 entries)
    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    // Retro layout
    expect(screen.getByRole('region', { name: 'Photo highlights' })).toBeInTheDocument()
    // Popular posts
    expect(screen.getByRole('heading', { name: popularHeading })).toBeInTheDocument()
    // Category columns
    for (const column of categoryColumns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
    }
    // Footer
    expect(screen.getByText(new RegExp(footerCredit.replace('♥', '♥')))).toBeInTheDocument()
  })
})
