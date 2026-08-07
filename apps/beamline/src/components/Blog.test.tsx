import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('shows post cards with titles', () => {
    render(<Blog />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(
      screen.getAllByRole('heading', { level: 3, name: /Make Peace With Your Broken Pieces/ }),
    ).toHaveLength(4)
  })
})
