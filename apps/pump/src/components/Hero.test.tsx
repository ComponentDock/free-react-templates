import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first slide headline and a Get Started CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fuel Your Body Fitness')
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('advances to the next slide with the next button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Be One Of Us')
  })

  it('wraps from the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get Your Body Fit')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fuel Your Body Fitness')
  })

  it('moves to the previous slide with the previous button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get Your Body Fit')
  })

  it('jumps to a slide via the indicator dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Challenge Yourself')
  })

  it('auto-advances the slider after the interval', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fuel Your Body Fitness')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Be One Of Us')
  })

  it('clears the auto-advance timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
