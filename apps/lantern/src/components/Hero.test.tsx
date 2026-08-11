import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { continueReadingLabel, heroPost, hotNews, hotNewsTitle } from '../data'

describe('Hero', () => {
  it('renders the featured article with category tag, headline and Continue Reading button', () => {
    render(<Hero />)
    const region = screen.getByRole('region', { name: 'Featured post' })
    expect(within(region).getAllByText(heroPost.category).length).toBeGreaterThanOrEqual(1)
    expect(
      within(region).getByRole('heading', { level: 1, name: heroPost.title }),
    ).toBeInTheDocument()
    expect(within(region).getByRole('link', { name: continueReadingLabel })).toHaveAttribute(
      'href',
      '#main',
    )
  })

  it('renders the HOT NEWS carousel with at least four white mini-cards', () => {
    render(<Hero />)
    const region = screen.getByRole('region', { name: 'Featured post' })
    expect(within(region).getByRole('heading', { name: hotNewsTitle })).toBeInTheDocument()
    for (const item of hotNews) {
      expect(within(region).getByRole('link', { name: new RegExp(item.title) })).toBeInTheDocument()
      expect(within(region).getByText(String(item.likes))).toBeInTheDocument()
      expect(within(region).getByText(String(item.comments))).toBeInTheDocument()
    }
    expect(hotNews.length).toBeGreaterThanOrEqual(4)
  })
})
