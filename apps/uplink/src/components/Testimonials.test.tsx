import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the left column heading and two testimonial cards', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { name: 'What our Client\u2019s Say about us' }),
    ).toBeInTheDocument()
    const authors = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(authors).toEqual(['Nellie Vega', 'Estelle Andrews'])
    expect(screen.getByText('Head of Marketing, Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('Founder, Brightlane Studio')).toBeInTheDocument()
    expect(screen.getByText(/page load times in half/i)).toBeInTheDocument()
    expect(screen.getByText(/uptime has been flawless/i)).toBeInTheDocument()
  })
})
