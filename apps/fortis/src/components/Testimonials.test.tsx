import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the light section with three circular headshots, quotes and attributions', () => {
    const { container } = render(<Testimonials />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-light')
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()

    const quotes = container.querySelectorAll('blockquote')
    expect(quotes).toHaveLength(testimonials.length)

    for (const testimonial of testimonials) {
      expect(
        screen.getByRole('img', { name: `Portrait of ${testimonial.author}` }),
      ).toHaveAttribute('src', testimonial.image)
      expect(screen.getByText(`— ${testimonial.author}`)).toBeInTheDocument()
      expect(quotes[testimonials.indexOf(testimonial)]!.textContent).toContain(testimonial.quote)
    }
  })
})
