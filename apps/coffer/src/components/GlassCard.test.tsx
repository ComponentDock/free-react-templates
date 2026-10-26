import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlassCard } from './GlassCard'

describe('GlassCard', () => {
  it('is a labelled section on the glass surface', () => {
    render(
      <GlassCard labelledBy="demo-heading">
        <h2 id="demo-heading">Demo</h2>
      </GlassCard>,
    )

    const section = screen.getByRole('region', { name: 'Demo' })
    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('aria-labelledby', 'demo-heading')
    expect(section.className).toContain('glass-card')
  })

  it('carries the 24px radius, the padding, the white edge and the two-layer shadow', () => {
    render(
      <GlassCard labelledBy="demo-heading">
        <h2 id="demo-heading">Demo</h2>
      </GlassCard>,
    )

    const section = screen.getByRole('region', { name: 'Demo' })
    expect(section.className).toContain('rounded-[24px]')
    expect(section.className).toContain('p-6')
    expect(section.className).toContain('flex-col')
    expect(section.className).toContain('border-[color:rgba(255,255,255,.28)]')
    expect(section.className).toContain('shadow-[0_24px_60px_-24px_rgba(10,0,30,.6),inset_0_1px_0_rgba(255,255,255,.25)]')
  })

  it('merges a caller utility without losing the glass base', () => {
    render(
      <GlassCard labelledBy="demo-heading" className="min-h-[320px]">
        <h2 id="demo-heading">Demo</h2>
      </GlassCard>,
    )

    const section = screen.getByRole('region', { name: 'Demo' })
    expect(section.className).toContain('min-h-[320px]')
    expect(section.className).toContain('glass-card')
    expect(section.className).toContain('p-6')
  })
})
