import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Customers Say')).toBeDefined()
  })

  it('displays at least 2 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeDefined()
    expect(screen.getByText('James Cooper')).toBeDefined()
  })

  it('shows author names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Bride')).toBeDefined()
    expect(screen.getByText('Regular Customer')).toBeDefined()
  })

  it('shows quote text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/best cakes/i)).toBeDefined()
  })
})
