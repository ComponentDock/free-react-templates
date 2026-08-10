import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  footerCopyright,
  instagramFollowers,
  instagramHandle,
  instagramHeading,
  instagramTiles,
  socialLabels,
  socialLinks,
} from '../data'

describe('Footer', () => {
  it('shows the instagram strip, footer social links and copyright bar', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('region', { name: instagramHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: instagramHandle })).toBeInTheDocument()
    expect(screen.getByText(instagramFollowers)).toBeInTheDocument()
    // Avatar block image + 6 square tiles.
    expect(container.querySelectorAll('img')).toHaveLength(instagramTiles.length + 1)

    socialLinks.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
    expect(screen.getByText(footerCopyright, { exact: false })).toBeInTheDocument()
  })
})
