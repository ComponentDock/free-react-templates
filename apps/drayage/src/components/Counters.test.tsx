import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the eyebrow and navy heading', () => {
    vi.useFakeTimers()
    render(<Counters />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our clients & counters')
  })

  it('renders the four canonical counter values, the km suffix, and partner strip', () => {
    vi.useFakeTimers()
    render(<Counters />)
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByText('9123')).toBeInTheDocument()
    expect(screen.getByText(/70102/)).toBeInTheDocument()
    expect(screen.getByText('km')).toBeInTheDocument()
    expect(screen.getByText('1254')).toBeInTheDocument()
    expect(screen.getByText('20254')).toBeInTheDocument()
    for (const label of [
      'Employees in Team',
      'Kilometer Travel Weekly',
      'Worldwide Clients',
      'Projects Done',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }
    const partners = screen.getByRole('list', { name: 'Partner companies' })
    expect(partners.querySelectorAll('li')).toHaveLength(5)
  })

  it('starts each count-up at zero and finishes on the canonical value', () => {
    vi.useFakeTimers()
    render(<Counters />)
    act(() => {
      vi.advanceTimersByTime(16)
    })
    expect(screen.getByText('122')).toBeInTheDocument() // 9123 * 16/1200
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByText('9123')).toBeInTheDocument()
  })
})
