import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { RecentEvents } from './RecentEvents'

describe('RecentEvents', () => {
  it('shows the centered heading Recent Events', () => {
    render(<RecentEvents />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Events' })).toBeInTheDocument()
  })

  it('shows event cards with a photo, title, date/byline and excerpt', () => {
    render(<RecentEvents />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Church Bible Study' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/January 20, 2018 • By Josh Holmes/)).toHaveLength(3)
    for (const article of articles) {
      expect(article.querySelector('img')).toBeInTheDocument()
      expect(article.querySelector('p:last-of-type')).toBeInTheDocument()
    }
  })

  it('advances between cards with arrows and dots', async () => {
    const user = userEvent.setup()
    render(<RecentEvents />)
    const track = document.querySelector('.flex.transition-transform')
    expect(track).toHaveStyle('transform: translateX(-0%)')
    await user.click(screen.getByRole('button', { name: 'Next events' }))
    expect(track).toHaveStyle('transform: translateX(-100%)')
    await user.click(screen.getByRole('button', { name: 'Previous events' }))
    expect(track).toHaveStyle('transform: translateX(-0%)')
    await user.click(screen.getByRole('button', { name: 'Go to event 3' }))
    expect(track).toHaveStyle('transform: translateX(-200%)')
  })
})
