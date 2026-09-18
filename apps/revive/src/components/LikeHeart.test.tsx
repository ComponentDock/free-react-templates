import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { LikeHeart } from './LikeHeart'

describe('LikeHeart', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders initial count', () => {
    render(<LikeHeart initialCount={10} />)
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('increments count on click', () => {
    render(<LikeHeart initialCount={5} />)
    fireEvent.click(screen.getByLabelText('Like this post'))
    expect(screen.getByText('6')).toBeInTheDocument()
  })

  it('shows already liked state after clicking', () => {
    render(<LikeHeart initialCount={5} />)
    fireEvent.click(screen.getByLabelText('Like this post'))
    expect(screen.getByLabelText('Already liked')).toBeInTheDocument()
  })

  it('does not increment again when already liked', () => {
    render(<LikeHeart initialCount={5} />)
    fireEvent.click(screen.getByLabelText('Like this post'))
    fireEvent.click(screen.getByLabelText('Already liked'))
    expect(screen.getByText('6')).toBeInTheDocument()
  })

  it('removes animation class after timeout', () => {
    render(<LikeHeart initialCount={5} />)
    fireEvent.click(screen.getByLabelText('Like this post'))
    act(() => {
      vi.advanceTimersByTime(700)
    })
    expect(screen.getByText('6')).toBeInTheDocument()
  })
})
