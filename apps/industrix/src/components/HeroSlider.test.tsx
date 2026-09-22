import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero section with initial slide content', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/we provide your industrial solution/i)).toBeInTheDocument()
    expect(screen.getByText('Welcome to Industrix')).toBeInTheDocument()
  })

  it('renders Our Services and Get a Quote buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: /our services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument()
  })

  it('navigates to next slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    expect(screen.getByText(/building tomorrow/i)).toBeInTheDocument()
  })

  it('navigates to previous slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    expect(screen.getByText(/trusted by industry/i)).toBeInTheDocument()
  })

  it('auto-advances slides', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByText(/we provide your industrial solution/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/building tomorrow/i)).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText(/building tomorrow/i)).toBeInTheDocument()
  })
})
