import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularDestinations } from './PopularDestinations'
import { POPULAR_DESTINATIONS } from '../data/content'

describe('PopularDestinations', () => {
  it('renders the title and eight destination cards', () => {
    render(<PopularDestinations />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular destinations in 2018' }),
    ).toBeInTheDocument()
    expect(screen.getByText('take a look at these offers')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(POPULAR_DESTINATIONS.length)
    for (const destination of POPULAR_DESTINATIONS) {
      expect(screen.getByText(destination.name)).toBeInTheDocument()
    }
  })
})
