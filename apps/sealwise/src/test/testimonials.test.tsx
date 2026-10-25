import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { testimonials } from '../content'
import { installMedia, setViewport } from './helpers'

const track = () => document.querySelector('[data-carousel]') as HTMLElement

describe('testimonials', () => {
  beforeEach(() => {
    installMedia()
    setViewport(1440)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('is a static three-up row at 1440: no dots, no arrows', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('figure')).toHaveLength(3)
    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()
    expect(screen.queryByRole('button', { name: /Show review/ })).toBeNull()
    expect(track()).not.toBeNull()
  })

  it('becomes a two-up carousel at 768 and a one-up at 390', async () => {
    render(<Testimonials />)
    setViewport(768)
    expect(screen.getAllByRole('button', { name: /Show review/ })).toHaveLength(2)
    await userEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByRole('button', { name: 'Show review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    // The last index wraps back to the first.
    await userEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByRole('button', { name: 'Show review 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    // And a step back from the first wraps to the last.
    await userEvent.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByRole('button', { name: 'Show review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    setViewport(390)
    expect(screen.getAllByRole('button', { name: /Show review/ })).toHaveLength(3)
  })

  it('jumps straight to a chosen slide with the dots', async () => {
    render(<Testimonials />)
    setViewport(390)
    await userEvent.click(screen.getByRole('button', { name: 'Show review 3' }))
    expect(screen.getByRole('button', { name: 'Show review 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show review 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('advances every five seconds, and holds still while hovered', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    setViewport(390)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.mouseEnter(track())
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByRole('button', { name: 'Show review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Leaving the band starts the clock again.
    fireEvent.mouseLeave(track())
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show review 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // The last slide wraps to the first.
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show review 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('does not auto-advance under reduced motion', () => {
    vi.useFakeTimers()
    installMedia({ reduce: true })
    render(<Testimonials />)
    setViewport(390)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByRole('button', { name: 'Show review 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('clamps an index that outgrew the new width', () => {
    render(<Testimonials />)
    setViewport(390)
    act(() => {
      screen.getByRole('button', { name: 'Show review 3' }).click()
    })
    setViewport(1440)
    expect(screen.getByText(testimonials.items[2]!.name)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Show review/ })).toBeNull()
  })
})
