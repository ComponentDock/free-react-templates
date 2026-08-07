import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and the three feature cards with Read More links', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Discover the features' }),
    ).toBeInTheDocument()

    for (const title of ['Brand Identity', 'Online Marketing', 'Social Media']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(3)
  })
})
