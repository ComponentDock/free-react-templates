import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: /Loved by 150,000\+ Users/ })).toBeInTheDocument()

    for (const name of ['Sarah Chen', 'Marcus Johnson', 'Emily Rodriguez']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByLabelText('5 out of 5 stars')).toHaveLength(3)
  })
})
