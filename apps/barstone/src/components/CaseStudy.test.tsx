import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CaseStudy } from './CaseStudy'
import { caseStudies } from '../data'

/** jsdom's selector engine rejects Tailwind's bracketed class names, so match on class text. */
function byClass(container: HTMLElement, token: string): HTMLElement {
  const found = Array.from(container.querySelectorAll<HTMLElement>('*')).find((element) =>
    element.className.toString().includes(token),
  )
  if (!found) {
    throw new Error(`no element carries ${token}`)
  }
  return found
}

describe('CaseStudy', () => {
  it('shows three distinct photographs behind three distinct captions', () => {
    render(<CaseStudy />)
    const section = screen
      .getByRole('heading', { level: 2, name: caseStudies.heading })
      .closest('section')
    const cards = Array.from(section!.querySelectorAll('a')) as HTMLElement[]

    expect(cards).toHaveLength(caseStudies.items.length)
    expect(new Set(cards.map((card) => card.getAttribute('href')))).toEqual(new Set(['#contact']))
    expect(new Set(caseStudies.items.map((item) => item.image)).size).toBe(caseStudies.items.length)
    expect(new Set(caseStudies.items.map((item) => item.caption)).size).toBe(
      caseStudies.items.length,
    )

    for (const [index, item] of caseStudies.items.entries()) {
      const card = cards[index] as HTMLElement
      const image = card.querySelector('img') as HTMLImageElement
      expect(image.getAttribute('src')).toBe(item.image)
      expect(image).toHaveAttribute('loading', 'lazy')
      expect(card.textContent).toContain(item.caption)
      expect(card.textContent).toContain(item.note)
    }
  })

  it('draws the gold frame 22px inside the card on hover and on focus', () => {
    const { container } = render(<CaseStudy />)
    const frame = byClass(container, 'inset-[22px]')

    expect(frame.className).toContain('border-gold-soft')
    expect(frame.className).toContain('group-hover:opacity-100')
    expect(frame.className).toContain('group-focus:opacity-100')
    expect(frame.className).toContain('opacity-0')
  })

  it('keeps the caption legible under a dark scrim at 40% of the card height', () => {
    const { container } = render(<CaseStudy />)
    const caption = byClass(container, 'top-[40%]')
    const scrim = byClass(container, 'bg-ink/40')

    expect(caption.className).toContain('group-hover:opacity-100')
    expect(scrim.className).toContain('bg-ink/40')
  })
})
