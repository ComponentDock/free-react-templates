import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the first testimonial card with controls and dots', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "What Customer's Say About Us",
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(TESTIMONIALS[0].name)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].role)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].quote)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()

    const dots = screen.getAllByRole('button', { name: /Go to testimonial \d+/ })
    expect(dots).toHaveLength(TESTIMONIALS.length)
  })

  it('cycles through cards with next/previous and jumps via dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1].name)).toBeInTheDocument()
    expect(screen.queryByText(TESTIMONIALS[0].name)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0].name)).toBeInTheDocument()

    // Jump to the last card via its dot; index wraps 0 -> count-1 on prev.
    await user.click(
      screen.getByRole('button', { name: `Go to testimonial ${TESTIMONIALS.length}` }),
    )
    expect(screen.getByText(TESTIMONIALS[TESTIMONIALS.length - 1]!.name)).toBeInTheDocument()
  })
})
