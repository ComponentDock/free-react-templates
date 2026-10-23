import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three article cards with meta and links', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', {
        level: 3,
        name: 'Create Beautiful Website In Less Than An Hour',
      }),
    ).toHaveLength(3)

    expect(screen.getByText(/Ham Brook/)).toBeInTheDocument()
    expect(screen.getAllByText(/James Phelps/)).toHaveLength(2)
    expect(screen.getAllByText(/Jan 18, 2019/)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Continue Reading...' })).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
