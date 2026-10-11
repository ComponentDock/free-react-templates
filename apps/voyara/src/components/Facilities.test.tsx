import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders the centred Superb Facilities header for the icon-grid section', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { level: 1, name: 'Superb Facilities' })).toBeInTheDocument()
    expect(screen.getByText(/everything you need for a/i)).toBeInTheDocument()
  })

  it('renders the three unique items repeated twice in a 2x3 grid', () => {
    render(<Facilities />)
    const titles = screen.getAllByRole('heading', { level: 4 }).map((h) => h.textContent)
    expect(titles).toEqual([
      'Easy Flight Search',
      'Get Hotel Offers',
      'Holiday Packages',
      'Easy Flight Search',
      'Get Hotel Offers',
      'Holiday Packages',
    ])
    expect(screen.getAllByTestId('facility-card')).toHaveLength(6)
    expect(screen.getAllByTestId('facility-card')[0]).toHaveClass('group')
  })

  it('exposes the brand gradient definition the facility icons pick up on hover', () => {
    render(<Facilities />)
    expect(screen.getByTestId('facility-gradient')).toBeInTheDocument()
  })
})
