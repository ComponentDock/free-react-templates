import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Marriages } from './Marriages'
import { MARRIAGES_TITLE, SLIDES, SLIDE_INTERVAL_MS } from '../lib/site'
import { mockMatchMedia, tokens } from '../test/match-media'

/** The couple the band is showing, read off the caption the design sets under the photograph. */
const couple = () => screen.getByTestId('marriage-couple').textContent

describe('Marriages', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('stands one couple at a time on the mint panel the design bleeds below them', () => {
    render(<Marriages />)

    const title = screen.getByRole('heading', { level: 2, name: MARRIAGES_TITLE })

    expect(tokens(title)).toContain('italic')

    const panel = screen.getByTestId('marriage-panel')

    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(tokens(panel)).toEqual(
      expect.arrayContaining(['absolute', 'left-[15px]', 'right-[15px]', 'bottom-[-5%]', 'h-screen', 'bg-brand']),
    )

    const photo = screen.getByTestId('marriage-photo')

    expect(tokens(photo)).toEqual(expect.arrayContaining(['h-[500px]', 'w-full', 'bg-cover']))
    expect(photo.style.backgroundImage).toContain(SLIDES[0]?.photo as string)

    // The slider paints above the panel it stands on.
    expect(photo.closest('.relative')?.contains(panel)).toBe(false)
    expect(screen.getByTestId('marriage-couple')).toHaveTextContent(SLIDES[0]?.couple as string)
    expect(screen.getByText(SLIDES[0]?.story as string)).toBeInTheDocument()
  })

  it('gives each couple its own dot and never repeats a caption', () => {
    render(<Marriages />)

    const dots = screen.getAllByRole('button', { name: /^Show / })

    expect(dots).toHaveLength(SLIDES.length)
    expect(tokens(dots[0] as Element)).toContain('bg-ink')
    expect(tokens(dots[1] as Element)).toContain('bg-dot')
    expect(tokens(dots[0] as Element)).toContain('rounded-full')
    expect((dots[0] as Element).getAttribute('aria-current')).toBe('true')
    expect((dots[1] as Element).getAttribute('aria-current')).toBeNull()
    expect(new Set(SLIDES.map((slide) => slide.couple)).size).toBe(SLIDES.length)
  })

  it('steps forward, steps back round the end, and follows a chosen dot', () => {
    render(<Marriages />)

    fireEvent.click(screen.getByRole('button', { name: 'Next couple' }))
    expect(couple()).toBe(SLIDES[1]?.couple)

    fireEvent.click(screen.getByRole('button', { name: 'Previous couple' }))
    expect(couple()).toBe(SLIDES[0]?.couple)

    fireEvent.click(screen.getByRole('button', { name: 'Previous couple' }))
    expect(couple()).toBe(SLIDES[2]?.couple)

    fireEvent.click(screen.getByRole('button', { name: `Show ${SLIDES[1]?.couple as string}` }))
    expect(couple()).toBe(SLIDES[1]?.couple)

    const dots = screen.getAllByRole('button', { name: /^Show / })

    expect((dots[1] as Element).getAttribute('aria-current')).toBe('true')
    expect((dots[0] as Element).getAttribute('aria-current')).toBeNull()
  })

  it('holds its arrows and dots to real, labelled buttons', () => {
    render(<Marriages />)

    const previous = screen.getByRole('button', { name: 'Previous couple' })
    const next = screen.getByRole('button', { name: 'Next couple' })

    expect(tokens(previous)).toEqual(expect.arrayContaining(['h-[40px]', 'w-[40px]', 'rounded-full', 'bg-white']))
    expect(tokens(previous)).toContain('left-[27px]')
    expect(tokens(next)).toContain('right-[27px]')
    expect(previous.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(next.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('steps on by itself at the design interval, and stops when it is unmounted', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Marriages />)

    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS)
    })

    expect(screen.getByTestId('marriage-couple')).toHaveTextContent(SLIDES[1]?.couple as string)

    unmount()

    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS * 2)
    })

    expect(vi.getTimerCount()).toBe(0)
  })

  it('never steps on its own when the visitor has asked for less movement', () => {
    mockMatchMedia(true)
    vi.useFakeTimers()
    render(<Marriages />)

    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS * 3)
    })

    expect(screen.getByTestId('marriage-couple')).toHaveTextContent(SLIDES[0]?.couple as string)
    expect(vi.getTimerCount()).toBe(0)
  })
})
