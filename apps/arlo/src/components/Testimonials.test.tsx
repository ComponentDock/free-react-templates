import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /what clients say/i })).toBeInTheDocument()
    for (const name of ['Sarah Mitchell', 'David Chen', 'Emily Rodriguez']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText(/complete redesign ahead of schedule/i)).toBeInTheDocument()
    expect(screen.getByText(/transformed our product/i)).toBeInTheDocument()
    expect(screen.getByText(/most reliable developer/i)).toBeInTheDocument()
  })
})
