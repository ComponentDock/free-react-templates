import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  nextTestimonialLabel,
  previousTestimonialLabel,
  showTestimonialLabel,
  testimonials,
  testimonialsTitle,
} from '../data'
import { Testimonials } from './Testimonials'

const figureStates = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('figure')).map(
    (figure) => figure.getAttribute('aria-hidden') !== 'true',
  )

describe('Testimonials', () => {
  it('renders four sand cards and shows the first one', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 3, name: testimonialsTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote', { hidden: true })).toHaveLength(testimonials.length)
    expect(figureStates(container)).toEqual([true, false, false, false])
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
  })

  it('navigates with the arrow buttons and the dots', async () => {
    const user = userEvent.setup()
    const { container } = render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    expect(figureStates(container)).toEqual([false, true, false, false])

    await user.click(screen.getByRole('button', { name: previousTestimonialLabel }))
    expect(figureStates(container)).toEqual([true, false, false, false])

    await user.click(screen.getByRole('button', { name: `${showTestimonialLabel} 4` }))
    expect(figureStates(container)).toEqual([false, false, false, true])
    expect(screen.getByRole('button', { name: `${showTestimonialLabel} 4` })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    expect(figureStates(container)).toEqual([true, false, false, false])
  })
})
