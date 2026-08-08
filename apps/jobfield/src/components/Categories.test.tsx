import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the heading and eight categories with open-position counts', () => {
    render(<Categories />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Explore by Category' }),
    ).toBeInTheDocument()

    const expected = [
      ['Technology', '840 open positions'],
      ['Design', '320 open positions'],
      ['Marketing', '275 open positions'],
      ['Finance', '190 open positions'],
      ['Healthcare', '210 open positions'],
      ['Education', '165 open positions'],
      ['Sales', '230 open positions'],
      ['Engineering', '310 open positions'],
    ] as const

    for (const [name, count] of expected) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByText(count)).toBeInTheDocument()
    }
  })

  it('gives every category card a distinct hue icon tile', () => {
    render(<Categories />)

    const tiles = screen
      .getAllByRole('link')
      .filter((link) => link.querySelector('h3'))
      .map((link) => link.querySelector('span'))
      .filter((span) => span !== null)

    expect(tiles).toHaveLength(8)
    const hues = new Set(
      tiles.map(
        (tile) =>
          tile!.className.match(/bg-(blue|pink|orange|accent|red|purple|yellow|teal)-100/)![1],
      ),
    )
    expect(hues.size).toBe(8)
  })

  it('links every category card to the jobs section', () => {
    render(<Categories />)

    const cards = screen.getAllByRole('link').filter((link) => link.querySelector('h3'))
    for (const card of cards) {
      expect(card).toHaveAttribute('href', '#jobs')
    }
  })
})
