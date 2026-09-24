import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the initial slide heading', () => {
    render(<Hero />)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
  })

  it('renders a scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Scroll down')).toBeInTheDocument()
  })

  it('scrolls to features section on click', () => {
    render(<Hero />)
    const btn = screen.getByLabelText('Scroll down')
    btn.click()
  })

  it('rotates slides after interval', () => {
    render(<Hero />)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Financing Solutions')).toBeInTheDocument()
  })

  it('cleans up timer on unmount', () => {
    const { unmount } = render(<Hero />)
    unmount()
  })
})
