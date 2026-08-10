import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders the first slide with share icons, category, title, excerpt and meta', () => {
    render(<HeroSlider />)
    const slide = heroSlides[0]!
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByText(slide.title)).toBeInTheDocument()
    expect(screen.getByText(slide.excerpt)).toBeInTheDocument()
    expect(screen.getByText(slide.meta)).toBeInTheDocument()
    expect(screen.getAllByText(slide.category).length).toBeGreaterThan(0)
  })

  it('moves to the next slide and cycles back to the first', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('moves to the previous slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide via its dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every 5 seconds', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
