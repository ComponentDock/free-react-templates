import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three article cards with meta, excerpt, and links', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest Posts From Our Blog' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Addiction When Gambling Becomes A Problem',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/By Mark Wiens/).length).toBe(3)
    expect(screen.getAllByText(/25 June, 2018/).length).toBe(3)
    expect(screen.getAllByRole('link', { name: /Read more/ }).length).toBe(3)
  })
})
