import { render, screen, act } from '@testing-library/react'
import { Preloader } from './Preloader'

describe('Preloader', () => {
  it('renders loading spinner initially', () => {
    render(<Preloader onComplete={vi.fn()} />)
    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()
  })

  it('calls onComplete after timeout', async () => {
    const onComplete = vi.fn()
    vi.useFakeTimers()
    render(<Preloader onComplete={onComplete} />)
    expect(onComplete).not.toHaveBeenCalled()
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(onComplete).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })

  it('removes itself after timeout', async () => {
    vi.useFakeTimers()
    const { container } = render(<Preloader onComplete={vi.fn()} />)
    expect(container.querySelector('[role="status"]')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(container.querySelector('[role="status"]')).not.toBeInTheDocument()
    vi.useRealTimers()
  })
})
