import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS, TESTIMONIALS_BLURB, TESTIMONIALS_HEADING } from '../data'

describe('Testimonials', () => {
  it('renders the section heading with tan underline and the first testimonial visible', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('heading', { name: TESTIMONIALS_HEADING })).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS_BLURB)).toBeInTheDocument()
    expect(container.querySelector('[aria-hidden="true"]')?.className).toMatch(/bg-brand/)

    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[1]!.name)).toBeInTheDocument() // hidden but rendered
  })

  it('shows exactly one slide at a time with dot indicators', () => {
    const { container } = render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(6)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    const visible = [...container.querySelectorAll('figure')].filter(
      (figure) => !figure.className.includes('hidden'),
    )
    expect(visible).toHaveLength(1)
  })

  it('navigates with next/prev arrows, wrapping around the ends', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.name)).toBeInTheDocument()

    // Wrap forward: 6th slide → 1st.
    for (let i = 2; i < 6; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()

    // Wrap backward: 1st → 6th.
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[5]!.name)).toBeInTheDocument()
  })

  it('jumps to a slide via its dot indicator', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial 4' }))
    expect(screen.getByText(TESTIMONIALS[3]!.name)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
