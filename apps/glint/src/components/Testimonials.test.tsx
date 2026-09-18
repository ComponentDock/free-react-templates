import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial with quote, name, and role', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText(/Glint transformed my smile completely/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Patient')).toBeInTheDocument()
  })

  it('navigates to next testimonial on arrow click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on arrow click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('navigates to a specific testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })
})
