import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with headline, excerpt, and CTA', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(/Health care/)
    expect(screen.getByText(/In healthcare sector/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Check Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('advances with the next arrow and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('goes back with the previous arrow and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('button', { name: `Go to slide ${heroSlides.length}` }),
    ).toHaveAttribute('aria-current', 'true')
  })

  it('jumps to a slide via pagination dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays to the next slide', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
