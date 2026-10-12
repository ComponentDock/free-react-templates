import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { CARD_INTERVAL_MS, Greetings } from './Greetings'
import { GREETINGS } from '../lib/site'
import { mockReducedMotion } from '../test/match-media'

afterEach(() => {
  vi.useRealTimers()
})

/** The carousel items, read in order — the inactive ones are hidden from role queries. */
function items(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('[data-active]')) as HTMLElement[]
}

/** Which card holds the stage, by its guest's name. */
function active(container: HTMLElement): string | null {
  const shown = items(container).find((item) => item.dataset.active === 'true')

  return shown?.textContent ?? null
}

describe('Greetings', () => {
  it('stages one card at a time under the design title', () => {
    const { container } = render(<Greetings />)

    expect(screen.getByRole('heading', { level: 2, name: 'Sweet Messages' })).toHaveClass('font-script')
    expect(items(container)).toHaveLength(GREETINGS.length)
    expect(active(container)).toContain(GREETINGS[0]!.name)
    expect(items(container)[0] as HTMLElement).toHaveClass('opacity-100')
    expect(items(container)[1] as HTMLElement).toHaveClass('opacity-40')
    expect(items(container)[1] as HTMLElement).toHaveAttribute('aria-hidden', 'true')
    expect(items(container)[0] as HTMLElement).not.toHaveAttribute('aria-hidden')
  })

  it('dresses every card with the disc, the framed avatar and the name over the role', () => {
    const { container } = render(<Greetings />)

    const card = items(container)[0] as HTMLElement
    const disc = card.querySelector('span[aria-hidden]') as HTMLElement
    const avatar = card.querySelector('img') as HTMLImageElement

    expect(disc).toHaveClass('-top-[20px]', 'left-[20px]', 'bg-brand', 'rounded-full')
    expect(disc.querySelector('svg')).toHaveClass('h-[30px]', 'text-white')
    expect(avatar).toHaveClass('border-[5px]', 'border-tint', 'h-[80px]')
    expect(avatar.getAttribute('src')).toContain('picsum.photos/seed/affiance-46/160/160')
    expect(card.querySelector('h3')).toHaveTextContent(GREETINGS[0]!.name)
    expect(card.querySelector('h3')).toHaveClass('text-name')
    expect(card.querySelectorAll('p')[1]).toHaveTextContent(GREETINGS[0]!.role)
  })

  it('advances itself on the interval', () => {
    vi.useFakeTimers()

    const { container } = render(<Greetings />)

    expect(active(container)).toContain(GREETINGS[0]!.name)

    act(() => {
      vi.advanceTimersByTime(CARD_INTERVAL_MS)
    })

    expect(active(container)).toContain(GREETINGS[1]!.name)
  })

  it('holds the stage when the visitor pauses it, and lets it go again', () => {
    vi.useFakeTimers()

    const { container } = render(<Greetings />)

    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))

    act(() => {
      vi.advanceTimersByTime(CARD_INTERVAL_MS)
    })

    expect(screen.getByRole('button', { name: 'Play' })).toHaveAttribute('aria-pressed', 'true')
    expect(active(container)).toContain(GREETINGS[0]!.name)

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))

    act(() => {
      vi.advanceTimersByTime(CARD_INTERVAL_MS)
    })

    expect(active(container)).toContain(GREETINGS[1]!.name)
  })

  it('steps back and forward with the arrows, wrapping at both ends', () => {
    const { container } = render(<Greetings />)

    fireEvent.click(screen.getByRole('button', { name: 'Next message' }))

    expect(active(container)).toContain(GREETINGS[1]!.name)

    fireEvent.click(screen.getByRole('button', { name: 'Previous message' }))
    fireEvent.click(screen.getByRole('button', { name: 'Previous message' }))

    expect(active(container)).toContain(GREETINGS[GREETINGS.length - 1]!.name)
  })

  it('never moves on its own for a visitor who asks for reduced motion', () => {
    vi.useFakeTimers()
    mockReducedMotion()

    const { container } = render(<Greetings />)

    act(() => {
      vi.advanceTimersByTime(CARD_INTERVAL_MS * 3)
    })

    expect(active(container)).toContain(GREETINGS[0]!.name)
  })
})
