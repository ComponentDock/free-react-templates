import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { testimonials } from '../content'
import { resizeTo } from './helpers'

describe('Testimonials', () => {
  it('renders two long reviews with initials and brass stars', () => {
    render(<Testimonials />)

    expect(screen.getByText(testimonials.pill)).toHaveClass('bg-primary-900/50', 'rounded-full')
    expect(screen.getByRole('heading', { level: 2, name: testimonials.title })).toHaveClass('font-bold')
    expect(screen.getByText(testimonials.lead)).toHaveClass('text-ink-200')

    testimonials.items.forEach((item) => {
      expect(screen.getByText(`“${item.quote}”`)).toHaveClass('text-white')
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.city)).toHaveClass('text-ink-200')
    })

    expect(screen.getAllByTestId('carousel-slide')).toHaveLength(2)
  })

  it('is a static pair at 1440: no dots, no arrows, two half-width slides', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })
    render(<Testimonials />)

    expect(screen.queryByTestId('carousel-dots')).toBeNull()
    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()

    const track = screen.getByTestId('carousel-track')
    expect(track).toHaveClass('justify-center')
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })
    screen.getAllByTestId('carousel-slide').forEach((slide) => {
      expect(slide).toHaveStyle({ width: '50%' })
    })
  })

  it('stays a static pair at 768 as well', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 768 })
    render(<Testimonials />)

    expect(screen.queryByTestId('carousel-dots')).toBeNull()
    expect(screen.queryByRole('button', { name: 'Previous review' })).toBeNull()
  })

  it('becomes a one-up carousel with two dots at 390', async () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to review/ })
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).toHaveClass('w-8', 'bg-primary-400')

    const slides = screen.getAllByTestId('carousel-slide')
    expect(slides[0]).toHaveStyle({ width: '100%' })
    expect(screen.getByTestId('carousel-track')).toHaveClass('justify-start')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')

    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-100%)' })
    expect(screen.getByRole('button', { name: 'Go to review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')

    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-0%)' })

    await user.click(screen.getByRole('button', { name: 'Go to review 2' }))
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-100%)' })
  })

  it('re-measures when the window is resized', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Go to review/ })).toHaveLength(2)

    resizeTo(1440)

    expect(screen.queryByTestId('carousel-dots')).toBeNull()
  })
})
