import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  categoriesTitle,
  categoryRows,
  instagramPostLabel,
  instagramSidebarCount,
  instagramTitle,
  newsletterEmailPlaceholder,
  newsletterTitle,
  popularPosts,
  popularTitle,
  shareTitle,
  sidebarSearchLabel,
  sidebarSearchPlaceholder,
  subscribeLabel,
} from '../data'

const widgetBoxes = () => document.querySelectorAll('.bg-mist')

describe('Sidebar', () => {
  it('renders the sidebar landmark with six light widget boxes', () => {
    render(<Sidebar />)
    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    expect(widgetBoxes()).toHaveLength(6)
  })

  it('renders the search widget with input and button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('textbox', { name: sidebarSearchPlaceholder })).toHaveAttribute(
      'placeholder',
      sidebarSearchPlaceholder,
    )
    expect(screen.getByRole('button', { name: sidebarSearchLabel })).toBeInTheDocument()
  })

  it('submits the search and newsletter forms without navigating', () => {
    render(<Sidebar />)
    const searchForm = screen
      .getByRole('textbox', { name: sidebarSearchPlaceholder })
      .closest('form') as HTMLFormElement
    fireEvent.submit(searchForm)

    const newsletterForm = screen
      .getByRole('textbox', { name: newsletterEmailPlaceholder })
      .closest('form') as HTMLFormElement
    fireEvent.submit(newsletterForm)

    expect(screen.getByRole('textbox', { name: sidebarSearchPlaceholder })).toBeInTheDocument()
  })

  it('renders the Instagram widget with six square thumbnails', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 3, name: instagramTitle })).toBeInTheDocument()
    const images = Array.from({ length: instagramSidebarCount }, (_, index) =>
      screen.getByRole('img', { name: instagramPostLabel(index) }),
    )
    expect(images).toHaveLength(instagramSidebarCount)
    expect(images[0]).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/rekindle-instagram-1/200/200',
    )
  })

  it('renders the categories widget with five rows and counts', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 3, name: categoriesTitle })).toBeInTheDocument()
    for (const row of categoryRows) {
      expect(screen.getByRole('link', { name: row.name })).toBeInTheDocument()
      expect(screen.getByText(row.count)).toBeInTheDocument()
    }
  })

  it('renders the popular posts widget with four rows', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 3, name: popularTitle })).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.byline)).toBeInTheDocument()
    }
  })

  it('renders the newsletter widget with an email input and subscribe button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 3, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: newsletterEmailPlaceholder })).toHaveAttribute(
      'type',
      'email',
    )
    expect(screen.getByRole('button', { name: subscribeLabel })).toHaveClass('bg-ink')
  })

  it('renders the share widget with four social links', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { level: 3, name: shareTitle })).toBeInTheDocument()
    for (const name of ['Facebook', 'Twitter', 'Pinterest', 'Instagram']) {
      expect(screen.getByRole('link', { name: `Share on ${name}` })).toBeInTheDocument()
    }
  })

  it('places each widget heading inside its light box', () => {
    render(<Sidebar />)
    const box = widgetBoxes()[1] as HTMLElement
    expect(within(box).getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
  })
})
