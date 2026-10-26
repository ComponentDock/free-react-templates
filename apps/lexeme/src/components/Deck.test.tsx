import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Deck } from './Deck'

describe('Deck', () => {
  it('renders one list item per card, in deck order', () => {
    const { container } = render(<Deck />)

    const items = container.querySelectorAll(':scope > ul > li')
    expect(items).toHaveLength(4)
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
    expect(
      screen.getAllByRole('button').map((button) => button.getAttribute('aria-pressed')),
    ).toEqual(['false', 'false', 'false', 'false'])
  })

  it('counts the four cards against the deck size', () => {
    render(<Deck />)

    expect(screen.getByText('Card 1 of 40')).toBeInTheDocument()
    expect(screen.getByText('Card 4 of 40')).toBeInTheDocument()
  })

  it('derives its columns from an auto-fit grid, not from breakpoint classes', () => {
    const { container } = render(<Deck />)

    const list = container.querySelector('ul') as HTMLElement
    expect(list.className).toContain('grid-cols-[repeat(auto-fit,minmax(240px,1fr))]')
    expect(list.className).toContain('gap-5')
    expect(list.className).toContain('list-none')
    expect(list.className).not.toMatch(/\b(sm|md|lg|xl):grid-cols/)
  })

  it('gives every card its own face and ink pair', () => {
    const { container } = render(<Deck />)

    const faces = Array.from(container.querySelectorAll('li')).map((item) =>
      item.style.getPropertyValue('--face'),
    )
    expect(faces).toEqual(['#ff6b4a', '#5b5bf0', '#ffc53d', '#14b8a6'])
  })

  it('adds no links, images or inputs — four buttons are the whole page', () => {
    const { container } = render(<Deck />)

    expect(container.querySelectorAll('a, img, input, select, textarea, form')).toHaveLength(0)
    expect(screen.getAllByRole('button')).toHaveLength(4)
  })
})
