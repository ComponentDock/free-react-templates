import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Real Results, Real People' })).toBeInTheDocument()
    expect(screen.getByText('Rachel Kim')).toBeInTheDocument()
    expect(screen.getByText(/I lost 30 pounds in 6 months/)).toBeInTheDocument()
  })

  it('moves to the next testimonial with the next button', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByText('James Torres')).toBeInTheDocument()
    expect(screen.getByText(/The CrossFit program pushed me/)).toBeInTheDocument()
  })

  it('wraps around when going previous from the first slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    expect(screen.getByText('Lisa Nakamura')).toBeInTheDocument()
  })

  it('jumps to a slide via the dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial from Priya Sharma' }))

    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
    expect(screen.getByText(/As a busy professional/)).toBeInTheDocument()
  })
})
