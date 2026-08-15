import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first quote with author and role', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
    expect(screen.getByText('Fitness Expert')).toBeInTheDocument()
    expect(screen.getByText(/changed how I move and how I rest/)).toBeInTheDocument()
  })

  it('advances through quotes with next and wraps to the first', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Emma Reyes')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Liam Carter')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
  })

  it('goes backwards with previous and wraps from the first', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Liam Carter')).toBeInTheDocument()
  })

  it('jumps to a quote via its dot', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getAllByRole('button', { name: /Show testimonial/ })[1]!)
    expect(screen.getByText('Emma Reyes')).toBeInTheDocument()
  })
})
