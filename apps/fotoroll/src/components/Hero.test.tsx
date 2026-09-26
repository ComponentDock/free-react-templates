import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
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
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Mountain Vistas')
  })

  it('renders the view projects link', () => {
    render(<Hero />)
    expect(screen.getByText('View Projects')).toHaveAttribute('href', '#portfolio')
  })

  it('renders prev and next buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('navigates to the next slide on next click', () => {
    render(<Hero />)
    act(() => {
      screen.getByRole('button', { name: 'Next slide' }).click()
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Urban Streets')
  })

  it('navigates to the previous slide on prev click', () => {
    render(<Hero />)
    act(() => {
      screen.getByRole('button', { name: 'Previous slide' }).click()
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ocean Dreams')
  })

  it('auto-advances slides after 6 seconds', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Mountain Vistas')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Urban Streets')
  })

  it('shows the slide counter', () => {
    render(<Hero />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('updates the slide counter on navigation', () => {
    render(<Hero />)
    act(() => {
      screen.getByRole('button', { name: 'Next slide' }).click()
    })
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })
})
