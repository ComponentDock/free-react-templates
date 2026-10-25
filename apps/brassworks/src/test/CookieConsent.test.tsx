import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CookieConsent } from '../components/CookieConsent'
import { COOKIE_KEY } from '../theme'

beforeEach(() => {
  window.localStorage.clear()
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

function advance(ms: number) {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

describe('CookieConsent', () => {
  it('waits 1.5 s before appearing, then both choices store the answer', () => {
    render(<CookieConsent />)

    advance(1499)
    expect(screen.queryByRole('dialog')).toBeNull()

    advance(1)
    const dialog = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(dialog).toHaveClass('fixed', 'bottom-0', 'shadow-lg')

    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(window.localStorage.getItem(COOKIE_KEY)).toBe('answered')
  })

  it('dismisses on Accept All as well', () => {
    render(<CookieConsent />)

    advance(1500)
    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(screen.queryByRole('dialog')).toBeNull()
    expect(window.localStorage.getItem(COOKIE_KEY)).toBe('answered')
  })

  it('renders nothing at all for a visitor who has already answered', () => {
    window.localStorage.setItem(COOKIE_KEY, 'answered')
    render(<CookieConsent />)

    advance(5000)

    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
