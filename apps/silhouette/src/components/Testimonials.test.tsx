import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders 3 testimonials with quotes and authors', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Emma Chen')).toBeInTheDocument()
    expect(screen.getByText('Olivia Brooks')).toBeInTheDocument()
  })

  it('displays section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What People Say')
  })

  it('shows author roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fashion Blogger')).toBeInTheDocument()
    expect(screen.getByText('Stylist')).toBeInTheDocument()
    expect(screen.getByText('Content Creator')).toBeInTheDocument()
  })
})
