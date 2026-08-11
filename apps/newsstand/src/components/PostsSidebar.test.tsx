import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { PostsSidebar } from './PostsSidebar'
import {
  adImgAlt,
  adLabel,
  categoryCounts,
  featuredHeading,
  featuredPosts,
  mostReadHeading,
  sidebarLabel,
  tags,
} from '../data'

describe('PostsSidebar', () => {
  it('renders the Featured Posts heading, four cards and the ad box', () => {
    render(<PostsSidebar />)
    expect(screen.getByRole('heading', { level: 2, name: featuredHeading })).toBeInTheDocument()
    for (const post of featuredPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getByText(adLabel)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: adImgAlt })).toBeInTheDocument()
  })

  it('renders the sidebar widgets: Most Read, Categories with counts and Tags pills', () => {
    render(<PostsSidebar />)
    const sidebar = screen.getByRole('complementary', { name: sidebarLabel })
    expect(within(sidebar).getByRole('heading', { name: mostReadHeading })).toBeInTheDocument()
    for (const cat of categoryCounts) {
      expect(
        within(sidebar).getByRole('link', { name: new RegExp(`${cat.name}\\s*${cat.count}`) }),
      ).toBeInTheDocument()
    }
    for (const tag of tags) {
      expect(within(sidebar).getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
