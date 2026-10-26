import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHead } from './PageHead'

describe('PageHead', () => {
  it('greets the reader with the one h1', () => {
    render(<PageHead />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]!.textContent).toBe('Good evening, Lina')
  })

  it('scales the title on a clamp with the reference tracking and leading', () => {
    render(<PageHead />)

    const title = screen.getByRole('heading', { level: 1 })
    expect(title.className).toContain('text-[clamp(28px,3.6vw,40px)]')
    expect(title.className).toContain('tracking-[-.03em]')
    expect(title.className).toContain('leading-[normal]')
    expect(title.className).toContain('font-bold')
  })

  it('puts one muted line 6px under it, inside a 1140 container', () => {
    render(<PageHead />)

    const header = screen.getByRole('banner')
    expect(header.className).toContain('max-w-[1140px]')
    expect(header.className).toContain('mb-8')
    const sub = screen.getByText('Here is where your money stands this week.')
    expect(sub.className).toContain('text-violet-100')
    expect(sub.className).toContain('mt-[6px]')
  })
})
