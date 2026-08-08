import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('OUR TESTIMONIAL')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /What People Say About Us/ }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Falcon Astle')).toHaveLength(2)
    expect(screen.getAllByText('Google Android')).toHaveLength(2)
    expect(screen.getAllByRole('blockquote')).toHaveLength(2)
  })
})
