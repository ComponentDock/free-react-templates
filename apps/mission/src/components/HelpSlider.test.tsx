import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { helpSlides } from '../data'
import { HelpSlider } from './HelpSlider'

describe('HelpSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and all cause cards with amounts and Donate Now links', () => {
    render(<HelpSlider />)

    expect(screen.getByText('Help Them')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'They Need Your Help' })).toBeInTheDocument()

    for (const slide of helpSlides) {
      expect(screen.getByRole('heading', { name: slide.title })).toBeInTheDocument()
      expect(screen.getByText(slide.target)).toBeInTheDocument()
      expect(screen.getByText(slide.raised)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Donate Now' })).toHaveLength(helpSlides.length)
  })

  it('advances and wraps slides with the next/prev controls', () => {
    render(<HelpSlider />)

    const next = screen.getByRole('button', { name: 'Next help slide' })
    const prev = screen.getByRole('button', { name: 'Previous help slide' })

    fireEvent.click(next)
    expect(screen.getByRole('button', { name: 'Show help slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(next)
    // Wraps back to slide 1.
    expect(screen.getByRole('button', { name: 'Show help slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(prev)
    expect(screen.getByRole('button', { name: 'Show help slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('does not navigate when the See All Causes or Donate Now links are clicked', () => {
    render(<HelpSlider />)

    fireEvent.click(screen.getByRole('link', { name: 'See All Causes' }))
    expect(window.location.hash).toBe('')

    fireEvent.click(screen.getAllByRole('link', { name: 'Donate Now' })[0]!)
    expect(window.location.hash).toBe('')
  })

  it('jumps to a slide when a dot is clicked', () => {
    render(<HelpSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Show help slide 2' }))
    expect(screen.getByRole('button', { name: 'Show help slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-rotates on an interval', () => {
    vi.useFakeTimers()
    render(<HelpSlider />)

    expect(screen.getByRole('button', { name: 'Show help slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show help slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show help slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
