import { render, screen, act, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByText('Business Conference')).toBeInTheDocument()
  })

  it('renders the date', () => {
    render(<Hero />)
    expect(screen.getByText('12 Jan – 20 Jan 2020')).toBeInTheDocument()
  })

  it('renders the Join Now button', () => {
    render(<Hero />)
    expect(screen.getByText('Join Now')).toBeInTheDocument()
  })

  it('renders the Watch Video button', () => {
    render(<Hero />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('has a heading element for accessibility', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('has slide indicator buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
  })

  it('advances to next slide after 5 seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Business Conference')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Tech Summit 2020')).toBeInTheDocument()
  })

  it('clicking a slide indicator changes the slide', () => {
    render(<Hero />)
    expect(screen.getByText('Business Conference')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /go to slide 2/i }))
    expect(screen.getByText('Tech Summit 2020')).toBeInTheDocument()
  })

  it('has a landmark section', () => {
    render(<Hero />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
