import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS, TESTIMONIAL_AUTHOR } from '../data'

describe('Testimonials', () => {
  it('renders the first quote, the quote icon and the author row', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByText(new RegExp(TESTIMONIALS[0]!.slice(0, 24)))).toBeInTheDocument()
    expect(screen.getByText(`- ${TESTIMONIAL_AUTHOR}`)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: TESTIMONIAL_AUTHOR })).toBeInTheDocument()
    // The background image is decorative (empty alt) and precedes the thumb.
    expect(container.querySelectorAll('img').length).toBe(2)
  })

  it('cycles through the quotes with the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText(new RegExp(TESTIMONIALS[0]!.slice(0, 24)))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(new RegExp(TESTIMONIALS[1]!.slice(0, 24)))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(new RegExp(TESTIMONIALS[0]!.slice(0, 24)))).toBeInTheDocument()
  })

  it('goes back a slide with the previous control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(
      screen.getByText(new RegExp(TESTIMONIALS[TESTIMONIALS.length - 1]!.slice(0, 24))),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(new RegExp(TESTIMONIALS[2]!.slice(0, 24)))).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
