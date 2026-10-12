import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ReasonGrid } from './ReasonGrid'

const TITLES = [
  'Current-generation hardware',
  'Four data centres',
  'Cached to the edge',
  'Uptime we publish',
  'Engineers on support',
  'Reviews we did not buy',
]

describe('ReasonGrid', () => {
  it('renders the centred headline and six focusable reason cards', () => {
    render(<ReasonGrid />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Why teams keep their racks here',
    )
    for (const title of TITLES) {
      const card = screen.getByRole('link', { name: new RegExp(title) })
      expect(card).toHaveAttribute('href', '#contact')
    }
  })

  it('gives every card its border, padding, bracket artwork and lime glyph', () => {
    const { container } = render(<ReasonGrid />)

    const cards = Array.from(container.querySelectorAll('a'))
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      expect(card).toHaveClass(
        'group',
        'border-2',
        'border-line-strong',
        'p-[30px]',
        'focus-visible:ring-lime',
      )
    }

    const bracket = container.querySelectorAll('svg[viewBox="0 0 59 68"]')
    expect(bracket).toHaveLength(6)
    expect(bracket[0]?.parentElement).toHaveClass('h-[68px]', 'w-[59px]', 'text-lime')
  })

  it('floods the whole surface with lime and whitens the content on hover and focus', () => {
    const { container } = render(<ReasonGrid />)

    const wash = container.querySelector('a > span[aria-hidden="true"]')
    expect(wash).toHaveClass(
      'bg-lime',
      'opacity-0',
      'scale-[1.07]',
      'group-hover:opacity-100',
      'group-focus-visible:scale-100',
    )

    const body = container.querySelector('a > span.relative')
    expect(body).toHaveClass('z-[2]')
    const title = screen.getByText(TITLES[0]!)
    expect(title).toHaveClass('text-copy', 'group-hover:text-white', 'group-focus-visible:text-white')
    expect(screen.getByText(/Every rack runs current-generation silicon/)).toHaveClass(
      'text-muted',
      'group-hover:text-white',
    )
  })
})
