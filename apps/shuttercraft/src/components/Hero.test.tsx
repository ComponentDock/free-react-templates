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

  it('renders the first slide heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Wildlife Photography')
    expect(screen.getByText(/Capturing the raw beauty of nature/)).toBeInTheDocument()
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
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Portrait Sessions')
  })

  it('navigates to the previous slide on prev click', () => {
    render(<Hero />)
    act(() => {
      screen.getByRole('button', { name: 'Previous slide' }).click()
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Landscape Vistas')
  })

  it('renders slide indicator buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
  })

  it('auto-advances slides after 5 seconds', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Wildlife Photography')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Portrait Sessions')
  })

  it('navigates to a specific slide via indicator', () => {
    render(<Hero />)
    act(() => {
      screen.getByRole('button', { name: 'Go to slide 3' }).click()
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Landscape Vistas')
  })
})
