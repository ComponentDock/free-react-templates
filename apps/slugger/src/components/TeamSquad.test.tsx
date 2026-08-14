import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TeamSquad } from './TeamSquad'

describe('TeamSquad', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading, intro, and the first page of players', () => {
    render(<TeamSquad />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/our team squad/i)
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'David Scott' })).toBeInTheDocument()
    expect(screen.getByText('Catcher')).toBeInTheDocument()
  })

  it('advances the carousel and updates the active dot', () => {
    render(<TeamSquad />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveClass('bg-brand')
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveClass('bg-brand')
  })

  it('jumps to a page when a dot is clicked', () => {
    render(<TeamSquad />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 4' }))
    expect(screen.getByRole('button', { name: 'Go to slide 4' })).toHaveClass('bg-brand')
  })
})
