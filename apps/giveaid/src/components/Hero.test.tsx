import { render, screen, act } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByText('Needs a Caring Parents')).toBeInTheDocument()
  })

  it('renders child name in accent font', () => {
    render(<Hero />)
    expect(screen.getByText('Celine Richardson, 14 yrs. old')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Adopt Her Now!')).toBeInTheDocument()
  })

  it('has slide navigation dots', () => {
    render(<Hero />)
    const dots = screen.getAllByLabelText(/Go to slide/)
    expect(dots).toHaveLength(2)
  })

  it('navigates to next slide on dot click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dot2 = screen.getByLabelText('Go to slide 2')
    await user.click(dot2)
    expect(screen.getByText('Needs a Loving Parents')).toBeInTheDocument()
    expect(screen.getByText('Adopt Him Now!')).toBeInTheDocument()
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    await act(async () => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Needs a Loving Parents')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
