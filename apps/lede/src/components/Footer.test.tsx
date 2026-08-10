import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  brandName,
  copyrightBrand,
  copyrightLine,
  footerWidgets,
  instagramFeedTitle,
  instagramTiles,
} from '../data'

describe('Footer', () => {
  it('shows the five widget columns with their links', () => {
    render(<Footer />)

    for (const widget of footerWidgets) {
      expect(screen.getByRole('heading', { name: widget.title })).toBeInTheDocument()
      for (const link of widget.links) {
        expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getByRole('heading', { name: instagramFeedTitle })).toBeInTheDocument()
  })

  it('shows eight instagram tiles', () => {
    render(<Footer />)

    expect(screen.getAllByRole('img')).toHaveLength(instagramTiles.length)
  })

  it('shows the copyright line with the Lede name and the social icons', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    const escapedLine = copyrightLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(escapedLine))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(copyrightBrand))).toBeInTheDocument()
    for (const social of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('uses the brand name in the instagram alt text', () => {
    render(<Footer />)

    expect(
      screen.getByRole('img', { name: `${brandName} Instagram photo lede-ig-1` }),
    ).toBeInTheDocument()
  })
})
