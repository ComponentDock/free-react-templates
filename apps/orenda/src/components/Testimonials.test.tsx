import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first quote with author and role', () => {
    render(<Testimonials />)
    expect(screen.getByText(/You can't succeed if you just do what others do/i)).toBeInTheDocument()
    expect(screen.getByText('Clifford Frazier')).toBeInTheDocument()
    expect(screen.getByText('Student')).toBeInTheDocument()
  })

  it('advances to the next quote with the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/gave me the confidence and the skills/i)).toBeInTheDocument()
    expect(screen.getByText('Andrea Blake')).toBeInTheDocument()
  })

  it('goes back to the previous quote with the previous control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/You can't succeed if you just do what others do/i)).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Our Students Say/i })).toBeInTheDocument()
  })
})
