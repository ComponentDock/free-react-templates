import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Testimonials section with 3 blockquotes', () => {
    render(<Testimonials />)

    const section = screen.getByRole('region', { name: /testimonials/i })
    expect(section).toBeInTheDocument()

    const blockquotes = screen.getAllByRole('blockquote')
    expect(blockquotes).toHaveLength(3)
  })

  it('renders testimonial authors and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechVibe')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Founder, StartupLab')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
    expect(screen.getByText('Product Lead, InnovateCo')).toBeInTheDocument()
  })

  it('renders testimonial text content', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our brand identity/i)).toBeInTheDocument()
    expect(screen.getByText(/absolute pleasure/i)).toBeInTheDocument()
    expect(screen.getByText(/design system cardwell created/i)).toBeInTheDocument()
  })

  it('renders author avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByAltText(/Sarah Mitchell|James Rodriguez|Emily Chen/)
    expect(avatars).toHaveLength(3)
  })
})
