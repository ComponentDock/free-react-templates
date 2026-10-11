import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TOURS } from '../data/content'
import { TourPackages } from './TourPackages'

describe('TourPackages', () => {
  it('renders the section heading and every rich tour card', () => {
    const { container } = render(<TourPackages />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Top Tour Packages')
    expect(container.querySelectorAll('.listing-card')).toHaveLength(TOURS.length)
    expect(screen.getAllByText('$200')).toHaveLength(TOURS.length)
    expect(screen.getAllByText('4 Rating')).toHaveLength(TOURS.length)
    expect(screen.getAllByText('2 days 3 nights')).toHaveLength(TOURS.length)
    expect(screen.getAllByText('San Franciso, CA')).toHaveLength(TOURS.length)
    expect(screen.getAllByText('Discover')).toHaveLength(TOURS.length)
    expect(container.textContent).toContain(
      'Far far away, behind the word mountains, far from the countries',
    )
    expect(container.querySelectorAll('.hover-circle-inner')).toHaveLength(TOURS.length)
    expect(container.querySelectorAll('.days-chip')).toHaveLength(TOURS.length)
  })

  it('shows no per-night suffix on tour prices', () => {
    render(<TourPackages />)
    expect(screen.queryByText('/night')).not.toBeInTheDocument()
  })
})
