import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('sits on a background photo with a brand-gradient overlay', () => {
    const { container } = render(<Testimonials />)

    const section = screen.getByRole('region', { name: 'Testimonials' }) as HTMLElement
    expect(section).toHaveClass('bg-cover', 'bg-center')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/imagine-testimonial-bg')

    const overlay = container.querySelector('[aria-hidden="true"]')
    expect(overlay).toHaveClass(
      'bg-gradient-to-r',
      'from-brand-start',
      'to-brand-end',
      'opacity-60',
    )
  })

  it('shows a quote, a name, and a role line', () => {
    render(<Testimonials />)

    expect(screen.getByRole('blockquote')).toHaveTextContent(/right partner to turn your ideas/i)
    expect(screen.getByText('Mark Alviro Wiens')).toBeInTheDocument()
    expect(screen.getByText('CEO at Google')).toBeInTheDocument()
  })
})
