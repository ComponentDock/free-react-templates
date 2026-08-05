import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three article cards with meta and links', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Beautiful Place for your Great Journey' }),
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', {
        level: 3,
        name: 'Beautiful Place for your Great Journey',
      }),
    ).toHaveLength(3)

    expect(screen.getAllByText(/Admin/)).toHaveLength(3)
    expect(screen.getAllByText(/Feb 01, 2017/)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
