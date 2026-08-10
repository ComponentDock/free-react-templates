import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { AdBanner } from './AdBanner'
import { adHeading, adPoints } from '../data'

describe('AdBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and feature points over a photo', () => {
    const { container } = render(<AdBanner />)

    expect(screen.getByRole('heading', { name: adHeading })).toBeInTheDocument()
    for (const point of adPoints) {
      expect(screen.getByText(point)).toBeInTheDocument()
    }
    expect(container.querySelector('img')!.getAttribute('src')).toContain('feast-ad-1')
  })

  it('cycles through the background photos and wraps around', () => {
    const { container } = render(<AdBanner />)
    const img = container.querySelector('img')!

    act(() => vi.advanceTimersByTime(4000))
    expect(img.getAttribute('src')).toContain('feast-ad-2')

    act(() => vi.advanceTimersByTime(4000))
    expect(img.getAttribute('src')).toContain('feast-ad-3')

    act(() => vi.advanceTimersByTime(4000))
    expect(img.getAttribute('src')).toContain('feast-ad-1')
  })

  it('clears the interval on unmount', () => {
    const clearSpy = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<AdBanner />)

    unmount()
    expect(clearSpy).toHaveBeenCalled()
    clearSpy.mockRestore()
  })
})
