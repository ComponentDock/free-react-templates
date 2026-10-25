import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Roster } from './Roster'

describe('Roster', () => {
  it('renders one centred header: loose rust eyebrow over the tight headline', () => {
    render(<Roster />)

    const eyebrow = screen.getByText('The studio')
    const title = screen.getByRole('heading', { level: 1 })

    expect(eyebrow).toHaveClass(
      'text-[13px]',
      'font-bold',
      'uppercase',
      'tracking-[0.12em]',
      'text-ember',
    )
    expect(eyebrow).toHaveClass('m-0')
    expect(title).toHaveTextContent('People behind Northfield Design')
    expect(title.className).toContain('text-[clamp(26px,3.4vw,36px)]')
    expect(title).toHaveClass('font-bold', 'leading-[1.2]', 'tracking-[-0.02em]', 'text-ink')
    expect(title).toHaveClass('mt-2')
  })

  it('keeps the 1200px content container with a 16px gutter and clamp padding', () => {
    const { container } = render(<Roster />)
    const band = container.querySelector('[class*="max-w-[1232px]"]')

    expect(band).toHaveClass('mx-auto', 'px-4')
    expect(band?.className).toContain('py-[clamp(32px,6vw,72px)]')
  })

  it('lays the four cards out with auto-fit minmax(240px,1fr) and a 24px gap', () => {
    const { container } = render(<Roster />)
    const grid = container.querySelector('ul')

    expect(grid?.className).toContain('grid-cols-[repeat(auto-fit,minmax(240px,1fr))]')
    expect(grid).toHaveClass('grid', 'gap-6', 'list-none', 'm-0', 'p-0')
  })

  it('renders the callout gap between header and grid as 32px', () => {
    const { container } = render(<Roster />)
    const header = container.querySelector('header')

    expect(header).toHaveClass('mb-8', 'text-center')
  })

  it('renders four list items, each stretching its card so footers share a baseline', () => {
    const { container } = render(<Roster />)
    const items = container.querySelectorAll('main > div > ul > li')

    expect(items).toHaveLength(4)
    items.forEach((item) => {
      expect(item).toHaveClass('flex')
      expect(item.querySelector('article')).toHaveClass('w-full')
      expect(item.querySelector('article')).toHaveClass('flex-col')
    })
  })
})
