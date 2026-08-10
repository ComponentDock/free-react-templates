import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Collections } from './Collections'

describe('Collections', () => {
  it('shows the "Discover The Collections" heading', () => {
    render(<Collections />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Discover.*The Collections/ }),
    ).toBeInTheDocument()
  })

  it('renders the three category tiles with their item counts', () => {
    render(<Collections />)

    for (const label of ['Women', 'Men', 'Shoes']) {
      expect(screen.getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }
    expect(screen.getAllByText('25 items')).toHaveLength(3)
  })
})
