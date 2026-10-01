import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title and the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /testimonials/i })).toBeInTheDocument()
    expect(screen.getByText('Vongchong Smith')).toBeInTheDocument()
    expect(screen.getByText(/booking took less than five minutes/i)).toBeInTheDocument()
  })

  it('advances to the next testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Amader Tuni')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Atex Tuntuni Smith')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Vongchong Smith')).toBeInTheDocument()
  })

  it('goes back to the previous testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Atex Tuntuni Smith')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Amader Tuni')).toBeInTheDocument()
  })
})
