import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide by default', () => {
    render(<HeroSlider />)
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText('Jeans')).toBeInTheDocument()
    expect(screen.getByText('Collection')).toBeInTheDocument()
    expect(screen.getByText('Shop Collection')).toBeInTheDocument()
  })

  it('advances to the next slide after 5 seconds', async () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Huge')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('45% off')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('navigates to a specific slide via indicator', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText('Huge')).toBeInTheDocument()
  })

  it('cycles back to first slide after last', async () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(screen.getByText("Men's")).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('has proper aria label', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('region', { name: 'Hero slider' })).toBeInTheDocument()
  })
})
