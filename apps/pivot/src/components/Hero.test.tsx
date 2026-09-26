import { render, screen, act } from '@testing-library/react'
import { vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the developer intro headline', () => {
    render(<Hero />)
    expect(screen.getByText(/I'm a developer from Berlin/i)).toBeInTheDocument()
  })

  it('renders the Hire me now CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Hire me now')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Dribbble')).toBeInTheDocument()
  })

  it('advances the carousel after 5 seconds', () => {
    render(<Hero />)
    expect(screen.getByText(/I'm a developer from Berlin/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/Digital Product Designer/)).toBeInTheDocument()
  })
})
