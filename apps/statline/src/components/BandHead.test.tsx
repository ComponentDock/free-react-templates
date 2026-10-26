import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BandHead } from './BandHead'

describe('BandHead', () => {
  it('renders the title block: one h1 and one line of sub-copy', () => {
    render(<BandHead />)

    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toBeInTheDocument()
    expect(
      screen.getByText('Store performance, last 30 days compared with the previous 30.'),
    ).toBeInTheDocument()
  })

  it('puts the range in a bordered chip with an en dash', () => {
    render(<BandHead />)

    const chip = screen.getByText('26 Aug – 24 Sep 2026')
    expect(chip.tagName).toBe('P')
    expect(chip.textContent).toContain('\u2013')
    expect(chip.className).toContain('border-[#d8dee8]')
    expect(chip.className).toContain('rounded-[10px]')
    expect(chip.className).toContain('px-[14px]')
    expect(chip.className).toContain('py-[9px]')
    expect(chip.className).toContain('bg-white')
    expect(chip.className).toContain('text-[14px]')
    expect(chip.className).toContain('font-medium')
  })

  it('carries one hidden 16px calendar glyph', () => {
    render(<BandHead />)

    const glyph = screen.getByText('26 Aug – 24 Sep 2026').querySelector('svg')
    expect(glyph).toHaveAttribute('aria-hidden', 'true')
    expect(glyph).toHaveAttribute('viewBox', '0 0 24 24')
    expect(glyph?.getAttribute('class')).toContain('h-4')
    expect(glyph?.getAttribute('class')).toContain('w-4')
    expect(glyph?.getAttribute('stroke-width')).toBe('2')
    expect(glyph?.querySelector('rect')).toHaveAttribute('rx', '2')
    expect(glyph?.querySelector('path')).toHaveAttribute('d', 'M16 2v4M8 2v4M3 10h18')
  })

  it('is a wrapping flex bar, not a centred block', () => {
    render(<BandHead />)

    const head = screen.getByRole('banner')
    expect(head.className).toContain('flex')
    expect(head.className).toContain('flex-wrap')
    expect(head.className).toContain('items-end')
    expect(head.className).toContain('justify-between')
    expect(head.className).toContain('gap-4')
    expect(head.className).toContain('mb-6')
  })

  it('sets the h1 and the sub-copy at the reference metrics', () => {
    render(<BandHead />)

    const title = screen.getByRole('heading', { level: 1 })
    expect(title.className).toContain('text-[28px]')
    expect(title.className).toContain('font-bold')
    expect(title.className).toContain('tracking-[-.02em]')

    const sub = screen.getByText(/^Store performance/)
    expect(sub.className).toContain('text-[15px]')
    expect(sub.className).toContain('text-[#475569]')
    expect(sub.className).toContain('mt-1')
  })
})
