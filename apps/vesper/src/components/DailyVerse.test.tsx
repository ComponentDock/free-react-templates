import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DailyVerse } from './DailyVerse'

describe('DailyVerse', () => {
  it('renders the photo band with the verse and citation', () => {
    render(<DailyVerse />)

    const band = screen.getByRole('region', { name: 'Daily verse' })
    expect(band).toBeInTheDocument()

    expect(screen.getByText('Jesus Christ Said:')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /For God so loved the world/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/John 3:16 KJV/)).toBeInTheDocument()
  })
})
