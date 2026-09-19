import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the hero heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Love your smile')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Appointment/i })).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to slide 2/i })).toBeInTheDocument()
  })

  it('renders a section with background image style', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeTruthy()
    expect(section?.getAttribute('style')).toContain('background-image')
  })

  it('advances to next slide on indicator click', async () => {
    const user = await import('@testing-library/user-event').then((m) => m.default.setup())
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /Go to slide 2/i }))
    expect(screen.getByText('Best Dentist.')).toBeInTheDocument()
  })

  it('auto-advances slides after 5 seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Love your smile')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Best Dentist.')).toBeInTheDocument()
  })
})
