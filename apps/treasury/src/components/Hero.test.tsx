import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the initial heading', () => {
    render(<Hero />)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
  })

  it('rotates headings every 3 seconds', () => {
    render(<Hero />)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('Financing Solutions')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('Savings Accounts')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#features')
  })
})
