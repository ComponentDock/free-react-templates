import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders four blog cards with dates, titles and read-more links', () => {
    render(<BlogPosts />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Vokalia and Consonantia, there live the blind texts.',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('May 14, 2020')).toHaveLength(4)
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(
      screen.getAllByRole('link', { name: 'Far far away, behind the word mountains' }),
    ).toHaveLength(4)
    expect(
      screen.getAllByRole('link', { name: 'Far far away, behind the word mountains cover image' }),
    ).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(4)
    expect(screen.getAllByText('Read More')).toHaveLength(4)
  })
})
