import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from '../components/Hero'

describe('Hero', () => {
  it('renders initial slide headline', () => {
    render(<Hero />)
    expect(screen.getByText('Catch Your Own Stylish & Look')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('navigates to next slide on button click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('A Thoroughly Modern Woman')).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('A Thoroughly Modern Woman')).toBeInTheDocument()
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(5500)
    })
    expect(screen.getByText('A Thoroughly Modern Woman')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('renders dot indicators', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
  })

  it('allows clicking dot indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText('A Thoroughly Modern Woman')).toBeInTheDocument()
  })
})
