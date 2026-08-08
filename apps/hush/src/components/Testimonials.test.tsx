import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least three testimonial quotes', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Transformed by Stillness' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Jennifer Walsh')).toBeInTheDocument()
    expect(screen.getByText('Ruth Alvarado')).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
  })

  it('gives each quote a context line', () => {
    render(<Testimonials />)
    expect(screen.getByText('After a 5-day silent retreat')).toBeInTheDocument()
    expect(screen.getByText('Ongoing spiritual direction')).toBeInTheDocument()
  })
})
