import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()

    expect(screen.getByText('Mellisa Howard')).toBeInTheDocument()
    expect(screen.getByText('Mike Richardson')).toBeInTheDocument()
    expect(screen.getByText('Charles White')).toBeInTheDocument()
  })

  it('renders author roles', () => {
    render(<Testimonials />)

    const roles = screen.getAllByText('CEO, XYZ Company')
    expect(roles).toHaveLength(3)
  })

  it('renders blockquotes with quotes', () => {
    const { container } = render(<Testimonials />)
    const blockquotes = container.querySelectorAll('blockquote')
    expect(blockquotes).toHaveLength(3)
  })
})
