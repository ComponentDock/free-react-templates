import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders the follow heading and a row of square photos', () => {
    render(<Instagram />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "Don't forget to follow us on Instagram @habitat",
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
