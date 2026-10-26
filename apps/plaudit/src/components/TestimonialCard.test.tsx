import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialCard } from './TestimonialCard'
import { TESTIMONIALS } from '../content'

const [mint, dark, peach] = TESTIMONIALS

describe('TestimonialCard', () => {
  it('is a figure carrying brand, rating, quote and byline in that order', () => {
    const { container } = render(<TestimonialCard testimonial={mint!} />)

    const figure = container.querySelector('figure')!
    const order = Array.from(figure.children).map((child) => child.tagName)
    expect(order).toEqual(['DIV', 'BLOCKQUOTE', 'FIGCAPTION'])
    expect(figure.querySelector('.testimonial-top')).not.toBeNull()
  })

  it('carries its tint set as inline custom properties, not as three components', () => {
    const { container } = render(<TestimonialCard testimonial={mint!} />)

    const style = container.querySelector('figure')!.getAttribute('style')!
    expect(style).toContain('--tint: #e7f5ee')
    expect(style).toContain('--accent: #0f766e')
    expect(style).toContain('--ink: #1c1917')
    expect(style).toContain('--muted: #44403c')
  })

  it('keeps the light card light: no dark skin and no enlarged quote', () => {
    const { container } = render(<TestimonialCard testimonial={mint!} />)

    const figure = container.querySelector('figure')!
    expect(figure.className).toBe('testimonial')
    expect(figure.querySelector('blockquote')!.className).toBe('quote')
  })

  it('paints the middle card dark and sets its quote one step larger', () => {
    const { container } = render(<TestimonialCard testimonial={dark!} />)

    const figure = container.querySelector('figure')!
    expect(figure.className).toBe('testimonial testimonial-dark')
    expect(figure.querySelector('blockquote')!.className).toBe('quote quote-big')
    expect(figure.getAttribute('style')).toContain('--tint: #1f1d2b')
    expect(figure.getAttribute('style')).toContain('--ink: #f5f3ff')
  })

  it('renders the quote verbatim with its hyphens intact', () => {
    render(<TestimonialCard testimonial={mint!} />)

    expect(
      screen.getByText(
        'Month-end close went from six working days to two. The approval trail alone saved our auditors a week of back-and-forth.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the brand label, star rating, initials, name and role', () => {
    render(<TestimonialCard testimonial={peach!} />)

    expect(screen.getByText('Oakridge Clinics')).toHaveClass('brand')
    expect(screen.getByRole('img', { name: '4 out of 5 stars' })).toBeInTheDocument()
    expect(screen.getByText('TB')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Tessa Brandt')).toHaveClass('who-name')
    expect(screen.getByText('Practice Manager')).toHaveClass('who-role')
  })

  it('keeps a decorative avatar disc and adds no heading of its own', () => {
    const { container } = render(<TestimonialCard testimonial={dark!} />)

    expect(container.querySelector('.avatar')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).toHaveLength(0)
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })
})
