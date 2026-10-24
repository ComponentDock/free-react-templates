import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { playLabel, slides, videoHeading } from '../data'

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  Reflect.deleteProperty(window, 'matchMedia')
})

describe('Hero', () => {
  it('renders three slides with the first one active', () => {
    render(<Hero />)
    const region = screen.getByRole('region', { name: 'Gym highlights' })
    expect(region).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(`${slides[0]!.headline}${slides[0]!.accent}`)
    expect(screen.getByRole('button', { name: playLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: slides[0]!.cta })).toHaveAttribute(
      'href',
      slides[0]!.href,
    )
    expect(screen.getAllByRole('button', { name: /^Show slide/ })).toHaveLength(3)
    expect(document.querySelectorAll('[data-active="true"]')).toHaveLength(1)
  })

  it('switches slides through the dot pagination', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Show slide 3' }))
    expect(screen.getByRole('button', { name: 'Show slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `${slides[2]!.headline}${slides[2]!.accent}`,
    )
    expect(screen.getByRole('link', { name: slides[2]!.cta })).toHaveAttribute(
      'href',
      slides[2]!.href,
    )
  })

  it('advances the slider on its own after five seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Show slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('holds the slide while the tab is hidden', () => {
    vi.useFakeTimers()
    const hidden = vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    hidden.mockReturnValue(false)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Show slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('does not autoplay when the visitor prefers reduced motion', () => {
    vi.useFakeTimers()
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    })
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(screen.getByRole('button', { name: 'Show slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('opens the tour dialog from the play control and closes it again', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: playLabel }))
    const dialog = screen.getByRole('dialog', { name: videoHeading })
    expect(within(dialog).getByRole('img', { name: 'Gym tour poster frame' })).toBeInTheDocument()

    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog', { name: videoHeading })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: videoHeading })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: playLabel }))
    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: videoHeading })).not.toBeInTheDocument()
  })
})
