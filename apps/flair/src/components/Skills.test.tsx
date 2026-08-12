import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { IMAGES, SKILLS } from '../data'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Skills', () => {
  it('renders the heading, subtext, four bars and the CTA', () => {
    render(<Skills />)
    expect(screen.getByRole('region', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: SKILLS.heading })).toBeInTheDocument()
    expect(screen.getByText(SKILLS.subtext)).toBeInTheDocument()
    for (const bar of SKILLS.bars) {
      expect(screen.getByText(bar.label)).toBeInTheDocument()
      // Percentages repeat (90 appears twice), so match by count.
      expect(screen.getAllByText(`${bar.percentage}%`).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('link', { name: SKILLS.ctaLabel })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('img', { name: 'Designer sketching a brand concept' })).toHaveAttribute(
      'src',
      IMAGES.skills,
    )
  })

  it('fills the bars when the section enters the viewport', () => {
    class FakeObserver {
      private callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe() {
        // Blank entry first (covers the missing-entry path), then the
        // intersecting entry that triggers the animation.
        this.callback([] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver,
        )
      }
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', FakeObserver)

    render(<Skills />)
    for (const bar of SKILLS.bars) {
      const fill = screen
        .getByText(bar.label)
        .closest('div')
        ?.parentElement?.querySelector('div.bg-gradient-to-r') as HTMLElement | null
      expect(fill?.style.width).toBe(`${bar.percentage}%`)
    }
  })

  it('shows the bars immediately when IntersectionObserver is missing', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    render(<Skills />)
    const firstFill = screen
      .getByText(SKILLS.bars[0].label)
      .closest('div')
      ?.parentElement?.querySelector('div.bg-gradient-to-r') as HTMLElement | null
    expect(firstFill?.style.width).toBe(`${SKILLS.bars[0].percentage}%`)
  })
})
