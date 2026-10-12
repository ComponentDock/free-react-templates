import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Details } from './Details'
import { DETAILS, DETAILS_TITLE, SECTION_IDS } from '../lib/site'

const cards = () => screen.getAllByRole('listitem')

describe('Details', () => {
  it('hangs four cards off a central spine, alternating sides', () => {
    const { container } = render(<Details />)

    expect(screen.getByRole('heading', { level: 2, name: DETAILS_TITLE })).toHaveClass('text-ink')
    expect(cards()).toHaveLength(4)
    expect(cards().map((card) => card.querySelector('h4')?.textContent)).toEqual(
      DETAILS.map((detail) => detail.title),
    )

    expect(cards()[0]).toHaveClass('float-right', 'text-left', 'mt-[-40px]', 'w-1/2')
    expect(cards()[1]).toHaveClass('float-left', 'text-right')
    expect(cards()[1]).toHaveClass('max-md:float-none', 'max-md:text-left')

    const spine = container.querySelector('.bg-spine') as HTMLElement

    expect(spine).toHaveClass('left-1/2', '-ml-px', 'w-px', 'bg-spine')
    expect(container.querySelector('ol')).toBeInTheDocument()
    expect(container.querySelector(`section#${SECTION_IDS.details}`)).toBeInTheDocument()
  })

  it('gives every card its own dot, its own 56px glyph and its own blurb', () => {
    render(<Details />)

    expect(cards()[0]?.querySelector('span[aria-hidden="true"]')).toHaveClass('-left-[9px]', 'rounded-[20px]')
    expect(cards()[1]?.querySelector('span[aria-hidden="true"]')).toHaveClass('-right-[9px]')

    const glyphs = cards().map((card) => card.querySelector('svg'))

    expect(glyphs).toHaveLength(4)
    expect(glyphs.every((glyph) => glyph?.getAttribute('aria-hidden') === 'true')).toBe(true)
    expect(cards()[0]?.querySelector('svg')?.getAttribute('class')).toContain('h-[56px]')
    expect(cards().map((card) => card.querySelector('p')?.textContent)).toEqual(
      DETAILS.map((detail) => detail.body),
    )
  })
})
