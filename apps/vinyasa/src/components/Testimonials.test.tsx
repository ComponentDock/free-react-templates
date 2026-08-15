import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first testimonial with avatar, name, and role', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: "Client's Feedback" })).toBeInTheDocument()
    expect(screen.getByText('Helena Phillips')).toBeInTheDocument()
    expect(screen.getByText('CEO at Facebook')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Helena Phillips' })).toBeInTheDocument()
  })

  it('advances through testimonials with next and wraps to the first', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Cordelia Barton')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Carrie Reese')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Helena Phillips')).toBeInTheDocument()
  })

  it('goes backwards with previous and wraps from the first', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Carrie Reese')).toBeInTheDocument()
  })

  it('jumps to a testimonial via its dot', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getAllByRole('button', { name: /Show testimonial/ })[1]!)
    expect(screen.getByText('Cordelia Barton')).toBeInTheDocument()
  })
})
