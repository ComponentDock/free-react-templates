import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Clients')
  })

  it('shows at least three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Geronimo')).toBeInTheDocument()
    expect(screen.getByText('John Dorf')).toBeInTheDocument()
    expect(screen.getByText('Jessica Moore')).toBeInTheDocument()
  })

  it('shows star rating icons', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(3)
  })
})
