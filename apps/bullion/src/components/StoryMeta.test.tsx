import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StoryMeta } from './StoryMeta'

describe('StoryMeta', () => {
  it('renders byline, date, views and comments with accent icons', () => {
    render(<StoryMeta author="Olivia Capzallo" date="Jan 25, 2018" views="30,190" comments="30" />)

    const author = screen.getByText('Olivia Capzallo')
    expect(author).toHaveClass('text-accent')
    expect(author.closest('li')).toHaveTextContent('by Olivia Capzallo')
    expect(screen.getByText('Jan 25, 2018')).toBeInTheDocument()
    expect(screen.getByText('30,190')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('uses a bold ink author for cards and white meta on light captions', () => {
    render(
      <StoryMeta
        author="Danile Palmer"
        date="Jan 25, 2018"
        views="12,480"
        comments="18"
        accentAuthor={false}
        light
      />,
    )

    const author = screen.getByText('Danile Palmer')
    expect(author).toHaveClass('text-white')
    expect(author.closest('ul')).toHaveClass('text-white/80')
  })
})
