import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the hero section with heading and button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Interior Design Solution/)
    expect(screen.getByRole('link', { name: 'View Works' })).toBeInTheDocument()
  })

  it('renders slide navigation dots', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
  })

  it('auto-advances slides after 5 seconds', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Interior Design Solution/)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Creative Spaces/)
  })

  it('allows manual slide navigation', async () => {
    const user = {
      click: async (el: HTMLElement) => {
        act(() => {
          el.click()
        })
      },
    }
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Creative Spaces/)
  })
})
