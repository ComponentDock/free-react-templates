import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('composes header, hero, abouts, CTA, and footer in the original order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Showcase your work' }),
    ).toBeInTheDocument()
    expect(
      within(main).getAllByRole('heading', { level: 2, name: 'Artistic Portraits' }),
    ).toHaveLength(3)
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Need a photographer? Get in touch' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(600)
    })
    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Obscura — Photography')
  })
})
