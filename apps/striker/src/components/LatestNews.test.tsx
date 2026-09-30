import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { news } from '../data'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the red-bar heading and three photo cards', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(news.length)
    for (const item of news) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
  })

  it('hides the caption overlay until the card is hovered', async () => {
    const user = userEvent.setup()
    render(<LatestNews />)
    const firstCard = screen.getAllByRole('article')[0]!
    const title = screen.getByText(news[0].title)
    const overlay = title.parentElement!.parentElement!

    expect(overlay).toHaveClass('opacity-0')
    expect(overlay).toHaveClass('group-hover:opacity-100')

    await user.hover(firstCard)

    // reveal is CSS-driven; the caption content (title + author row) is present
    expect(overlay).toHaveClass('group-hover:opacity-100')
    expect(within(firstCard).getByText(news[0].author.name)).toBeInTheDocument()
    expect(within(firstCard).getByText(news[0].date)).toBeInTheDocument()
  })
})
