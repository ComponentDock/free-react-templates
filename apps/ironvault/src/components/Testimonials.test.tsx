import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first quote by default', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Daniel E Gilcritst' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Eight months of coaching/)).toBeInTheDocument()
  })

  it('navigates forward and wraps to the first quote', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Marcus Bennett' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Sarah Whitfield' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Daniel E Gilcritst' }),
    ).toBeInTheDocument()
  })

  it('navigates backward and wraps to the last quote', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Sarah Whitfield' })).toBeInTheDocument()
  })

  it('jumps to a quote via the dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Sarah Whitfield' })).toBeInTheDocument()
  })
})
