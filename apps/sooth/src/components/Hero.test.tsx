import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the headline, CTAs and stats row', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Indulge in Pure/)
    expect(screen.getByRole('link', { name: 'Book Your Treatment' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'View Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('button', { name: 'Watch Demo' })).toBeInTheDocument()
    expect(screen.getByText('Years of Excellence')).toBeInTheDocument()
    expect(screen.getByText('Luxury Treatments')).toBeInTheDocument()
    expect(screen.getByText('Client Rated')).toBeInTheDocument()
  })

  it('rotates the accent phrase on an interval', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Peace & Harmony')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3500)
    })
    expect(screen.getByText('Rest & Renewal')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3500)
    })
    expect(screen.getByText('Calm & Balance')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3500)
    })
    expect(screen.getByText('Peace & Harmony')).toBeInTheDocument()
  })

  it('opens the video modal from Watch Demo and closes it', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Watch Demo' }))
    expect(screen.getByRole('dialog', { name: 'Demo video' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
