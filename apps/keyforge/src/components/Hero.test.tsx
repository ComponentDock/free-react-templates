import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the label text', () => {
    render(<Hero />)
    expect(screen.getByText('BEST LOCKSMITH')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Best Locksmith/i)
  })

  it('renders the Contact Us button', () => {
    render(<Hero />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('navigates to next slide on next click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('TRUSTED SECURITY')).toBeInTheDocument()
  })

  it('navigates to previous slide on prev click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('24/7 EMERGENCY')).toBeInTheDocument()
  })

  it('auto-rotates slides', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('BEST LOCKSMITH')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('TRUSTED SECURITY')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
