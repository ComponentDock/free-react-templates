import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide heading by default', () => {
    render(<Hero />)
    expect(screen.getByText('Learnly University')).toBeInTheDocument()
  })

  it('renders slide indicator buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
  })

  it('switches to second slide when indicator is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('You Can Learn Anything')).toBeInTheDocument()
  })

  it('auto-advances to next slide after 5 seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('You Can Learn Anything')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('has correct aria-label for carousel', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Hero carousel')).toBeInTheDocument()
  })
})
