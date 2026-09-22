import { render, screen } from '@testing-library/react'
import { Restaurant } from './Restaurant'

describe('Restaurant', () => {
  it('renders section heading', () => {
    render(<Restaurant />)
    expect(screen.getByRole('heading', { name: 'Restaurant' })).toBeInTheDocument()
  })

  it('renders all menu items', () => {
    render(<Restaurant />)
    expect(screen.getByRole('heading', { name: 'Grilled Crab with Onion' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lobster Thermidor' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Grilled Salmon' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wagyu Steak' })).toBeInTheDocument()
  })

  it('renders menu prices', () => {
    render(<Restaurant />)
    expect(screen.getByText('$20.00')).toBeInTheDocument()
    expect(screen.getByText('$35.00')).toBeInTheDocument()
    expect(screen.getByText('$25.00')).toBeInTheDocument()
    expect(screen.getByText('$45.00')).toBeInTheDocument()
  })

  it('renders View All Menu link', () => {
    render(<Restaurant />)
    expect(screen.getByRole('link', { name: /view all menu/i })).toBeInTheDocument()
  })

  it('renders menu item images', () => {
    render(<Restaurant />)
    expect(screen.getByAltText('Grilled Crab with Onion')).toHaveAttribute(
      'src',
      expect.stringContaining('portlight-food-1'),
    )
  })
})
