import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the coming-soon screen and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Eve — Coming Soon')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
    expect(screen.getByText('Our website is under construction')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Follow us for updates/ })).toBeInTheDocument()
  })

  it('opens the subscribe dialog from the pill trigger', () => {
    vi.useFakeTimers()

    render(<App />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Follow us for updates/ }))
    act(() => {
      vi.advanceTimersByTime(0)
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subscribe')
  })
})
