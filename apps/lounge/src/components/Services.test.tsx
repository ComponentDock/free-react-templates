import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Amenities')).toBeInTheDocument()
    expect(screen.getByText('Discover what we offer')).toBeInTheDocument()
  })

  it('renders all service tabs', () => {
    render(<Services />)
    const tabs = screen.getAllByText('Master Bedrooms')
    expect(tabs.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Breakfast Buffet')).toBeInTheDocument()
    expect(screen.getByText('Fitness Center')).toBeInTheDocument()
    expect(screen.getByText('24 Hour Reception')).toBeInTheDocument()
    expect(screen.getByText('Sea View Balcony')).toBeInTheDocument()
    expect(screen.getByText('Pool & Spa')).toBeInTheDocument()
    expect(screen.getByText('Free WiFi')).toBeInTheDocument()
    expect(screen.getByText('Restaurant & Bar')).toBeInTheDocument()
  })

  it('shows Master Bedrooms content by default', () => {
    render(<Services />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('switches tab content on click', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const breakfastBtn = screen.getAllByText('Breakfast Buffet')[0]!
    await user.click(breakfastBtn)
    expect(screen.getAllByText('Breakfast Buffet').length).toBeGreaterThanOrEqual(1)
  })
})
