import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroSlides } from '../data'
import { describe, expect, it, vi } from 'vitest'

describe('Hero', () => {
  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.title)
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: heroSlides[0]!.cta })).toBeInTheDocument()
  })

  it('navigates to the next slide with arrow button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nextButton = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextButton)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.title)
  })

  it('navigates to the previous slide with arrow button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const prevButton = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevButton)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      heroSlides[heroSlides.length - 1]!.title,
    )
  })

  it('navigates to a specific slide via dot indicator', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const dot = screen.getByRole('tab', { name: /go to slide 3/i })
    await user.click(dot)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[2]!.title)
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.title)
    vi.useRealTimers()
  })

  it('renders indicator dots for each slide', () => {
    render(<Hero />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(heroSlides.length)
  })
})
