import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SpecRow } from './SpecRow'

describe('SpecRow', () => {
  it('renders three cells under one hairline, numbers bold', () => {
    const { container } = render(<SpecRow specs={{ beds: '4', baths: '3', floor: '2,450' }} />)

    const row = container.querySelector('ul')!
    expect(row.className).toContain('mt-4')
    expect(row.className).toContain('grid-cols-[repeat(3,auto)]')
    expect(row.className).toContain('justify-between')
    expect(row.className).toContain('border-t')
    expect(row.className).toContain('border-rule')
    expect(row.className).toContain('pt-3.5')
    expect(row.className).toContain('text-[14px]')
    expect(row.className).toContain('text-muted')

    const cells = [...row.querySelectorAll('li')]
    expect(cells).toHaveLength(3)
    expect(cells.map((cell) => cell.textContent)).toEqual(['4 beds', '3 baths', '2,450 sq ft'])

    const strongs = [...row.querySelectorAll('strong')]
    expect(strongs.map((strong) => strong.textContent)).toEqual(['4', '3', '2,450'])
    strongs.forEach((strong) => {
      expect(strong.className).toContain('font-bold')
      expect(strong.className).toContain('text-ink')
    })
  })

  it('divides the cells after the first with a left rule', () => {
    const { container } = render(<SpecRow specs={{ beds: '3', baths: '2', floor: '1,720' }} />)

    const cells = [...container.querySelectorAll('li')]
    expect(cells[0]!.className).not.toContain('border-l')
    expect(cells[1]!.className).toContain('border-l')
    expect(cells[1]!.className).toContain('border-rule')
    expect(cells[1]!.className).toContain('pl-3.5')
    expect(cells[2]!.className).toContain('border-l')
    expect(cells[2]!.className).toContain('pl-3.5')
    cells.forEach((cell) => {
      expect(cell.className).toContain('inline-flex')
      expect(cell.className).toContain('items-center')
      expect(cell.className).toContain('gap-1.5')
    })
  })

  it('strokes all three glyphs, with a corner frame for floor area', () => {
    const { container } = render(<SpecRow specs={{ beds: '5', baths: '4', floor: '3,380' }} />)

    const glyphs = [...container.querySelectorAll('svg')]
    expect(glyphs).toHaveLength(3)

    glyphs.forEach((glyph) => {
      expect(glyph).toHaveAttribute('aria-hidden', 'true')
      expect(glyph).toHaveAttribute('width', '19')
      expect(glyph).toHaveAttribute('height', '19')
      expect(glyph).toHaveAttribute('stroke-width', '1.7')
      expect(glyph.getAttribute('fill')).toBe('none')
      expect(glyph.getAttribute('class')).toContain('text-gold')
    })

    expect(glyphs[0]!.getAttribute('class')).toContain('lucide-bed-double')
    expect(glyphs[1]!.getAttribute('class')).toContain('lucide-bath')
    expect(glyphs[2]!.getAttribute('class')).toContain('lucide-scan')
  })
})
