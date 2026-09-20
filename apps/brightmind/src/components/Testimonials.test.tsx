import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Our Students Says' })).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Wilson')).toBeInTheDocument()
  })
})
