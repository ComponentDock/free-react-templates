import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the initial headline', () => {
    render(<Hero />)
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()
  })

  it('renders search form with keyword input', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Keyword')).toBeInTheDocument()
  })

  it('renders city dropdown', () => {
    render(<Hero />)
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(1)
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('allows typing in keyword input', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByPlaceholderText('Keyword')
    await user.type(input, 'villa')
    expect(input).toHaveValue('villa')
  })

  it('renders heading text', () => {
    render(<Hero />)
    expect(screen.getByText('Search for your home')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const button = screen.getByRole('button', { name: 'Search' })
    await user.click(button)
    expect(button).toBeInTheDocument()
  })

  it('cycles through headlines via timer', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText('Find Your Perfect House')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText('Find Your Ideal Property')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()

    vi.useRealTimers()
  })
})
