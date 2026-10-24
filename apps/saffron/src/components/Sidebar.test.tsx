import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  advertisementLabel,
  authorBio,
  authorName,
  authorSignature,
  categoryCards,
  instagramSideSeeds,
  latestPosts,
  newsletterConfirmation,
  newsletterHeading,
  newsletterPlaceholder,
  sideTitles,
  tags,
} from '../data'

describe('Sidebar', () => {
  it('renders the about-author card with portrait, socials, bio and signature', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 2, name: authorName })).toBeInTheDocument()
    expect(screen.getByText(authorBio)).toBeInTheDocument()
    expect(screen.getByText(authorSignature)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'READ MORE' })).toHaveAttribute('href', '#blog')
    const card = screen.getByRole('region', { name: 'About the author' })
    expect(within(card).getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('renders a labelled sidebar search field', () => {
    render(<Sidebar />)
    const region = screen.getByRole('region', { name: 'Search articles' })
    const input = within(region).getByRole('searchbox', { name: 'Search articles' })
    expect(input).toHaveAttribute('type', 'search')
    expect(input).toHaveAttribute('placeholder', 'Search')
    expect(within(region).getByRole('button', { name: 'Search articles' })).toBeInTheDocument()
    const form = input.closest('form')!
    fireEvent.submit(form)
    expect(input).toBeInTheDocument()
  })

  it('submits the newsletter form and confirms without reloading', () => {
    render(<Sidebar />)
    expect(
      screen.getByRole('heading', { level: 2, name: newsletterHeading }),
    ).toBeInTheDocument()
    expect(screen.queryByText(newsletterConfirmation)).not.toBeInTheDocument()

    const input = screen.getByPlaceholderText(newsletterPlaceholder)
    fireEvent.change(input, { target: { value: 'reader@saffron.blog' } })
    fireEvent.submit(input.closest('form')!)

    expect(screen.getByText(newsletterConfirmation)).toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders four category cards with orange name bars', () => {
    render(<Sidebar />)
    expect(
      screen.getByRole('heading', { level: 2, name: sideTitles.categories }),
    ).toBeInTheDocument()
    for (const card of categoryCards) {
      const link = screen.getByRole('link', { name: card.name })
      expect(within(link).getByText(card.name)).toBeInTheDocument()
    }
  })

  it('renders the four latest posts with thumbnails and dates', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 2, name: sideTitles.latest })).toBeInTheDocument()
    const region = screen.getByRole('region', { name: sideTitles.latest })
    for (const item of latestPosts) {
      expect(
        within(region).getByRole('heading', { level: 3, name: item.title }),
      ).toBeInTheDocument()
      expect(within(region).getAllByText(item.date).length).toBeGreaterThan(0)
    }
    expect(region.querySelectorAll('img')).toHaveLength(latestPosts.length)
  })

  it('renders the advertisement block with a discover overlay', () => {
    render(<Sidebar />)
    expect(
      screen.getByRole('heading', { level: 2, name: sideTitles.advertisement }),
    ).toBeInTheDocument()
    const region = screen.getByRole('region', { name: sideTitles.advertisement })
    expect(within(region).getByText(advertisementLabel)).toBeInTheDocument()
  })

  it('renders a six-image instagram grid and seven tag pills', () => {
    render(<Sidebar />)
    const grid = screen.getByRole('region', { name: sideTitles.instagram })
    expect(grid.querySelectorAll('img')).toHaveLength(instagramSideSeeds.length)

    expect(screen.getByRole('heading', { level: 2, name: sideTitles.tags })).toBeInTheDocument()
    for (const tag of tags) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
