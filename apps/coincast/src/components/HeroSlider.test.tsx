import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero heading', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Coincast Agency/)
  })

  it('renders a Read More button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: /Read More/i })).toBeInTheDocument()
  })

  it('renders slide navigation dots', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(2)
  })

  it('advances to next slide on dot click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    await user.click(dots[1]!)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Crypto Partner/)
  })

  it('navigates with arrow buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const nextBtn = screen.getByRole('button', { name: 'Next slide' })
    const prevBtn = screen.getByRole('button', { name: 'Previous slide' })
    await user.click(nextBtn)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Crypto Partner/)
    await user.click(prevBtn)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Coincast Agency/)
  })

  it('auto-advances slides via useEffect interval', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Coincast Agency/)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Crypto Partner/)
    vi.useRealTimers()
  })
})
