import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the headline with a mint-highlighted block, subtext and CTA', () => {
    render(<HeroSlider />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Unlock Your Creative Potential/)
    const highlight = heading.querySelector('span')
    expect(highlight).toHaveTextContent('Creative')

    expect(screen.getByText(/craft digital experiences/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Check Our Services/i })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('advances to the next slide on an interval', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/craft digital experiences/i)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(/data-driven design thinking/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide when a dot is clicked', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<HeroSlider />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(3)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText(/data-driven design thinking/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText(/from concept to launch/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
