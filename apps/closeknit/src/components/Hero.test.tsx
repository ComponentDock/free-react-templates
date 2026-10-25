import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia, resetMatchMedia } from '../test/media'
import { Hero } from './Hero'
import { HERO } from '../content'

beforeEach(() => {
  mockMatchMedia(false)
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  resetMatchMedia()
  document.body.style.overflow = ''
})

describe('Hero', () => {
  it('is the only h1 and follows the reference order', () => {
    render(<Hero />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent('Share with the people')
    expect(headings[0]).toHaveTextContent('you actually meant')

    expect(screen.getByText(HERO.badge)).toBeInTheDocument()
    expect(screen.getByText(HERO.lede)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Create your circle/ })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'See how it works' })).toHaveAttribute(
      'href',
      '#circles',
    )

    for (const stat of HERO.stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }

    const figure = screen.getByRole('img', { name: HERO.figure.alt })
    expect(figure).toHaveAttribute('src', HERO.figure.src)
  })

  it('cycles the gradient phrase every three seconds and wraps', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveTextContent('you actually meant')

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(heading).toHaveTextContent('who were there')

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(heading).toHaveTextContent('who will care')

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(heading).toHaveTextContent('you actually meant')
  })

  it('does not cycle under reduced motion and clears its timer on unmount', () => {
    mockMatchMedia(true)
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })

    act(() => {
      vi.advanceTimersByTime(9000)
    })
    expect(heading).toHaveTextContent('you actually meant')

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('opens the demo panel, locks the body and closes on Escape', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: /Watch Demo/ }))
    expect(screen.getByText('A two-minute tour of one circle')).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })
    expect(screen.queryByText('A two-minute tour of one circle')).toBeNull()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes the demo panel from its close control and its backdrop', () => {
    const { container } = render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: /Watch Demo/ }))
    fireEvent.click(screen.getByRole('button', { name: 'Close demo' }))
    expect(screen.queryByText('A two-minute tour of one circle')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: /Watch Demo/ }))
    const backdrop = container.querySelector('button[aria-hidden="true"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop as HTMLElement)
    expect(screen.queryByText('A two-minute tour of one circle')).toBeNull()
  })

  it('ignores unrelated keys while the demo panel is open', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: /Watch Demo/ }))
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    })
    expect(screen.getByText('A two-minute tour of one circle')).toBeInTheDocument()
  })
})
