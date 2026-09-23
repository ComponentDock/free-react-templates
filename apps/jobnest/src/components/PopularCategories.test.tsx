import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularCategories } from './PopularCategories'

describe('PopularCategories', () => {
  it('renders the heading and 8 category cards', () => {
    render(<PopularCategories />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Categories' }),
    ).toBeInTheDocument()

    const categoryNames = [
      'Design & Creative',
      'Marketing',
      'Administration',
      'Customer Service',
      'Finance',
      'Teaching',
      'Human Resources',
      'Healthcare',
    ]

    for (const name of categoryNames) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/Available position/)).toHaveLength(8)
  })
})
