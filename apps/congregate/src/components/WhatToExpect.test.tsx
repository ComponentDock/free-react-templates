import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhatToExpect } from './WhatToExpect'

describe('WhatToExpect', () => {
  it('shows the eyebrow, heading and intro', () => {
    render(<WhatToExpect />)

    expect(screen.getByText('What to Expect')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /You're Invited/ })).toBeInTheDocument()
    expect(
      screen.getByText(/At Congregate, we believe church should be the best hour/),
    ).toBeInTheDocument()
  })

  it('shows the four feature cards with titles and blurbs', () => {
    render(<WhatToExpect />)

    const cards: Array<[string, RegExp]> = [
      ['Welcoming Community', /greeted with a smile/],
      ['Engaging Worship', /Modern music that inspires/],
      ['Relevant Teaching', /Messages that speak to real life/],
      ['Great Kids Programs', /kids learn about God's love/],
    ]

    for (const [title, blurb] of cards) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByText(blurb)).toBeInTheDocument()
    }
  })
})
