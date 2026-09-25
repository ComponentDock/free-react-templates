import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Portfolio')
  })

  it('renders all 6 portfolio items', () => {
    render(<Portfolio />)
    const titles = [
      'Square Box Mockup',
      'Product Box Package',
      'Creative Package Design',
      'Packaging Brand',
      'Isometric 3D Extrusion',
      'White Space Photography',
    ]
    for (const t of titles) {
      expect(screen.getByText(t)).toBeInTheDocument()
    }
  })

  it('renders images with alt text', () => {
    render(<Portfolio />)
    expect(screen.getByAltText('Square Box Mockup')).toBeInTheDocument()
  })
})
