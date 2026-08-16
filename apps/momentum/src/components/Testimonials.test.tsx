import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial slide with avatar, name and role', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'People Says...' })).toBeInTheDocument()

    const first = testimonials[0]!
    const firstSlide = screen.getByText(first.quote).closest('figure')!
    expect(within(firstSlide).getByText(first.name)).toBeInTheDocument()
    expect(within(firstSlide).getByText(first.role)).toBeInTheDocument()

    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(testimonials.length)
    expect(dots[0]!.className).toContain('bg-brand')
  })

  it('navigates slides via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial 2' }))

    const first = testimonials[0]!
    const second = testimonials[1]!
    const visible = screen.getByText(second.quote).closest('figure')!
    expect(within(visible).getByText(second.name)).toBeInTheDocument()
    expect(within(visible).getByText(second.role)).toBeInTheDocument()
    expect(screen.getByText(first.quote).closest('figure')!.getAttribute('aria-hidden')).toBe(
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 2' }).className).toContain(
      'bg-brand',
    )
  })
})
