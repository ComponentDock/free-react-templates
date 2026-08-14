import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsCarousel } from './NewsCarousel'
import { newsItems } from '../data'

afterEach(() => {
  vi.useRealTimers()
  Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true })
})

const setWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width, configurable: true, writable: true })
  fireEvent(window, new Event('resize'))
}

describe('NewsCarousel', () => {
  it('renders all news cards with titles, categories and excerpts', () => {
    render(<NewsCarousel />)
    for (const item of newsItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.category)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(newsItems.length)
  })

  it('shows the first slide active and provides prev/next controls', async () => {
    const user = userEvent.setup()
    render(<NewsCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')
    await user.click(screen.getByRole('button', { name: 'Next news' }))
    expect(dots[1]!).toHaveAttribute('aria-current', 'true')
    await user.click(screen.getByRole('button', { name: 'Previous news' }))
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')
  })

  it('jumps to a slide via its dot', async () => {
    const user = userEvent.setup()
    render(<NewsCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    await user.click(dots[dots.length - 1]!)
    expect(dots[dots.length - 1]!).toHaveAttribute('aria-current', 'true')
  })

  it('wraps around from the last slide to the first', async () => {
    const user = userEvent.setup()
    render(<NewsCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    // Go past the end: next from the last slide wraps to 0.
    for (let i = 0; i < dots.length; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next news' }))
    }
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')
  })

  it('wraps around from the first slide to the last on previous', async () => {
    const user = userEvent.setup()
    render(<NewsCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    await user.click(screen.getByRole('button', { name: 'Previous news' }))
    expect(dots[dots.length - 1]!).toHaveAttribute('aria-current', 'true')
  })

  it('auto-rotates on an interval and cleans up on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<NewsCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(dots[1]!).toHaveAttribute('aria-current', 'true')
    unmount()
  })

  it('shows one item per slide on mobile and two on tablet', () => {
    render(<NewsCarousel />)
    setWidth(500)
    // 4 items, 1 visible -> 4 dots.
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(4)
    setWidth(800)
    // 4 items, 2 visible -> 3 dots.
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3)
    setWidth(1024)
    // 4 items, 3 visible -> 2 dots.
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(2)
  })

  it('clamps the index when the viewport grows', () => {
    render(<NewsCarousel />)
    // Shrink to mobile first (1 visible -> 4 dots), jump to the last slide.
    setWidth(500)
    const mobileDots = screen.getAllByRole('button', { name: /Go to slide/ })
    fireEvent.click(mobileDots[mobileDots.length - 1]!)
    expect(mobileDots[mobileDots.length - 1]!).toHaveAttribute('aria-current', 'true')
    // Grow to desktop (3 visible -> 2 dots, max index 1): the index clamps.
    setWidth(1024)
    const desktopDots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(desktopDots[desktopDots.length - 1]!).toHaveAttribute('aria-current', 'true')
  })
})
