import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { latestNews, ranking } from '../data'
import { LatestNewsSection } from './LatestNewsSection'

describe('LatestNewsSection', () => {
  it('renders the section title, filter pills and five news cards', () => {
    render(<LatestNewsSection />)
    expect(screen.getByRole('heading', { level: 3, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByRole('article')).toHaveLength(latestNews.length)
  })

  it('filters the news list when a pill is chosen', async () => {
    const user = userEvent.setup()
    render(<LatestNewsSection />)

    await user.click(screen.getByRole('button', { name: 'Tennis' }))
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Tennis' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.queryByText(latestNews[0].title)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('article')).toHaveLength(latestNews.length)
  })

  it('renders news cards with tags, meta icons and excerpts', () => {
    render(<LatestNewsSection />)
    for (const item of latestNews) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.excerpt)).toBeInTheDocument()
    }
  })

  it('renders the Club Ranking table in the sidebar', () => {
    render(<LatestNewsSection />)
    expect(screen.getByRole('heading', { level: 4, name: 'Club Ranking' })).toBeInTheDocument()
    const table = screen.getByRole('table')
    const headers = within(table)
      .getAllByRole('columnheader')
      .map((cell) => cell.textContent)
    expect(headers).toEqual(['Pos', 'Team', 'P', 'W', 'L', 'PTS'])
    expect(within(table).getAllByRole('row')).toHaveLength(ranking.length + 1)
    expect(within(table).getByText(ranking[0].team)).toBeInTheDocument()
  })
})
