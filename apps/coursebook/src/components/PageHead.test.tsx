import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHead } from './PageHead'

describe('PageHead', () => {
  it('prints one fluid h1 and wraps it in the spaced-down head row', () => {
    render(<PageHead />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)

    const heading = headings[0]!
    expect(heading.textContent).toBe('Continue learning')
    expect(heading.className).toContain('text-[clamp(26px,3.4vw,34px)]')
    expect(heading.className).toContain('font-bold')
    expect(heading.className).toContain('tracking-[-.02em]')
    expect(heading.className).not.toContain('font-extrabold')

    const head = heading.parentElement!
    expect(head.tagName).toBe('HEADER')
    expect(head.className).toContain('mb-6')
    expect(head.className).toContain('flex-wrap')
    expect(head.className).toContain('items-center')
    expect(head.className).toContain('justify-between')
    expect(head.className).toContain('gap-3')
  })

  it('pairs the heading with an asymmetric warm streak pill', () => {
    render(<PageHead />)

    const pill = screen.getByText('6-day streak')
    expect(pill.tagName).toBe('P')
    expect(pill.className).toContain('rounded-full')
    expect(pill.className).toContain('bg-[#fff1e6]')
    expect(pill.className).toContain('text-[#9a3412]')
    expect(pill.className).toContain('text-sm')
    expect(pill.className).toContain('font-semibold')
    expect(pill.className).toContain('gap-1.5')
    expect(pill.className).toContain('py-[7px]')
    expect(pill.className).toContain('pr-[14px]')
    expect(pill.className).toContain('pl-[10px]')
  })

  it('puts a decorative flame glyph inside the pill', () => {
    render(<PageHead />)

    const pill = screen.getByText('6-day streak')
    const flame = pill.querySelector('svg')!
    expect(flame.getAttribute('aria-hidden')).toBe('true')
    expect(flame.getAttribute('width')).toBe('18')
    expect(flame.getAttribute('height')).toBe('18')
    expect(flame.getAttribute('class')).toContain('text-[#f97316]')
  })
})
