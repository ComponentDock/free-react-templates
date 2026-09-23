import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero section with heading and subheading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Modern Interior & Design')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Chamfer')).toBeInTheDocument()
  })

  it('renders the video play icon link', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: /Play video/i })).toBeInTheDocument()
  })

  it('renders the Get In Touch button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: /Get In Touch/i })).toBeInTheDocument()
  })

  it('auto-advances slides after the interval', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByText('Modern Interior & Design')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Crafting Beautiful Spaces')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
