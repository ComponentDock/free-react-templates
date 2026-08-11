import { describe, expect, it } from 'vitest'
import { BTN_PRIMARY, BTN_WHITE } from './buttons'

describe('Palate button recipes', () => {
  it('styles the primary button orange with 2px radius', () => {
    expect(BTN_PRIMARY).toContain('bg-brand')
    expect(BTN_PRIMARY).toContain('border-brand')
    expect(BTN_PRIMARY).toContain('text-white')
    expect(BTN_PRIMARY).toContain('rounded-[2px]')
    expect(BTN_PRIMARY).toContain('uppercase')
  })

  it('styles the white button with black text and white border', () => {
    expect(BTN_WHITE).toContain('bg-white')
    expect(BTN_WHITE).toContain('text-ink')
    expect(BTN_WHITE).toContain('border-white')
    expect(BTN_WHITE).toContain('hover:text-brand')
    expect(BTN_WHITE).toContain('rounded-[2px]')
  })
})
