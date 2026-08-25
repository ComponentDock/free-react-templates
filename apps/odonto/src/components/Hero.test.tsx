import { render, screen, act, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByText('Dentist Services that You Can Trust')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'See Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Services' })).toBeInTheDocument()
  })

  it('advances to next slide after 5s', () => {
    render(<Hero />)
    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getByText('A Brighter Dental Experience')).toBeInTheDocument()
  })

  it('allows clicking a slide indicator', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('A Brighter Dental Experience')).toBeInTheDocument()
  })
})
