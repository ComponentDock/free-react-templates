import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { about, categories, popularPosts, tags } from '../data'

describe('Sidebar', () => {
  it('renders the About widget with avatar, name, bio and social links', () => {
    render(<Sidebar />)
    const aside = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(within(aside).getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(within(aside).getByAltText(about.name)).toBeInTheDocument()
    expect(within(aside).getByRole('heading', { name: about.name })).toBeInTheDocument()
    expect(within(aside).getByText(about.bio)).toBeInTheDocument()
    expect(within(aside).getByRole('list', { name: 'Author social links' })).toBeInTheDocument()
  })

  it('renders the Popular Posts widget with every row', () => {
    render(<Sidebar />)
    const aside = screen.getByRole('complementary', { name: 'Sidebar' })
    const widget = aside.querySelector('section:nth-of-type(2)')!
    expect(
      within(widget as HTMLElement).getByRole('heading', { name: 'Popular Posts' }),
    ).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(within(aside).getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the Post Categories widget with counts', () => {
    render(<Sidebar />)
    const aside = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(within(aside).getByRole('heading', { name: 'Post Categories' })).toBeInTheDocument()
    for (const category of categories) {
      expect(within(aside).getByText(category.name)).toBeInTheDocument()
      expect(within(aside).getByText(category.count)).toBeInTheDocument()
    }
  })

  it('renders the Post Tags widget with all tags', () => {
    render(<Sidebar />)
    const aside = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(within(aside).getByRole('heading', { name: 'Post Tags' })).toBeInTheDocument()
    for (const tag of tags) {
      expect(within(aside).getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
