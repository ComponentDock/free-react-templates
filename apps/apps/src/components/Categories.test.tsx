import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading and the three category cards', () => {
    render(<Categories />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest News from all categories' }),
    ).toBeInTheDocument()
    for (const title of ['Maintenance', 'Residental Service', 'Commercial Service']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
