import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('shows the first quote and cycles forward with wrap-around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getByText(new RegExp(testimonials[0].author))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(new RegExp(testimonials[1].author))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(new RegExp(testimonials[0].author))).toBeInTheDocument()
  })

  it('cycles backwards with wrap-around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(new RegExp(testimonials[1].author))).toBeInTheDocument()
  })
})
