import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('shows the section title and the first slide by default', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: TESTIMONIALS.heading }),
    ).toBeInTheDocument()

    const first = TESTIMONIALS.slides[0]!
    expect(screen.getByText(`“${first.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
  })

  it('moves to the next slide and wraps around to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(`“${TESTIMONIALS.slides[1]!.quote}”`)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(`“${TESTIMONIALS.slides[2]!.quote}”`)).toBeInTheDocument()
  })

  it('moves to the previous slide and wraps around to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(
      screen.getByText(`“${TESTIMONIALS.slides[TESTIMONIALS.slides.length - 1]!.quote}”`),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(`“${TESTIMONIALS.slides[2]!.quote}”`)).toBeInTheDocument()
  })

  it('cycles forward from the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Advance to the last slide (index 3) via four next clicks, then wrap to 0.
    for (let i = 0; i < 4; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText(`“${TESTIMONIALS.slides[0]!.quote}”`)).toBeInTheDocument()
  })
})
