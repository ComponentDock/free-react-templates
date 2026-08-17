import { describe, expect, it, vi } from 'vitest'
import { act, render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, date, location and ticket CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/SanDiego Design Week/)
    expect(screen.getByText('12 Aug 2021')).toBeInTheDocument()
    expect(screen.getByText('3968 Carson Street, San Diego, CA 92101')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy Ticket/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play event video' })).toBeInTheDocument()
  })

  it('opens and closes the video modal from the play button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Play event video' }))

    const dialog = screen.getByRole('dialog', { name: /Official Trailer/ })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByTitle(/Official Trailer/)).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/up68UAfH0d0',
    )

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('only closes the video modal on the Escape key', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Play event video' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the video modal when the backdrop is clicked', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Play event video' }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()

    fireEvent.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('cycles slides via the dot navigation', () => {
    render(<Hero />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(2)

    fireEvent.click(dots[1]!)
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).not.toHaveAttribute('aria-current')
  })

  it('auto-advances the slider on its timer', () => {
    vi.useFakeTimers()
    render(<Hero />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    act(() => {
      vi.advanceTimersByTime(7000)
    })

    expect(dots[1]).toHaveAttribute('aria-current', 'true')

    vi.useRealTimers()
  })
})
