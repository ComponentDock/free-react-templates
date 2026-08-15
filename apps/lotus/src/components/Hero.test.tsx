import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows slide 1 headline with the CTA pair and two carousel dots', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Experience the best workout humanly possible',
    )
    expect(screen.getByRole('link', { name: 'Get in touch' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore our classes' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(2)
  })

  it('advances to slide 2 via the next control and wraps back via previous', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Wake to your full potential',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Experience the best workout humanly possible',
    )
  })

  it('wraps forward from the last slide back to the first', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Experience the best workout humanly possible',
    )
  })

  it('jumps to a slide when its dot is clicked', () => {
    render(<Hero />)
    fireEvent.click(screen.getAllByRole('button', { name: /Go to slide/ })[1]!)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Wake to your full potential',
    )
  })

  it('autoplays to the next slide every six seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Experience the best workout humanly possible',
    )
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Wake to your full potential',
    )
    vi.useRealTimers()
  })

  it('clears the autoplay timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    unmount()
    expect(() => {
      act(() => {
        vi.advanceTimersByTime(12000)
      })
    }).not.toThrow()
    vi.useRealTimers()
  })
})
