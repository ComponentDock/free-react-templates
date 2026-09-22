import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { heroSlides } from '../data'

describe('Hero', () => {
  it('renders the first slide by default', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.title)
    expect(screen.getByRole('link', { name: heroSlides[0]!.ctaLabel })).toBeInTheDocument()
  })

  it('navigates to the next slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.title)
  })

  it('navigates to the previous slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      heroSlides[heroSlides.length - 1]!.title,
    )
  })

  it('renders dot indicators and navigates via dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(heroSlides.length)
    await user.click(dots[2]!)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[2]!.title)
  })

  it('auto-advances slides', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.title)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.title)
    vi.useRealTimers()
  })
})
