import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
  bioName,
  bioText,
  categories,
  categoriesHeading,
  popularHeading,
  postDate,
  readBioLabel,
  sidebarSearchPlaceholder,
  tags,
  tagsHeading,
} from '../data'

describe('Sidebar', () => {
  it('renders the search box with the reference placeholder', () => {
    render(<Sidebar />)
    expect(screen.getByPlaceholderText(sidebarSearchPlaceholder)).toHaveAttribute(
      'aria-label',
      'Search the blog',
    )
  })

  it('renders the author bio card', () => {
    render(<Sidebar />)
    expect(screen.getByRole('img', { name: bioName })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: bioName })).toBeInTheDocument()
    expect(screen.getByText(bioText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: readBioLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders the popular posts with titles and dates', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: popularHeading })).toBeInTheDocument()
    expect(screen.getAllByText(postDate).length).toBeGreaterThanOrEqual(3)
  })

  it('renders the categories with their counts', () => {
    render(<Sidebar />)
    const categoriesRegion = screen.getByRole('region', { name: categoriesHeading })
    expect(screen.getByRole('heading', { name: categoriesHeading })).toBeInTheDocument()
    categories.forEach((category) => {
      expect(within(categoriesRegion).getByText(category.name)).toBeInTheDocument()
      expect(within(categoriesRegion).getByText(String(category.count))).toBeInTheDocument()
    })
  })

  it('renders the tag cloud', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: tagsHeading })).toBeInTheDocument()
    tags.forEach((tag) => {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    })
  })
})
