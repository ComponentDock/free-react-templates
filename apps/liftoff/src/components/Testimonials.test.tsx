import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the title and the first slide', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote')).toHaveLength(1)
  })

  it('advances and goes back with the arrow controls, wrapping around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText('John Smith')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Robert Aguilar')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Roger Spears')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Robert Aguilar')).toBeInTheDocument()

    // Wrap backward from the first slide to the last.
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Kyle McDonald')).toBeInTheDocument()

    // Wrap forward to the first slide.
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 4' }))
    expect(screen.getByText('Kyle McDonald')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText('Robert Aguilar')).toBeInTheDocument()
  })
})
