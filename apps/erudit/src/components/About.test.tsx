import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('Who Are We')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    const descTexts = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(descTexts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders 4 counter labels', () => {
    render(<About />)
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('Students')).toBeInTheDocument()
    expect(screen.getByText('Teachers online')).toBeInTheDocument()
    expect(screen.getByText('Countries')).toBeInTheDocument()
  })

  it('renders two about images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })

  it('animates counters', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    render(<About />)
    await act(async () => {
      vi.advanceTimersByTime(2100)
    })
    expect(screen.getByText('1,539')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
