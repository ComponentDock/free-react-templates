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

    expect(document.title).toBe('Airborne — Coming Soon')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
  })
})
