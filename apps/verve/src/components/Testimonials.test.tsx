import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three reviewer quotes', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Our satisfied customer says/i }),
    ).toBeInTheDocument()

    const quotes = screen.getAllByText(/Dennis Green/i)
    expect(quotes.length).toBe(3)

    for (const role of ['Marketing Manager', 'Interface Designer', 'UI Designer']) {
      expect(screen.getByText(role)).toBeInTheDocument()
    }
  })
})
