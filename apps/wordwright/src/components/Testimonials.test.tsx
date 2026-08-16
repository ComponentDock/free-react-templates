import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials, testimonialsTitle } from '../data'

describe('Testimonials', () => {
  it('renders the title and the first slide with stars and founder name', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: testimonialsTitle })).toBeInTheDocument()

    const first = testimonials[0]!
    const firstSlide = screen.getByText(first.quote).closest('figure')!
    expect(within(firstSlide).getByRole('img', { name: first.avatarAlt })).toBeInTheDocument()
    expect(within(firstSlide).getByText(first.name)).toBeInTheDocument()
    expect(firstSlide.getAttribute('aria-hidden')).toBeNull()
    expect(firstSlide.querySelectorAll('svg.fill-star')).toHaveLength(5)

    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(testimonials.length)
    expect(dots[0]!.className).toContain('bg-accent')
  })

  it('cycles slides via the carousel dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial 2' }))

    const first = testimonials[0]!
    const second = testimonials[1]!
    const visible = screen.getByText(second.quote).closest('figure')!
    expect(visible.getAttribute('aria-hidden')).toBeNull()
    expect(within(visible).getByText(second.name)).toBeInTheDocument()
    expect(screen.getByText(first.quote).closest('figure')!.getAttribute('aria-hidden')).toBe(
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 2' }).className).toContain(
      'bg-accent',
    )

    await user.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    const third = testimonials[2]!
    expect(screen.getByText(third.quote).closest('figure')!.getAttribute('aria-hidden')).toBeNull()
    expect(screen.getByText(first.quote).closest('figure')!.getAttribute('aria-hidden')).toBe(
      'true',
    )
  })
})
