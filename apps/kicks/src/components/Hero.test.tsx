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

  it('renders the first slide by default', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: 'New trending shoes' })).toBeInTheDocument()
    expect(screen.getByText("Men's / Shoes / Collection")).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('renders slide indicator dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
  })

  it('navigates to next slide via dot indicator', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('Huge / Sale / 50% Off')).toBeInTheDocument()
  })

  it('navigates to slide 3 via dot indicator', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText('New / Arrival / up to 30% off')).toBeInTheDocument()
  })

  it('navigates to next slide via arrow button', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Huge / Sale / 50% Off')).toBeInTheDocument()
  })

  it('navigates to previous slide via arrow button', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('New / Arrival / up to 30% off')).toBeInTheDocument()
  })

  it('advances to next slide automatically', () => {
    render(<Hero />)
    expect(screen.getByText('New trending shoes')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Huge / Sale / 50% Off')).toBeInTheDocument()
  })

  it('renders Shop Collection button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Shop Collection' })).toHaveAttribute('href', '#shop')
  })
})
