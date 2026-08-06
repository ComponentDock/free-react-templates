import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and the three feature cards with titles and blurbs', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Everything you need to launch/ }),
    ).toBeInTheDocument()

    for (const title of ['Lightning Fast', 'Team Ready', 'Grows With You']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
