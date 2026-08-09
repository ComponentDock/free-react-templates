import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the section heading and four feature cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { name: 'Our Strength Is Your Smart Beauty' }),
    ).toBeInTheDocument()
    for (const name of ['Best Place', 'Best Equipment', 'Modern Style', 'Expert Staff']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('paragraph').length).toBe(4)
  })
})
