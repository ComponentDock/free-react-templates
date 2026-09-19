import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { AnnouncementBar } from './AnnouncementBar'

describe('AnnouncementBar', () => {
  it('renders the first promotional message', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText(/Free delivery on orders over \$500/)).toBeInTheDocument()
  })

  it('rotates messages after 5 seconds', () => {
    vi.useFakeTimers()
    render(<AnnouncementBar />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/100 night trial on every bed and sofa/)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/10 year guarantee on all solid wood frames/)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/Free delivery on orders over \$500/)).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('has accessible label', () => {
    render(<AnnouncementBar />)
    expect(screen.getByLabelText('Promotional announcements')).toBeInTheDocument()
  })
})
