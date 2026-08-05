import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the heading and three brand columns', () => {
    render(<Brands />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Leading brands trust Bold for good' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/used by fast-growing teams who value clean design/i),
    ).toBeInTheDocument()

    for (const title of ['Fast setup', 'Modern design', 'Reliable support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
