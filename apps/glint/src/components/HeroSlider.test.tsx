import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide heading and CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Your Smile Is Our Priority')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Appointment' })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('navigates to next slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Expert Dental Solutions')).toBeInTheDocument()
  })

  it('navigates to previous slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Expert Dental Solutions')).toBeInTheDocument()
  })

  it('navigates to a specific slide on dot click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('Expert Dental Solutions')).toBeInTheDocument()
  })

  it('auto-advances to next slide after interval', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('Expert Dental Solutions')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
