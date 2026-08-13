import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the eyebrow, heading, and three blog cards with meta', () => {
    render(<Blog />)

    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We Have True Story' }),
    ).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)

    expect(screen.getByText('Art, design')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Life style')).toBeInTheDocument()
    expect(screen.getAllByText('March 30, 2019')).toHaveLength(3)

    expect(screen.getByText('4 Comments')).toBeInTheDocument()
    expect(screen.getByText('10 View')).toBeInTheDocument()
  })
})
