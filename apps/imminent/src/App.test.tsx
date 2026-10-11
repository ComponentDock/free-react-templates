import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the coming-soon page and titles the document', () => {
    render(<App />)

    expect(document.title).toBe('Imminent — Coming Soon')
    expect(screen.getByText(/Our website is/)).toBeInTheDocument()
  })
})
