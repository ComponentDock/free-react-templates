import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MetricCard } from './MetricCard'
import { METRICS } from '../content'

const revenue = METRICS[0]!
const orders = METRICS[1]!
const conversion = METRICS[2]!
const refund = METRICS[3]!

function renderCard(index: number) {
  const { container } = render(
    <ul>
      <MetricCard metric={METRICS[index]!} />
    </ul>,
  )
  return container.querySelector('li') as HTMLElement
}

describe('MetricCard', () => {
  it('renders the plate: label, value, pill, spark and footnote', () => {
    const card = renderCard(0)

    expect(screen.getByRole('heading', { level: 2, name: 'Net revenue' })).toBeInTheDocument()
    expect(screen.getByText('$84,210')).toBeInTheDocument()
    expect(card.textContent).toContain('vs $74,920 previous period')
    expect(card.querySelector('svg[role="img"]')).not.toBeNull()
  })

  it('draws the white plate with a hairline border, 16 radius and no shadow beyond the whisper', () => {
    const card = renderCard(0)

    expect(card.className).toContain('bg-white')
    expect(card.className).toContain('border-[#e2e8f0]')
    expect(card.className).toContain('rounded-2xl')
    expect(card.className).toContain('px-5')
    expect(card.className).toContain('pt-5')
    expect(card.className).toContain('pb-4')
    expect(card.className).toContain('shadow-[0_1px_2px_rgba(15,23,42,.04)]')
    expect(card.className).toContain('relative')
    expect(card.className).toContain('flex-col')
  })

  it('lifts only the border and shadow on hover, and stops under reduced motion', () => {
    const card = renderCard(0)

    expect(card.className).toContain('hover:border-[#cbd5e1]')
    expect(card.className).toContain('hover:shadow-[0_10px_28px_-18px_rgba(15,23,42,.35)]')
    expect(card.className).toContain('duration-200')
    expect(card.className).toContain('ease-[ease]')
    expect(card.className).toContain('motion-reduce:transition-none')
    expect(card.className).toContain('motion-reduce:duration-0')
    expect(card.className).not.toContain('hover:scale')
    expect(card.className).not.toContain('ring')
  })

  it('carries the accent as per-card data, never as an nth-child rule', () => {
    const accents = METRICS.map((metric) => metric.accent)
    expect(accents).toEqual(['#4f46e5', '#0891b2', '#db2777', '#16a34a'])

    METRICS.forEach((_, index) => {
      const card = renderCard(index)
      expect(card.getAttribute('style')).toBe(`--accent: ${METRICS[index]!.accent};`)
      const chip = card.querySelector('span[aria-hidden="true"]') as HTMLElement
      expect(chip.className).toContain('metric-icon')
      expect(chip.className).toContain('h-[34px]')
      expect(chip.className).toContain('w-[34px]')
      expect(chip.className).toContain('rounded-[10px]')
    })
  })

  it('renders the accent-tinted glyph as an inline 24-unit path set', () => {
    const card = renderCard(0)
    const chip = card.querySelector('span[aria-hidden="true"]') as HTMLElement
    const glyph = chip.querySelector('svg') as SVGElement

    expect(glyph.getAttribute('viewBox')).toBe('0 0 24 24')
    expect(glyph.getAttribute('stroke-width')).toBe('2')
    expect(glyph.querySelectorAll('path')).toHaveLength(1)
    expect(glyph.querySelector('path')).toHaveAttribute(
      'd',
      'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
    )

    const ordersGlyph = renderCard(1).querySelector('span[aria-hidden="true"] svg') as SVGElement
    expect(ordersGlyph.querySelectorAll('path')).toHaveLength(2)
  })

  it('writes the value in 30px tabular numerals', () => {
    renderCard(0)
    const value = screen.getByText('$84,210')

    expect(value.className).toContain('text-[30px]')
    expect(value.className).toContain('font-bold')
    expect(value.className).toContain('tabular-nums')
    expect(value.className).toContain('tracking-[-.03em]')
    expect(value.className).toContain('mt-[10px]')
  })

  it('paints good deltas green and bad deltas red', () => {
    const good = renderCard(0).querySelectorAll('p')[1] as HTMLElement
    expect(good.textContent).toBe('12.4% increase')
    expect(good.className).toContain('bg-[#dcfce7]')
    expect(good.className).toContain('text-[#15803d]')

    const bad = renderCard(2).querySelectorAll('p')[1] as HTMLElement
    expect(bad.textContent).toBe('0.4 pts decrease')
    expect(bad.className).toContain('bg-[#ffe4e6]')
    expect(bad.className).toContain('text-[#be123c]')
  })

  it('paints card 4 as a falling arrow that is good news', () => {
    const card = renderCard(3)
    const pill = card.querySelectorAll('p')[1] as HTMLElement
    const arrow = pill.querySelector('path') as SVGElement

    expect(arrow).toHaveAttribute('d', 'M8 3v10M4 9l4 4 4-4')
    expect(pill.className).toContain('text-[#15803d]')
    expect(pill.textContent).toBe('0.6 pts decrease, an improvement')
  })

  it('hides the delta word from the pill flow in a 1px clipped span', () => {
    const pill = renderCard(0).querySelectorAll('p')[1] as HTMLElement
    const hidden = pill.querySelector('span') as HTMLElement

    expect(hidden.textContent).toBe(' increase')
    expect(hidden.className).toContain('absolute')
    expect(hidden.className).toContain('h-px')
    expect(hidden.className).toContain('w-px')
    expect(hidden.className).toContain('[clip-path:inset(50%)]')
    expect(hidden.className).toContain('whitespace-nowrap')
  })

  it('keeps the pill pill-shaped at 13px semibold', () => {
    const pill = renderCard(1).querySelectorAll('p')[1] as HTMLElement

    expect(pill.className).toContain('rounded-full')
    expect(pill.className).toContain('text-[13px]')
    expect(pill.className).toContain('font-semibold')
    expect(pill.className).toContain('self-start')
    expect(pill.className).toContain('tabular-nums')
    expect(pill.className).toContain('pt-[3px]')
    expect(pill.className).toContain('pr-[8px]')
    expect(pill.className).toContain('pl-[6px]')
  })

  it('sits the footnote on a hairline rule', () => {
    const foot = renderCard(0).lastElementChild as HTMLElement

    expect(foot.textContent).toBe('vs $74,920 previous period')
    expect(foot.className).toContain('border-t')
    expect(foot.className).toContain('border-[#eef2f7]')
    expect(foot.className).toContain('pt-3')
    expect(foot.className).toContain('text-[13px]')
    expect(foot.className).toContain('text-[#64748b]')
  })

  it('keeps the four source values and their separators verbatim', () => {
    expect(revenue.value).toBe('$84,210')
    expect(orders.value).toBe('1,286')
    expect(conversion.value).toBe('3.18%')
    expect(refund.value).toBe('1.9%')
    expect(revenue.deltaNote).toBe(' increase')
    expect(refund.deltaNote).toBe(' decrease, an improvement')
  })
})
