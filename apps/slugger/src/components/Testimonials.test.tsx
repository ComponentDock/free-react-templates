import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and the first testimonial card', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/happy viewers/i)
    expect(screen.getByText('Jason Smith')).toBeInTheDocument()
    expect(screen.getByText('Viewer')).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
  })

  it('advances the carousel automatically', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveClass('bg-brand')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveClass('bg-brand')
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('jumps to a card when a dot is clicked', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText('Carlos Mendez')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveClass('bg-brand')
  })
})
