import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /deliver innovative/i })).toBeInTheDocument()
  })

  it('renders About Company label', () => {
    render(<About />)
    expect(screen.getByText('About Company')).toBeInTheDocument()
  })

  it('renders a Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders a review with 5 stars', () => {
    render(<About />)
    const stars = document.querySelectorAll('.fill-star')
    expect(stars.length).toBe(5)
  })

  it('renders the 350+ review stat', () => {
    render(<About />)
    expect(screen.getByText('350+')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })

  it('navigates to next review on arrow click', async () => {
    const user = userEvent.setup()
    render(<About />)
    const nextBtn = screen.getByRole('button', { name: /next review/i })
    await user.click(nextBtn)
    expect(screen.getByText(/sarah williams/i)).toBeInTheDocument()
  })

  it('navigates to previous review on arrow click', async () => {
    const user = userEvent.setup()
    render(<About />)
    const prevBtn = screen.getByRole('button', { name: /previous review/i })
    await user.click(prevBtn)
    expect(screen.getByText(/james rodriguez/i)).toBeInTheDocument()
  })

  it('auto-advances reviews', () => {
    vi.useFakeTimers()
    render(<About />)
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByText(/sarah williams/i)).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('has a previous review button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /previous review/i })).toBeInTheDocument()
  })
})
