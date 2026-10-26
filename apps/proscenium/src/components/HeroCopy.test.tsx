import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroCopy } from './HeroCopy'
import { ACTIONS, ANNOUNCEMENT, HEADLINE, HERO_ID, TRUST_POINTS } from '../data/hero'

describe('HeroCopy', () => {
  it('renders the announcement pill with its tag and label', () => {
    render(<HeroCopy />)

    const pill = screen.getByRole('link', { name: /Rolling forecasts are live/ })

    expect(screen.getByText(ANNOUNCEMENT.tag)).toBeInTheDocument()
    expect(pill).toHaveAttribute('href', ANNOUNCEMENT.href)
  })

  it('keeps the gradient accent as an inline span inside the h1', () => {
    render(<HeroCopy />)
    const heading = screen.getByRole('heading', { level: 1 })
    const accent = heading.querySelector('.hero-accent')

    expect(heading).toHaveAttribute('id', `${HERO_ID}-title`)
    expect(heading.textContent).toBe(`${HEADLINE.lead}${HEADLINE.accent}`)
    expect(accent?.tagName).toBe('SPAN')
    expect(accent?.textContent).toBe(HEADLINE.accent)
    expect(heading.querySelectorAll('h2, div, p')).toHaveLength(0)
  })

  it('renders the sub copy as a paragraph', () => {
    render(<HeroCopy />)

    expect(screen.getByText(/reconciles bank feeds/)).toHaveClass('hero-sub')
  })

  it('renders a 50 px primary action and a ghost action with a play chip', () => {
    render(<HeroCopy />)
    const primary = screen.getByRole('link', { name: ACTIONS.primary.label })
    const ghost = screen.getByRole('link', { name: ACTIONS.demo.label })

    expect(primary).toHaveClass('min-h-[50px]', 'rounded-xl', 'bg-accent')
    expect(primary).toHaveAttribute('href', ACTIONS.primary.href)
    expect(ghost).toHaveAttribute('href', ACTIONS.demo.href)
    expect(ghost).toHaveClass('min-h-[50px]', 'border-line', 'bg-surface')

    const play = ghost.querySelector('span[aria-hidden="true"]')
    expect(play).toHaveClass('h-7', 'w-7', 'rounded-full')
  })

  it('renders three trust points, each with a check icon', () => {
    render(<HeroCopy />)
    const items = screen.getAllByRole('listitem')

    expect(items).toHaveLength(TRUST_POINTS.length)
    for (const [index, point] of TRUST_POINTS.entries()) {
      expect(items[index]).toHaveTextContent(point)
      expect(items[index]?.querySelector('svg')).not.toBeNull()
    }
  })

  it('makes both hero actions full width on phones', () => {
    render(<HeroCopy />)
    const actions = screen.getByRole('link', { name: ACTIONS.primary.label }).parentElement

    expect(actions?.className).toContain('heroSm:[&>*]:[flex:1_1_100%]')
  })
})
