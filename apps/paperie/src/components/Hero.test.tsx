import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { COUPLE, HERO_DATE, HERO_TAGLINE, SLIDE_PAUSE, SLIDE_PLAY } from '../lib/site'
import { Hero, SLIDE_MS } from './Hero'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

function stubMotion(matches: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}

afterEach(() => {
  vi.useRealTimers()
  stubMotion(false)
})

describe('the hero', () => {
  it('sets the date between two dashes over the couple and their line', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(COUPLE)
    expect(screen.getByText(HERO_DATE)).toBeInTheDocument()
    expect(screen.getByText(HERO_TAGLINE)).toBeInTheDocument()

    const dashes = screen.getAllByTestId('hero-dash')

    expect(dashes).toHaveLength(2)
    for (const dash of dashes) {
      expect(tokens(dash)).toContain('w-[57px]')
      expect(tokens(dash)).toContain('h-[2px]')
      expect(tokens(dash)).toContain('bg-white')
      expect(dash).toHaveAttribute('aria-hidden', 'true')
    }

    expect(container.querySelectorAll('[data-testid="hero-slide-0"]')).toHaveLength(1)
  })

  it('hangs a dashed ring on a translucent disc and rotates only the ring', () => {
    render(<Hero />)

    const disc = screen.getByTestId('hero-disc')

    expect(tokens(disc)).toContain('rounded-full')
    expect(tokens(disc)).toContain('bg-circle')
    expect(tokens(disc)).toContain('h-[220px]')
    expect(tokens(disc)).toContain('xl:h-[540px]')

    const ring = disc.querySelector('span') as HTMLElement

    expect(tokens(ring)).toContain('border-dashed')
    expect(tokens(ring)).toContain('inset-[3.52%]')
    expect(tokens(ring)).toContain('disc-spin')
  })

  it('rises its three copy blocks in turn, one delay each', () => {
    render(<Hero />)

    const copy = screen.getByTestId('hero-copy')

    expect(copy.querySelectorAll('.copy-rise')).toHaveLength(3)
    expect((screen.getByText(HERO_DATE) as HTMLElement).style.animationDelay).toBe('0.3s')
    expect(screen.getByRole('heading', { level: 1 }).style.animationDelay).toBe('0.5s')
    expect((screen.getByText(HERO_TAGLINE) as HTMLElement).style.animationDelay).toBe('0.9s')
  })

  it('cross-fades between its two photographs', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(screen.getByTestId('hero-slide-0')).toHaveAttribute('data-active', 'true')
    expect(screen.getByTestId('hero-slide-1')).toHaveAttribute('data-active', 'false')
    expect(screen.getByTestId('hero-slide-0')).toHaveAttribute('aria-hidden', 'false')
    expect(tokens(screen.getByTestId('hero-slide-1'))).toContain('opacity-0')

    act(() => {
      vi.advanceTimersByTime(SLIDE_MS)
    })

    expect(screen.getByTestId('hero-slide-1')).toHaveAttribute('data-active', 'true')
    expect(tokens(screen.getByTestId('hero-slide-0'))).toContain('opacity-0')

    act(() => {
      vi.advanceTimersByTime(SLIDE_MS)
    })

    expect(screen.getByTestId('hero-slide-0')).toHaveAttribute('data-active', 'true')
  })

  it('holds the slider still while it is paused and sets it going again', () => {
    vi.useFakeTimers()
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: SLIDE_PAUSE }))

    expect(screen.getByRole('button', { name: SLIDE_PLAY })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(SLIDE_MS * 2)
    })

    expect(screen.getByTestId('hero-slide-0')).toHaveAttribute('data-active', 'true')

    fireEvent.click(screen.getByRole('button', { name: SLIDE_PLAY }))

    act(() => {
      vi.advanceTimersByTime(SLIDE_MS)
    })

    expect(screen.getByTestId('hero-slide-1')).toHaveAttribute('data-active', 'true')
  })

  it('neither turns nor advances when motion is unwanted', () => {
    stubMotion(true)
    vi.useFakeTimers()
    const { container } = render(<Hero />)

    expect(container.querySelectorAll('.disc-spin')).toHaveLength(0)
    expect(container.querySelectorAll('.copy-rise')).toHaveLength(0)

    act(() => {
      vi.advanceTimersByTime(SLIDE_MS * 3)
    })

    expect(screen.getByTestId('hero-slide-0')).toHaveAttribute('data-active', 'true')
  })
})
