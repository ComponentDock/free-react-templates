import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapSection } from './MapSection'
import { MAP_TITLE } from '../data'

describe('MapSection', () => {
  it('renders a full-width OpenStreetMap embed', () => {
    render(<MapSection />)
    expect(screen.getByText(MAP_TITLE)).toBeInTheDocument()
    const map = screen.getByTitle('Machina location map')
    expect(map).toHaveAttribute('src', expect.stringContaining('openstreetmap.org'))
    expect(map).toHaveAttribute('loading', 'lazy')
  })
})
