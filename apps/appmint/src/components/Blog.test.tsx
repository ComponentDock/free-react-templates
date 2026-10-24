import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and at least three post cards with titles', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'From Blog' })).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(3)
  })
})
