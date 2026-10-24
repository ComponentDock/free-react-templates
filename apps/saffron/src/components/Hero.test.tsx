import { act, cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { heroSlides } from '../data'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders both slides with chip, headline and date plus background photos', () => {
    render(<Hero />)
    for (const slide of heroSlides) {
      expect(screen.getAllByText(slide.category).length).toBeGreaterThan(0)
      expect(
        screen.getByRole('heading', { level: 2, name: slide.headline, hidden: true }),
      ).toBeInTheDocument()
      expect(screen.getAllByText(slide.date, { exact: false }).length).toBeGreaterThan(0)
    }
    expect(document.querySelectorAll('img')).toHaveLength(2)
  })

  it('marks the first slide active and the second hidden', () => {
    render(<Hero />)
    const slides = screen.getAllByRole('group', { hidden: true })
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
  })

  it('advances with the next control and wraps back with the previous control', () => {
    render(<Hero />)
    fireEventClick(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEventClick(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEventClick(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide from its indicator', () => {
    render(<Hero />)
    fireEventClick(screen.getAllByRole('button', { name: /Go to slide/ })[1]!)
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every six seconds and stops after unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )
    unmount()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
  })
})

function fireEventClick(element: HTMLElement) {
  act(() => {
    element.click()
  })
}
