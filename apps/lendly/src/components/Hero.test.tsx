import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the headline, paragraph, and Find out more pill', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Looking for a same day loan?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Find out more' })).toHaveAttribute('href', '#why')
  })

  it('shows all three slider slides with the first one active', () => {
    render(<Hero />)
    const slides = screen.getAllByRole('group', { hidden: true })
    expect(slides).toHaveLength(3)
    const activeIndex = slides.findIndex((el) => el.getAttribute('aria-hidden') === 'false')
    expect(activeIndex).toBe(0)
  })

  it('advances the slider automatically', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const firstActive = screen
      .getAllByRole('group', { hidden: true })
      .findIndex((el) => el.getAttribute('aria-hidden') === 'false')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    const nextActive = screen
      .getAllByRole('group', { hidden: true })
      .findIndex((el) => el.getAttribute('aria-hidden') === 'false')
    expect(nextActive).toBe((firstActive + 1) % 3)
  })

  it('jumps to a slide when its dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /go to slide 3/i }))
    const activeIndex = screen
      .getAllByRole('group', { hidden: true })
      .findIndex((el) => el.getAttribute('aria-hidden') === 'false')
    expect(activeIndex).toBe(2)
  })

  it('submits the lead form into a success state', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByPlaceholderText('Your E-mail'), 'ada@example.com')
    await user.type(screen.getByPlaceholderText('Your Phone'), '12345')
    await user.click(screen.getByRole('button', { name: 'Apply for a loan now!' }))
    expect(screen.queryByPlaceholderText('Your Name')).not.toBeInTheDocument()
    expect(screen.getByText(/your application has been received/i)).toBeInTheDocument()
  })

  it('keeps the form visible until submitted', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Apply for a loan now!' })).toBeInTheDocument()
  })
})
