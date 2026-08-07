import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the heading and project cards with titles and categories', () => {
    render(<Works />)

    expect(screen.getByRole('heading', { level: 2, name: 'Featured Works' })).toBeInTheDocument()

    for (const title of ['Lamp', 'Salad', 'Orbit']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    for (const category of ['Web Design', 'Illustration', 'Product Strategy']) {
      expect(screen.getByText(category)).toBeInTheDocument()
    }
  })
})
