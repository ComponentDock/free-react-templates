import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the Recent Blog heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders at least three post cards', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Young Women Doing Abdominal' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '5 Exercises To Fix Your Posture' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Meal Prep For A Lean Week' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })

  it('shows post meta (date, author, comments)', () => {
    render(<Blog />)

    expect(screen.getAllByText('December 23, 2018').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Admin').length).toBeGreaterThanOrEqual(1)
  })
})
