import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders a heading and at least three feature cards with titles and blurbs', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'The Features' })).toBeInTheDocument()

    const cards: Array<[string, RegExp]> = [
      ['Powerful Apps', /tools for every part of your workflow/i],
      ['Strategic Partners', /keep everything in one place/i],
      ['Business in Mind', /clarity, control, and room to grow/i],
    ]

    for (const [title, blurb] of cards) {
      const card = screen.getByRole('heading', { name: title }).closest('article')
      expect(card).not.toBeNull()
      expect(within(card as HTMLElement).getByText(blurb)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(3)
  })
})
