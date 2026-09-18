import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'
import { categories } from '../data'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Categories')
  })

  it('renders the script subheading', () => {
    render(<Categories />)
    expect(screen.getByText('Most popular')).toBeInTheDocument()
  })

  it('renders all category cards with counts', () => {
    render(<Categories />)
    for (const cat of categories) {
      expect(screen.getByText(cat.name)).toBeInTheDocument()
      expect(screen.getByText(`${cat.count} Listings`)).toBeInTheDocument()
    }
  })

  it('renders exactly 4 category cards', () => {
    render(<Categories />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
  })
})
