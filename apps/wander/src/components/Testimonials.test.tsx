import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the pale section with a heading and three testimonial cards', () => {
    render(<Testimonials />)
    const section = screen.getByRole('region', { name: 'Testimonials' })
    expect(section).toHaveClass('bg-light-bg', 'border-t', 'border-border-soft')
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
    expect(screen.getAllByRole('img')[0]).toHaveClass('h-[70px]', 'w-[70px]', 'rounded-full')
    expect(screen.getByText('— Clare Gupta')).toBeInTheDocument()
    expect(screen.getByText('— Rogie Slater')).toBeInTheDocument()
    expect(screen.getByText('— John Doe')).toBeInTheDocument()
  })
})
