import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopDestinations } from './TopDestinations'
import { TOP_DESTINATIONS } from '../data/content'

describe('TopDestinations', () => {
  it('renders the centred title and four destination cards', () => {
    render(<TopDestinations />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Top destinations in Europe' }),
    ).toBeInTheDocument()
    expect(screen.getByText('take a look at these offers')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(TOP_DESTINATIONS.length)
    for (const destination of TOP_DESTINATIONS) {
      expect(screen.getByText(destination.name)).toBeInTheDocument()
    }
  })
})
