import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecipeHead } from './RecipeHead'

describe('RecipeHead', () => {
  it('stacks the eyebrow above the one serif headline', () => {
    render(<RecipeHead />)

    const header = screen.getByRole('banner')
    expect(header.className).toContain('mb-24')
    expect(header.className).toContain('text-center')
    expect([...header.children].map((child) => child.tagName)).toEqual(['P', 'H1'])

    const eyebrow = screen.getByText("This week's menu")
    expect(eyebrow.tagName).toBe('P')
    expect(eyebrow.className).toContain('text-[14px]')
    expect(eyebrow.className).toContain('leading-4')
    expect(eyebrow.className).toContain('font-bold')
    expect(eyebrow.className).toContain('tracking-[.12em]')
    expect(eyebrow.className).toContain('text-eyebrow')
    expect(eyebrow.className).toContain('uppercase')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Weeknight dinners, sorted')
    expect(heading.className).toContain('mt-2')
    expect(heading.className).toContain('font-display')
    expect(heading.className).toContain('text-[clamp(32px,4.4vw,50px)]')
    expect(heading.className).toContain('leading-[1.05]')
    expect(heading.className).toContain('tracking-[-.01em]')
    expect(heading.className).toContain('font-normal')
  })

  it('exposes one h1 and no other heading', () => {
    render(<RecipeHead />)

    expect(screen.getAllByRole('heading')).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Weeknight dinners, sorted')
  })

  it('draws no rule or divider between the two lines', () => {
    render(<RecipeHead />)

    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('border')
    expect(header.className).not.toContain('divide')
  })
})
