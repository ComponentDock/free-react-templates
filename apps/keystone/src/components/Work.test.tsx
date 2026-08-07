import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Work } from './Work'

describe('Work', () => {
  it('renders the section heading', () => {
    render(<Work />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Best Recent Popular Work' }),
    ).toBeInTheDocument()
  })

  it('shows the photo grid', () => {
    render(<Work />)

    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(4)
  })

  it('shows the project cards with locations', () => {
    render(<Work />)

    for (const title of ['Downside Low House', 'Top Commercial Building', 'Big Building Concept']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Melbourne, Australia/i).length).toBe(3)
  })
})
