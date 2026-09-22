import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedClasses } from './FeaturedClasses'

describe('FeaturedClasses', () => {
  it('renders the section heading', () => {
    render(<FeaturedClasses />)
    expect(screen.getByText(/our classes/i)).toBeInTheDocument()
  })

  it('renders class cards', () => {
    render(<FeaturedClasses />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('displays class titles', () => {
    render(<FeaturedClasses />)
    expect(screen.getByText('Power Yoga')).toBeInTheDocument()
    expect(screen.getByText('CrossFit')).toBeInTheDocument()
    expect(screen.getByText('Zumba Dance')).toBeInTheDocument()
  })

  it('displays instructor names', () => {
    render(<FeaturedClasses />)
    expect(screen.getByText(/john smith/i)).toBeInTheDocument()
  })
})
