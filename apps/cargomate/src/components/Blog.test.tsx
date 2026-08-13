import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with meta rows', () => {
    render(<Blog />)

    expect(screen.getByText('Latest Blog Posts')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Check the latest posts from our blog' }),
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', { name: 'Some statistics that we want to show' }),
    ).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: '13th Mar, 2019' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: '02 Comments' })).toHaveLength(3)
  })
})
