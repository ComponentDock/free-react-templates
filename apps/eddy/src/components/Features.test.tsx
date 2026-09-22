import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and all 4 feature cards', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)

    expect(screen.getByText('Phone Booking')).toBeInTheDocument()
    expect(screen.getByText('Locations')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Spa')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)

    expect(screen.getByText(/premium phone booking service/)).toBeInTheDocument()
    expect(screen.getByText(/stunning beachfront location/)).toBeInTheDocument()
    expect(screen.getByText(/world-class dining/)).toBeInTheDocument()
    expect(screen.getByText(/luxury spa/)).toBeInTheDocument()
  })
})
