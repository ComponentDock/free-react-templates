import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Widgets } from './Widgets'
import {
  blogCard,
  mostLiked,
  mostLikedHeading,
  readmoreLabel,
  topRated,
  topRatedHeading,
} from '../data'

describe('Widgets', () => {
  it('renders the two recipe lists with their entries', () => {
    render(<Widgets />)

    expect(screen.getByRole('heading', { name: topRatedHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: mostLikedHeading })).toBeInTheDocument()

    for (const entry of [...topRated, ...mostLiked]) {
      expect(screen.getAllByText(entry.date).length).toBeGreaterThan(0)
      expect(screen.getByText(entry.name)).toBeInTheDocument()
    }
  })

  it('renders the blog card with date badge, meta and readmore arrow', () => {
    render(<Widgets />)

    expect(screen.getByText(blogCard.title)).toBeInTheDocument()
    expect(screen.getByText(blogCard.author)).toBeInTheDocument()
    expect(screen.getByText(blogCard.excerpt)).toBeInTheDocument()
    expect(screen.getByText(blogCard.date)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: blogCard.comments })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: readmoreLabel })).toBeInTheDocument()
  })
})
