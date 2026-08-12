import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the title and the first quote card with avatar, name, role, and quote', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /portrait of John Smith/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByText('XYZ Inc. Client')).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
  })

  it('rotates quotes with the next control', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Joshua Darren' })).toBeInTheDocument()
  })

  it('rotates quotes with the previous control', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Sofia Alvarez' })).toBeInTheDocument()
  })

  it('jumps to a quote via the dot indicators', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Megan Ruiz' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
