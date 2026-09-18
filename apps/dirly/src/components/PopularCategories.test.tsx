import { render, screen } from '@testing-library/react'
import { PopularCategories } from './PopularCategories'
import { describe, it, expect } from 'vitest'

describe('PopularCategories', () => {
  it('renders section heading', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Most Popular Categories')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
  })

  it('renders all 4 category cards', () => {
    render(<PopularCategories />)
    const cards = ['Amazing Places', 'Concerts', 'Travel Guide', 'Music Festival']
    cards.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders listing count badges', () => {
    render(<PopularCategories />)
    const badges = screen.getAllByText(/Listings$/)
    expect(badges.length).toBe(4)
  })

  it('category cards link to #listings', () => {
    render(<PopularCategories />)
    const card = screen.getByText('Amazing Places').closest('a')
    expect(card).toHaveAttribute('href', '#listings')
  })

  it('renders images with alt text', () => {
    render(<PopularCategories />)
    expect(screen.getByAltText('Amazing Places')).toBeInTheDocument()
    expect(screen.getByAltText('Concerts')).toBeInTheDocument()
    expect(screen.getByAltText('Travel Guide')).toBeInTheDocument()
    expect(screen.getByAltText('Music Festival')).toBeInTheDocument()
  })
})
