import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog cards with read-more links', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Read the Latest Blog' }),
    ).toBeInTheDocument()

    for (const title of [
      'A Message of Hope for Our Community',
      'Finding Faith in Daily Life',
      'The Power of Gathering Together',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
