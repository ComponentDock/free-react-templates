import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedStrip } from './FeaturedStrip'
import { featuredEntries } from '../data'

describe('FeaturedStrip', () => {
  it('renders three featured post links with chips and titles', () => {
    render(<FeaturedStrip />)

    const region = screen.getByRole('region', { name: 'Featured posts' })
    for (const entry of featuredEntries) {
      expect(screen.getByRole('link', { name: new RegExp(entry.title) })).toBeInTheDocument()
      expect(screen.getByText(entry.chipLabel)).toBeInTheDocument()
    }
    expect(region).toBeInTheDocument()
  })
})
