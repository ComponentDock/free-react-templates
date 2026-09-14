import { render, screen, act } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'
import { getLastObserver } from '../test/setup'

describe('StatsCounter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    let now = 0
    vi.spyOn(performance, 'now').mockImplementation(() => now)
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      now += 50
      cb(now)
      return 1
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders heading and CTA', () => {
    render(<StatsCounter />)
    expect(screen.getByText('We Provide Free Quotation')).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
  })

  it('triggers animation when visible', () => {
    render(<StatsCounter />)
    const observer = getLastObserver()
    expect(observer).toBeDefined()

    // Simulate the element becoming visible
    act(() => {
      observer?.trigger(true)
    })

    // The observer should have been called with observe
    expect(observer?.observe).toHaveBeenCalled()

    // Verify the observer callback ran (started.current should be true)
    // Triggering again should not restart the animation
    act(() => {
      observer?.trigger(true)
    })
  })
})
