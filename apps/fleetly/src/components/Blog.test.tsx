import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and four blog cards', () => {
    render(<Blog />)

    expect(screen.getByText('Latest From Our Blog')).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)

    expect(
      screen.getAllByRole('heading', { name: 'Why Lead Generation is Key for Business Growth' }),
    ).toHaveLength(4)
  })

  it('displays dates, likes, and comments for each card', () => {
    render(<Blog />)

    for (const date of ['Mar 15, 2019', 'Mar 14, 2019', 'Mar 13, 2019', 'Mar 12, 2019']) {
      expect(screen.getByText(date)).toBeInTheDocument()
    }

    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })
})
