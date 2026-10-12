import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Preloader } from './Preloader'
import { PRELOADER_DELAY_MS } from '../lib/site'
import { mockMatchMedia, tokens } from '../test/match-media'

describe('Preloader', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('covers the first paint with a white sheet and a mark above it', () => {
    vi.useFakeTimers()
    render(<Preloader />)

    const cover = screen.getByTestId('preloader-cover')
    const mark = screen.getByTestId('preloader-mark')

    expect(tokens(cover)).toEqual(expect.arrayContaining(['fixed', 'inset-0', 'bg-white', 'z-[7100]']))
    expect(tokens(mark)).toEqual(
      expect.arrayContaining(['fixed', 'top-1/2', 'left-1/2', 'z-[7700]', '-translate-x-1/2']),
    )
    expect(cover).toHaveAttribute('aria-hidden', 'true')
    expect(mark).toHaveAttribute('aria-hidden', 'true')
    expect(cover).not.toHaveClass('invisible')
  })

  it('holds no focusable copy in either layer', () => {
    render(<Preloader />)

    expect(screen.getByTestId('preloader-cover').querySelectorAll('a, button, input, [tabindex]')).toHaveLength(0)
    expect(screen.getByTestId('preloader-mark').querySelectorAll('a, button, input, [tabindex]')).toHaveLength(0)
  })

  it('lifts both layers the design delay after the document is ready', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Preloader />)

    act(() => {
      vi.advanceTimersByTime(PRELOADER_DELAY_MS)
    })

    expect(screen.getByTestId('preloader-cover')).toHaveClass('invisible', 'opacity-0')
    expect(screen.getByTestId('preloader-mark')).toHaveClass('invisible', 'opacity-0')
    expect(tokens(screen.getByTestId('preloader-cover'))).toContain('transition-opacity')

    unmount()
  })

  it('leaves without the fade when the visitor has asked for less movement', () => {
    mockMatchMedia(true)
    vi.useFakeTimers()
    render(<Preloader />)

    const cover = screen.getByTestId('preloader-cover')

    expect(tokens(cover)).not.toContain('transition-opacity')

    act(() => {
      vi.advanceTimersByTime(PRELOADER_DELAY_MS)
    })

    expect(cover).toHaveClass('invisible')
  })
})
