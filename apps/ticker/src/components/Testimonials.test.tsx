import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and three testimonials with round avatars', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Traders Who Changed Their Lives' }),
    ).toBeInTheDocument()

    for (const name of ['David Okafor', 'Priya Sharma', 'Lucas Meyer']) {
      expect(screen.getByText(name)).toBeInTheDocument()
      expect(screen.getByAltText(`${name} portrait`)).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/ticker-'),
      )
    }

    const quotes = screen.getAllByRole('blockquote')
    expect(quotes).toHaveLength(3)
  })
})
