import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LogoCloud } from './LogoCloud'
import { LOGO_TITLE, LOGOS_ID, WORDMARKS } from '../data/hero'

describe('LogoCloud', () => {
  it('is a second section labelled by its h2 kicker', () => {
    const { container } = render(<LogoCloud />)
    const section = container.querySelector('section')!
    const heading = screen.getByRole('heading', { level: 2 })

    expect(section).toHaveAttribute('id', LOGOS_ID)
    expect(section).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading).toHaveTextContent(LOGO_TITLE)
  })

  it('renders six wordmarks, each with its own decorative mark', () => {
    const { container } = render(<LogoCloud />)
    const tiles = container.querySelectorAll('.ag-brand')

    expect(tiles).toHaveLength(WORDMARKS.length)
    for (const tile of tiles) {
      const svg = tile.querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    }
    for (const wordmark of WORDMARKS) {
      expect(screen.getByText(wordmark.name)).toBeInTheDocument()
    }
  })

  it('keeps the six treatments distinct instead of one weight', () => {
    const { container } = render(<LogoCloud />)
    const classes = WORDMARKS.map((wordmark) => wordmark.className)

    expect(new Set(classes).size).toBe(WORDMARKS.length)
    for (const className of classes) {
      expect(container.querySelector(`.${className}`)).not.toBeNull()
    }
    expect(container.querySelector('.ag-brand--pine')).not.toBeNull()
  })
})
