import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { TESTIMONIALS } from '../data'
import { resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

describe('Testimonials', () => {
  it('renders the three reviews with five stars each', () => {
    render(<Testimonials />)

    const slides = screen.getByTestId('carousel-track').children
    expect(slides).toHaveLength(3)
    expect(slides[0]).toHaveStyle({ width: '100%' })
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(`“${testimonial.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(screen.getByText(testimonial.place)).toBeInTheDocument()
    })
    expect(screen.getAllByLabelText('Five out of five stars')).toHaveLength(3)
  })

  it('advances one slide every 5 s at one card per view', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    const track = screen.getByTestId('carousel-track')
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track).toHaveStyle({ transform: 'translateX(-100%)' })

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('pauses on hover and resumes on leave', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const carousel = screen.getByTestId('carousel')
    const track = screen.getByTestId('carousel-track')

    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track).toHaveStyle({ transform: 'translateX(-100%)' })
  })

  it('never autoplays under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })

    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('moves by arrow and by dot, wrapping in both directions', async () => {
    render(<Testimonials />)
    const track = screen.getByTestId('carousel-track')

    await userEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track).toHaveStyle({ transform: 'translateX(-100%)' })

    await userEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    await userEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track).toHaveStyle({ transform: 'translateX(-200%)' })

    await userEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(track).toHaveStyle({ transform: 'translateX(-100%)' })
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('drops to one page with three cards at lg and recomputes on resize', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /^Go to slide / })).toHaveLength(3)

    stubMedia({ '(min-width: 1024px)': true })
    act(() => {
      fireEvent(window, new Event('resize'))
    })

    const slides = screen.getByTestId('carousel-track').children
    expect(slides[0]).toHaveStyle({ width: '33.333333333333336%' })
    expect(screen.getAllByRole('button', { name: /^Go to slide / })).toHaveLength(1)
  })

  it('drops to two cards per view at sm', () => {
    stubMedia({ '(min-width: 640px)': true })
    render(<Testimonials />)

    const slides = screen.getByTestId('carousel-track').children
    expect(slides[0]).toHaveStyle({ width: '50%' })
    expect(screen.getAllByRole('button', { name: /^Go to slide / })).toHaveLength(2)
  })

  it('keeps the arrows for lg and the dots for every width', () => {
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Next testimonial' })).toHaveClass(
      'hidden',
      'lg:flex',
    )
    expect(screen.getByTestId('carousel-dots')).toBeInTheDocument()
  })
})
