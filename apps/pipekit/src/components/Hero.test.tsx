import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We Are Creative Agency/i })).toBeInTheDocument()
    expect(screen.getByText(/Crafting bold digital experiences/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover More/i })).toBeInTheDocument()
  })

  it('renders navigation arrows and dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3)
  })

  it('navigates to next slide when clicking next arrow', () => {
    render(<Hero />)
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    })
    expect(screen.getByRole('heading', { name: /Innovation Meets Design/i })).toBeInTheDocument()
  })

  it('navigates to previous slide', () => {
    render(<Hero />)
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    })
    expect(screen.getByRole('heading', { name: /Your Vision, Our Mission/i })).toBeInTheDocument()
  })

  it('navigates to specific slide via dot', () => {
    render(<Hero />)
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    })
    expect(screen.getByRole('heading', { name: /Your Vision, Our Mission/i })).toBeInTheDocument()
  })

  it('auto-advances slides after 5 seconds', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We Are Creative Agency/i })).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { name: /Innovation Meets Design/i })).toBeInTheDocument()
  })
})
