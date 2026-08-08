import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stories } from './Stories'

describe('Stories', () => {
  it('shows the heading on the dark section', () => {
    render(<Stories />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Real People. Real Hope/ }),
    ).toBeInTheDocument()
  })

  it('shows the three testimonial cards with quotes, authors, meta and avatars', () => {
    render(<Stories />)

    const stories: Array<[string, RegExp, string]> = [
      [
        'The Martinez Family',
        /visited Congregate during a really hard season/,
        'Members since 2019',
      ],
      ['James K.', /welcomed my questions without judgment/, 'Member since 2022'],
      ['Michelle T.', /kids program here is incredible/, 'Member since 2021'],
    ]

    for (const [author, quote, meta] of stories) {
      expect(screen.getByText(quote)).toBeInTheDocument()
      expect(screen.getByText(author)).toBeInTheDocument()
      expect(screen.getByText(meta)).toBeInTheDocument()
      expect(screen.getByAltText(author)).toBeInTheDocument()
    }
  })
})
