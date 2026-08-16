import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the first testimonial with quote, portrait, name and role', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Love from Customers' }),
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(testimonials[0]!.quote))).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.role)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: testimonials[0]!.name })).toBeInTheDocument()
  })

  it('advances to the next testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[2]!.name)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
  })

  it('steps back with the previous control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[2]!.name)).toBeInTheDocument()
  })
})
