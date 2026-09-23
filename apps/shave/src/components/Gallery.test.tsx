import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()
  })

  it('renders all six gallery images', () => {
    render(<Gallery />)
    const labels = [
      'Upper Cutting',
      'Classic Trim',
      'Beard Design',
      'Hot Towel Shave',
      'Style Consultation',
      'Premium Grooming',
    ]
    for (const label of labels) {
      expect(screen.getByAltText(label)).toBeInTheDocument()
    }
  })
})
