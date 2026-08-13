import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('auto-advances to the next slide', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getAllByRole('heading', { level: 2, hidden: true })[0]).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
  it('renders two slides with the headline lines and CTA buttons', () => {
    render(<HeroSlider />)
    // aria-hidden slides are excluded from role queries by default
    const headlines = screen.getAllByRole('heading', { level: 2, hidden: true })
    expect(headlines).toHaveLength(2)
    // the active slide's headline contains all three lines
    const visibleHeading = screen.getByRole('heading', { level: 2 })
    expect(visibleHeading).toHaveTextContent('Power')
    expect(visibleHeading).toHaveTextContent('& Energy')
    expect(visibleHeading).toHaveTextContent('Industry')
    expect(screen.getAllByRole('link', { name: 'Read More', hidden: true })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'our Services', hidden: true })).toHaveLength(2)
  })

  it('renders headline lines on yellow highlight blocks', () => {
    const { container } = render(<HeroSlider />)
    const headlineLines = container.querySelectorAll('[data-headline-line]')
    expect(headlineLines.length).toBeGreaterThan(0)
    headlineLines.forEach((line) => {
      expect(line.getAttribute('class')).toContain('bg-primary-600')
    })
  })

  it('advances slides with next/prev arrows', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const next = screen.getByRole('button', { name: /next slide/i })
    await user.click(next)
    // after advancing, the second slide is no longer aria-hidden
    const visibleHeading = screen.getAllByRole('heading', { level: 2, hidden: true })[1]!
    expect(visibleHeading).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getAllByRole('heading', { level: 2, hidden: true })[0]).toBeInTheDocument()
  })

  it('advances slides via dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /go to slide 2/i }))
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
