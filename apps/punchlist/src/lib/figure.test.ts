import { describe, expect, it } from 'vitest'
import { easeOutCubic, formatFigure, parseFigure } from './figure'

describe('parseFigure', () => {
  it('reads a grouped integer', () => {
    expect(parseFigure('2,400')).toEqual({
      prefix: '',
      target: 2400,
      decimals: 0,
      suffix: '',
      grouped: true,
    })
  })

  it('reads a decimal with a suffix', () => {
    expect(parseFigure('4.9')).toEqual({
      prefix: '',
      target: 4.9,
      decimals: 1,
      suffix: '',
      grouped: false,
    })
  })

  it('reads a percentage and a currency prefix', () => {
    expect(parseFigure('96%')?.suffix).toBe('%')
    expect(parseFigure('£45')?.prefix).toBe('£')
  })

  it('returns null for a string with no figure in it', () => {
    expect(parseFigure('ask us')).toBeNull()
  })
})

describe('formatFigure', () => {
  it('restores grouping and keeps the authored shape', () => {
    expect(formatFigure(1200, parseFigure('2,400')!)).toBe('1,200')
    expect(formatFigure(2400, parseFigure('2,400')!)).toBe('2,400')
  })

  it('keeps one decimal place and the suffix', () => {
    expect(formatFigure(2.45, parseFigure('4.9')!)).toBe('2.5')
    expect(formatFigure(48, parseFigure('96%')!)).toBe('48%')
  })

  it('rounds an integer figure and keeps its prefix', () => {
    expect(formatFigure(44.6, parseFigure('£45')!)).toBe('£45')
    expect(formatFigure(0, parseFigure('12')!)).toBe('0')
  })
})

describe('easeOutCubic', () => {
  it('runs from 0 to 1 with a fast start', () => {
    expect(easeOutCubic(0)).toBe(0)
    expect(easeOutCubic(1)).toBe(1)
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5)
  })
})
