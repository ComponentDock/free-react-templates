import { render, screen } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Toast, useToast } from '../components/Toast'

afterEach(() => {
  vi.useRealTimers()
})

describe('Toast', () => {
  it('renders nothing when there is no message', () => {
    const { container } = render(<Toast message={null} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('renders the message in the house green when there is one', () => {
    render(<Toast message="Booked" />)

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Booked')
    expect(status).toHaveClass('bg-green-600', 'top-6', 'right-6')
  })

  it('clears itself after the house four seconds', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useToast())

    act(() => {
      result.current.notify('Booked')
    })
    expect(result.current.message).toBe('Booked')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(result.current.message).toBeNull()
  })

  it('replaces an earlier message and restarts its timer', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useToast())

    act(() => {
      result.current.notify('First')
    })
    act(() => {
      vi.advanceTimersByTime(3000)
      result.current.notify('Second')
    })

    expect(result.current.message).toBe('Second')

    act(() => {
      vi.advanceTimersByTime(3999)
    })
    expect(result.current.message).toBe('Second')

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current.message).toBeNull()
  })

  it('clears a pending timer when the owner unmounts', () => {
    vi.useFakeTimers()
    const clear = vi.spyOn(window, 'clearTimeout')
    const { result, unmount } = renderHook(() => useToast())

    act(() => {
      result.current.notify('Booked')
    })
    clear.mockClear()
    unmount()

    expect(clear).toHaveBeenCalled()
    clear.mockRestore()
  })
})
