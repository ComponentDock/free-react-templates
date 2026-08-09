import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the heading and subtext', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2, name: 'Shop by Category' })).toBeInTheDocument()
    expect(screen.getByText(/Explore our curated collections/i)).toBeInTheDocument()
  })

  it('renders six category cards with image, name, product count, and Shop Now link', () => {
    render(<Categories />)
    const expected: Array<[string, string]> = [
      ['Clothing', '124 Products'],
      ['Accessories', '86 Products'],
      ['Footwear', '52 Products'],
      ['Bags', '38 Products'],
      ['Jewelry', '64 Products'],
      ['Watches', '28 Products'],
    ]
    for (const [name, count] of expected) {
      expect(screen.getByText(name)).toBeInTheDocument()
      expect(screen.getByText(count)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Shop Now/ })).toHaveLength(6)
  })
})
