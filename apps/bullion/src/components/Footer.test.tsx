import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  bottomBarLinks,
  brandName,
  copyrightText,
  footerBlurb,
  footerMostPopular,
  mostPopularTitle,
  socials,
} from '../data'

describe('Footer', () => {
  it('renders the brand column, two MOST POPULAR columns and the bottom bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(copyrightText))).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { name: mostPopularTitle })
    expect(headings).toHaveLength(2)
    for (const post of footerMostPopular) {
      expect(screen.getByRole('link', { name: post.headline })).toBeInTheDocument()
    }

    for (const link of bottomBarLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-dark')
  })
})
