import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import {
  nextSlideLabel,
  prevSlideLabel,
  slideIndicatorLabel,
  testimonials,
  testimonialsLabel,
} from '../data'

describe('Testimonials', () => {
  it('shows the first slide with avatar, name, role, stars and quote', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('region', { name: testimonialsLabel })).toBeInTheDocument()
    const first = testimonials[0]!
    expect(screen.getByRole('heading', { level: 2, name: first.name })).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      `https://picsum.photos/seed/${first.seed}/80/80`,
    )
    expect(container.querySelectorAll('.text-star svg')).toHaveLength(5)
  })

  it('advances with next, wraps around and goes back with prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: slideIndicatorLabel(0) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials[1]!.name }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: slideIndicatorLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials[0]!.name }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: prevSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials[testimonials.length - 1]!.name }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via its dot indicator', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: slideIndicatorLabel(2) }))
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials[2]!.name }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: slideIndicatorLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
