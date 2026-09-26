import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Instagram from './Instagram'

describe('Instagram', () => {
  it('renders the heading', () => {
    render(<Instagram />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders 8 instagram images', () => {
    render(<Instagram />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })

  it('each image has an accessible label', () => {
    render(<Instagram />)
    for (let i = 1; i <= 8; i++) {
      expect(screen.getByRole('link', { name: `Instagram photo ${i}` })).toBeInTheDocument()
    }
  })
})
