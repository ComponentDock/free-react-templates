import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the categories section', () => {
    render(<Categories />)
    expect(screen.getByRole('region', { name: /categories/i })).toBeInTheDocument()
  })

  it('renders 4 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Sunglasses')).toBeInTheDocument()
    expect(screen.getByText('Watches')).toBeInTheDocument()
    expect(screen.getByText('Hoodies')).toBeInTheDocument()
    expect(screen.getByText('Fashion')).toBeInTheDocument()
  })

  it('each category links to shop', () => {
    render(<Categories />)
    const links = screen.getAllByRole('link')
    const categoryLinks = links.filter((l) =>
      ['Sunglasses', 'Watches', 'Hoodies', 'Fashion'].includes(l.textContent ?? ''),
    )
    expect(categoryLinks).toHaveLength(4)
    categoryLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#shop')
    })
  })
})
