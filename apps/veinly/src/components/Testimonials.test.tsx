import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders on the light background with the heading and four quote cards', () => {
    render(<Testimonials />)

    const section = screen.getByTestId('testimonials')
    expect(section.className).toContain('bg-light')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Testimonial')

    const cards = screen.getAllByTestId('testimonial-card')
    expect(cards).toHaveLength(4)

    for (const item of testimonials) {
      expect(screen.getByText(item.quote)).toBeInTheDocument()
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: item.name })).toHaveAttribute('src', item.image)
    }
  })

  it('styles quotes via the testimonial-quote serif class', () => {
    render(<Testimonials />)

    const first = testimonials[0]
    expect(first).toBeDefined()
    const quote = screen.getByText(first?.quote ?? '')
    expect(quote.className).toContain('testimonial-quote')
  })
})
