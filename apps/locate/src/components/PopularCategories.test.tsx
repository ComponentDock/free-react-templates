import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PopularCategories } from './PopularCategories'

describe('PopularCategories', () => {
  it('renders the section heading', () => {
    render(<PopularCategories />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Categories' }),
    ).toBeInTheDocument()
  })

  it('renders 6 category tiles', () => {
    render(<PopularCategories />)
    const names = ['Hotels', 'Events', 'Spa', 'Stores', 'Restaurants', 'Other']
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('displays listing counts', () => {
    render(<PopularCategories />)
    expect(screen.getByText('4,892')).toBeInTheDocument()
    expect(screen.getByText('482')).toBeInTheDocument()
  })

  it('renders View All Categories button', () => {
    render(<PopularCategories />)
    expect(screen.getByRole('link', { name: 'View All Categories' })).toBeInTheDocument()
  })
})
