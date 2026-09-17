import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the reviewer name, star rating, quote, and customer avatars', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()

    expect(screen.getByText('Rated 5 out of 5', { selector: '.sr-only' })).toBeInTheDocument()

    expect(
      screen.getByText(/Appnova completely transformed how I manage my workflow/),
    ).toBeInTheDocument()

    const avatars = screen.getAllByRole('img', { name: /Customer avatar/ })
    expect(avatars).toHaveLength(4)
  })
})
