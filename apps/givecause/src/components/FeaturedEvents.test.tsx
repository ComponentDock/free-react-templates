import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedEvents } from './FeaturedEvents'

describe('FeaturedEvents', () => {
  it('renders section heading', () => {
    render(<FeaturedEvents />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Events')
  })

  it('renders three event cards', () => {
    render(<FeaturedEvents />)
    expect(screen.getByText('Charity Gala Night')).toBeInTheDocument()
    expect(screen.getByText('Community Health Fair')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Appreciation Day')).toBeInTheDocument()
  })

  it('displays event dates and locations', () => {
    render(<FeaturedEvents />)
    expect(screen.getByText('15 Mar')).toBeInTheDocument()
    expect(screen.getByText('Grand Ballroom, City Center')).toBeInTheDocument()
  })
})
