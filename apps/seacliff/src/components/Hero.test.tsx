import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the headline, blurb, booking widget, and scroll indicator', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Experience/)
    expect(heading.textContent).toMatch(/Unforgettable Moments/)

    expect(screen.getByText(/Nestled along the pristine shores of Miami Beach/)).toBeInTheDocument()

    expect(screen.getByLabelText('Check-in')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Scroll down' })).toBeInTheDocument()
  })

  it('rotates the typewriter words on an interval', async () => {
    vi.useFakeTimers()
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Unforgettable Moments/)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2300)
    })
    expect(heading.textContent).toMatch(/Pure Elegance/)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2300)
    })
    expect(heading.textContent).toMatch(/True Comfort/)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2300)
    })
    expect(heading.textContent).toMatch(/Unforgettable Moments/)
  })

  it('submits the booking form', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Check Availability' }))
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })
})
