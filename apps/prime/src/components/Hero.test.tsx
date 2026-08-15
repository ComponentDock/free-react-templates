import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { typewriterWords } from '../data'

describe('Hero', () => {
  it('renders the rotating headline, paragraph, and both CTAs', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Template for/)
    expect(heading.textContent).toContain(typewriterWords[0])
    expect(screen.getByText(/small river named Duden/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get a Quote' })).toHaveAttribute('href', '#quote')
    expect(screen.getByRole('link', { name: 'Our Portfolio' })).toHaveAttribute('href', '#work')
  })

  it('cycles the typewriter word every 4 seconds and wraps', () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toContain(typewriterWords[0])
      act(() => {
        vi.advanceTimersByTime(4000)
      })
      expect(heading.textContent).toContain(typewriterWords[1])
      act(() => {
        vi.advanceTimersByTime(4000 * 3)
      })
      expect(heading.textContent).toContain(typewriterWords[0])
    } finally {
      vi.useRealTimers()
    }
  })

  it('announces the active word to screen readers via an aria-live region', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1 }).querySelector('[aria-live="polite"]'),
    ).toBeInTheDocument()
  })

  it('renders a three-slide dashboard carousel and advances it', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.getByLabelText('Dashboard previews')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next dashboard' }))
    await user.click(screen.getByRole('button', { name: 'Go to dashboard 3' }))
    expect(screen.getByRole('button', { name: 'Go to dashboard 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Previous dashboard' }))
    expect(screen.getByRole('button', { name: 'Go to dashboard 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps the carousel at both ends', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Previous dashboard' }))
    expect(screen.getByRole('button', { name: 'Go to dashboard 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next dashboard' }))
    expect(screen.getByRole('button', { name: 'Go to dashboard 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
