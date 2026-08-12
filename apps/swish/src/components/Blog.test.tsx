import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders four post cards with date, title, tag and comments', () => {
    render(<Blog />)

    expect(screen.getByText('From The Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News & Update' })).toBeInTheDocument()
    expect(screen.getAllByText('12 march, 2019').length).toBe(4)
    expect(
      screen.getAllByRole('heading', {
        name: 'Dictumst iaculis mauris egestas Nibh netus mauris suscipit.',
      }).length,
    ).toBe(4)
    expect(screen.getAllByText('Sports news').length).toBe(4)
    expect(screen.getAllByText('2 Comments').length).toBe(4)
  })
})
