import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the editorial headline, pull quote and body copy', () => {
    render(<Intro />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Separated they live in Bookmarksgrove right at the coast of the Semantics/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
    expect(screen.getAllByText(/A small river named Duden/).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('paragraph')).toHaveLength(4)
  })

  it('renders the caption card', () => {
    render(<Intro />)

    expect(screen.getByRole('heading', { level: 3, name: 'We love minimal' })).toBeInTheDocument()
    expect(screen.getByText(/It is a paradisematic country/)).toBeInTheDocument()
  })
})
