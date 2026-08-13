import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('shows the first testimonial with avatar, quote, name and country', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What our Customers Says')
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: testimonials[0]!.name }),
    ).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.country)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: `${testimonials[0]!.name} avatar` })).toBeInTheDocument()
  })

  it('advances and wraps with the next arrow', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1]!.quote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
  })

  it('goes back with the previous arrow', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[testimonials.length - 1]!.quote)).toBeInTheDocument()
  })

  it('jumps to a slide via its dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByText(testimonials[2]!.quote)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
