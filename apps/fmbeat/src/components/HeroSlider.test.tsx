import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  it('has testid hero-slider', () => {
    render(<HeroSlider />)
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
  })

  it('displays location badges', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Berlin')).toBeInTheDocument()
    expect(screen.getByText('Bucharest')).toBeInTheDocument()
    expect(screen.getByText('London')).toBeInTheDocument()
    expect(screen.getByText('Budapest')).toBeInTheDocument()
    expect(screen.getByText('Tel Aviv')).toBeInTheDocument()
    expect(screen.getByText('Moscow')).toBeInTheDocument()
  })

  it('shows the initial slide with Up Next label', () => {
    render(<HeroSlider />)
    expect(screen.getAllByText('Up Next').length).toBeGreaterThan(0)
    expect(screen.getByText(/DJ Khaled Exclusive Interview/i)).toBeInTheDocument()
  })

  it('advances slides automatically', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/DJ Khaled Exclusive Interview/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/Summer Festival Lineup/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/New Album Release/i)).toBeInTheDocument()
  })

  it('wraps around after the last slide', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(screen.getByText(/DJ Khaled Exclusive Interview/i)).toBeInTheDocument()
  })

  it('allows clicking a slide indicator to change slide', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    expect(screen.getByText(/DJ Khaled Exclusive Interview/i)).toBeInTheDocument()
    const indicator = screen.getByRole('button', { name: /go to slide 3/i })
    await user.click(indicator)
    expect(screen.getByText(/New Album Release/i)).toBeInTheDocument()
  })
})
