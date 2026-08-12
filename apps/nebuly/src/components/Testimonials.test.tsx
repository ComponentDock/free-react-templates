import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first quote with author and role', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Users Saying' })).toBeInTheDocument()
    expect(screen.getByText('Mark Web')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('cycles to the next quote and wraps back to the first', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Lina Fox')).toBeInTheDocument()
    expect(screen.queryByText('Mark Web')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('John Carter')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Mark Web')).toBeInTheDocument()
  })

  it('moves backward with the previous control', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('John Carter')).toBeInTheDocument()
  })
})
