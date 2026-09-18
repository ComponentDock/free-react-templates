import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and all testimonials', () => {
    render(<Testimonials />)

    expect(screen.getByText('Read Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Happy Customer Says' })).toBeInTheDocument()

    for (const name of ['Jeff Freshman', 'Sarah Mitchell', 'Mike Reynolds']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    const quotes = screen.getAllByText(/Far far away/)
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })
})
