import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SaleBanner } from './SaleBanner'

describe('SaleBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first sale message by default', () => {
    render(<SaleBanner />)
    expect(screen.getByText(/25% off Everything/)).toBeInTheDocument()
  })

  it('rotates to the second message after 4 seconds', () => {
    render(<SaleBanner />)
    expect(screen.getByText(/25% off Everything/)).toBeInTheDocument()
    vi.advanceTimersByTime(4000)
    expect(screen.getByText(/Our biggest sale yet/)).toBeInTheDocument()
  })

  it('has an aria-live region for accessibility', () => {
    render(<SaleBanner />)
    expect(screen.getByLabelText('Sale announcements')).toBeInTheDocument()
  })
})
