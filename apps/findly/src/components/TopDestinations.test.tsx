import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopDestinations } from './TopDestinations'
import { DESTINATIONS } from '../data'

describe('TopDestinations', () => {
  it('renders the heading and all six city cards with Explore links', () => {
    render(<TopDestinations />)
    expect(screen.getByRole('heading', { level: 2, name: 'Top Destination' })).toBeInTheDocument()
    for (const destination of DESTINATIONS) {
      expect(screen.getByRole('heading', { level: 3, name: destination.name })).toBeInTheDocument()
      expect(screen.getByAltText(destination.name)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Explore/ })).toHaveLength(DESTINATIONS.length)
  })
})
