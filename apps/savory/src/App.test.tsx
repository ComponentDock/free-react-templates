import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Savory — Food Blog Template')
  })

  it('composes all sections in the banner, main and contentinfo landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Every section renders. Titles that also appear in the trending panel
    // or recent-posts widget are asserted with getAllByText.
    expect(screen.getAllByText('Chicken Salad').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Healthy Food').length).toBeGreaterThan(0)
    expect(screen.getByText('Organic Cuisine')).toBeInTheDocument()
    expect(screen.getByText('Vegetarian Food')).toBeInTheDocument()
    expect(screen.getAllByText('Steak with boiled vegetables').length).toBeGreaterThan(0)
    expect(screen.getByText('Avocado toast with egg')).toBeInTheDocument()
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /instagram post/i })).toHaveLength(10)
  })

  it('shows the preloader on first render and hides it after load', () => {
    vi.useFakeTimers()
    render(<App />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('opens and closes the trending panel via the hamburger and close icon', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)

    const panel = container.querySelector('aside[aria-label="Trending posts panel"]')
    expect(panel).toHaveAttribute('aria-hidden', 'true')

    await user.click(screen.getByRole('button', { name: 'Open trending panel' }))
    expect(panel).not.toHaveAttribute('aria-hidden', 'true')

    await user.click(screen.getByRole('button', { name: 'Close trending panel' }))
    expect(panel).toHaveAttribute('aria-hidden', 'true')
  })
})
